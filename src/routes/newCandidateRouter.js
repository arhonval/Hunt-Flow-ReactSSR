const express = require('express');
const newCandidateRouter = express.Router();
const multer = require('multer');
const nodemailer = require('nodemailer');
const { Candidate, User, Vacancy, History } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const NewCandidate = require('../views/NewCandidate');
const NewCandidateResume = require('../views/NewCandidatesResume');
const isAuth = require('../middlewares/isAuth');

async function sendEmail(email, candidateName) {
  // Настройте транспорт для отправки письма
  let transporter = nodemailer.createTransport({
    // Укажите настройки для отправки почты, например, SMTP или Sendmail
    // Например, для использования Gmail как SMTP-сервера:
    service: 'outlook',
    auth: {
      user: 'wallmax95@outlook.com',
      pass: 'Dolgov95',
    },
  });

  // Укажите данные для отправки письма
  let mailOptions = {
    from: 'Рекрутер',
    to: email,
    subject: 'Приглашение на собеседование',
    text: `Здравствуйте, ${candidateName}! Приглашаем вас на собеседование, наш HR с вами свяжется в ближайшее время`,
  };

  // Отправьте письмо
  let info = await transporter.sendMail(mailOptions);

  console.log('Email sent: ' + info.response);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploadsphoto');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const uploadphoto = multer({ storage });

const pdfStorage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploadspdf');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const pdfupload = multer({ storage: pdfStorage });

newCandidateRouter.get('/', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    renderTemplate(NewCandidate, { login, vacancies }, res);
  } catch (error) {
    console.error(error);
    res.send('Ой ой ой');
  }
});

newCandidateRouter.post('/', uploadphoto.single('photo'), async (req, res) => {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      experience_age,
      phone_number,
      email,
      vacancy_id,
    } = req.body;
    const { login } = req.session;

    const photoFileName = req.file.filename;
    const pdfFileName = req.file.filename;

    const newCandidate = await Candidate.create({
      first_name,
      middle_name,
      last_name,
      experience_age,
      phone_number,
      email,
      vacancy_id,
      photo: `/uploadsphoto/${photoFileName}`,
      stage_id: 1,
      // `/uploadspdf/${pdfFileName}`,
    });

    const newHistory = await History.create({
      candidate_id: newCandidate.id,
      stage_id: 1,
    });

    // Отправьте электронное письмо с помощью функции sendEmail!!!!!!
    await sendEmail(email, first_name);

    res.redirect(`/newcandidate/${newCandidate.id}/resume`);
  } catch (error) {
    console.error('======>', error);
    res.sendStatus(500);
  }
});

newCandidateRouter.get('/:id/resume', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const { id } = req.params;
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    renderTemplate(NewCandidateResume, { login, id, vacancies }, res);
  } catch (error) {
    console.error(error);
    res.send('Ой ой ой');
  }
});

newCandidateRouter.post(
  '/:id/resume',
  pdfupload.single('pdf'),
  async (req, res) => {
    try {
      const { login } = req.session;
      const { id } = req.params;
      const pdfFileName = req.file.filename;

      await Candidate.update(
        {
          pdf: `/uploadspdf/${pdfFileName}`,
        },
        { where: { id } }
      );
      res.redirect('/sort-new');
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

module.exports = newCandidateRouter;

const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CandidatesCards = require('../views/CandidatesCards');
const { Vacancy } = require('../../db/models');

const Main = require('../views/Main');
const isAuth = require('../middlewares/isAuth');


router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('RecruitCookie');
    res.redirect('/');
  });
});

router.get('/', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    renderTemplate(Main, { vacancies, login }, res);
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;

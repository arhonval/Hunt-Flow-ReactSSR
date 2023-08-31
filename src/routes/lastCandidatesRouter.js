const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CandidatesCards = require('../views/CandidatesCards');
const { Candidate, Vacancy, Stage, Comment } = require('../../db/models');
const isAuth = require('../middlewares/isAuth');

router.get('/', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const limit = 4;
    const candidates = await Candidate.findAll({
      order: [['createdAt', 'DESC']],
      limit,
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(CandidatesCards, { candidatesNoMeta, stages, vacancies, login }, res);
  } catch (error) {
    console.log('======>', error);
    res.sendStatus(400);
  }
});

module.exports = router;

const candidatesRouter = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const CandidatesCards = require('../views/CandidatesCards');
const { Candidate, Vacancy, Stage, Comment } = require('../../db/models');
const isAuth = require('../middlewares/isAuth');

candidatesRouter.get('/', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidates = await Candidate.findAll({
      include: [Vacancy, Stage, Comment],
    });
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-1', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 1 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    console.log('candidatesNoMeta:', candidatesNoMeta);
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-2', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 2 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-3', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 3 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    console.log('candidatesNoMeta:', candidatesNoMeta[0].Stages);
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-4', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 4 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-5', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 5 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-6', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 6 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-7', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 7 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/stage-8', isAuth, async (req, res) => {
  try {
    const { login } = req.session;
    const candidates = await Candidate.findAll({
      where: { stage_id: 8 },
      include: [Vacancy, Stage, Comment],
    });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    const candidatesNoMeta = candidates.map((el) => el.get({ plain: true }));
    const stages = await Stage.findAll({ raw: true });
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const { login } = req.session;
    const candidate = await Candidate.findByPk(id, {
      include: [Vacancy, Stage, Comment],
    });
    const candidateNoMeta = candidate.get({ plain: true });
    const stages = await Stage.findAll({ raw: true });
    res.json({ candidateNoMeta, stages });
  } catch (error) {
    res.send(error);
  }
});

candidatesRouter.get('/vacancy/:id', isAuth, async (req, res) => {
  const { id } = req.params;
  const { login } = req.session;
  try {
    const findCandidatesByVacId = await Candidate.findAll({
      include: [Vacancy, Stage, Comment],
      where: { vacancy_id: id },
    });
    const candidatesNoMeta = findCandidatesByVacId.map((el) =>
      el.get({ plain: true })
    );
    const stages = await Stage.findAll({ raw: true });
    const vacanciesWithMeta = await Vacancy.findAll();
    const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
    console.log(candidatesNoMeta);
    renderTemplate(
      CandidatesCards,
      {
        candidatesNoMeta,
        stages,
        vacancies,
        login,
      },
      res
    );
  } catch (error) {
    res.send(error);
  }
});

module.exports = candidatesRouter;

const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const { Vacancy } = require('../../db/models');
const NewVacancy = require('../views/NewVacancy');
const isAuth = require('../middlewares/isAuth');

router.get('/', isAuth, async (req, res) => {
  const { login } = req.session;
  const vacanciesWithMeta = await Vacancy.findAll();
  const vacancies = vacanciesWithMeta.map((el) => el.get({ plain: true }));
  renderTemplate(NewVacancy, { login, vacancies }, res);
});

router.post('/', isAuth, async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, needs, salary } = req.body;
    await Vacancy.create({
      name,
      description,
      needs,
      salary,
    });
    res.redirect('/candidates');
  } catch (error) {
    res.sendStatus(400);
  }
});

module.exports = router;

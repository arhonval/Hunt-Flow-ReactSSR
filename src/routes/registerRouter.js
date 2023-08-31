const express = require('express');
const bcrypt = require('bcrypt');

const registerRouter = express.Router();
const checkUser = require('../middlewares/checkUser');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Registration');

const { User } = require('../../db/models');

registerRouter.get('/', checkUser, (req, res) => {
  renderTemplate(Register, {}, res);
});

registerRouter.post('/', async (req, res) => {
  const { login, password, email, first_name, last_name, company_name } =
    req.body;

  try {
    const hash = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.json({ error: 'Пользователь с таким email уже существует' });
    } else {
      const newUser = await User.create({
        login,
        password: hash,
        email,
        first_name,
        last_name,
        company_name,
      });
      req.session.login = newUser.login;
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован' });
      });
    }
  } catch (error) {
    res.json({ error: 'Внутренняя ошибка сервера' });
  }
});

module.exports = registerRouter;

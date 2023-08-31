const express = require('express');
const bcrypt = require('bcrypt');

const loginRouter = express.Router();
const checkUser = require('../middlewares/checkUser');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');

const { User } = require('../../db/models');

loginRouter.get('/', checkUser, (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRouter.post('/', async (req, res) => {
  const { login, password, companyName } = req.body;

  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        if (companyName === user.company_name) {
          req.session.login = user.login;
          req.session.save(() => {
            res.json({ msg: 'Вы успешно авторизованы!' });
          });
        } else {
          res.json({ error: 'Пароль или название компании неверны' });
        }
      } else {
        res.json({ error: 'Пароль неверный' });
      }
    } else {
      res.json({ error: 'Такой пользователь не найден' });
    }
  } catch (error) {
    res.json({ error: 'Ошибка' });
  }
});

module.exports = loginRouter;

const { sequelize } = require('./models');

module.exports = async function dbConnectCheck() {
  try {
    await sequelize.authenticate();
    console.log('БАЗА ПОДКЛЮЧЕНА!');
  } catch (error) {
    console.log('БАЗА НЕ ПОДКЛЮЧЕНА ==>', error);
  }
};

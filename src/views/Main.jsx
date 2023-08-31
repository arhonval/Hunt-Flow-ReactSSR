const React = require('react');
const Layout = require('./Layout');

function Main({ vacancies, login }) {
  return (
    <Layout vacancies={vacancies} login={login}>
      {login ? (
        <h1 className="hello">{`Добро пожаловать, ${login}`}</h1>
      ) : (
        <h1 className="hello">Авторизируйтесь</h1>
      )}
    </Layout>
  );
}

module.exports = Main;

const React = require('react');
const Layout = require('./Layout');

module.exports = function Register() {
  return (
    <Layout>
      <script defer src="/js/register.js" />
      <div className="registrationForm">
        <h2 style={{ color: 'black' }}>Регистрация</h2>
        <div className="card col-md-3" style={{ width: '25rem' }}>
          <form id="regForm" name="regForm">
            <label
              htmlFor="exampleInputName"
              className="form-label"
              style={{ color: 'black' }}
            >
              Login
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="exampleInputName"
            />
            <label
              htmlFor="exampleInputPassword"
              className="form-label"
              style={{ color: 'black' }}
            >
              Пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
            <label
              htmlFor="exampleInputEmail"
              className="form-label"
              style={{ color: 'black' }}
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail"
            />
            <label
              htmlFor="exampleInputFirstName"
              className="form-label"
              style={{ color: 'black' }}
            >
              Имя
            </label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              id="exampleInputFirstName"
            />
            <label
              htmlFor="exampleInputLastName"
              className="form-label"
              style={{ color: 'black' }}
            >
              Фамилия
            </label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              id="exampleInputLastName"
            />
            <label
              htmlFor="exampleInputCompanyName"
              className="form-label"
              style={{ color: 'black' }}
            >
              Название компании
            </label>
            <input
              name="company_name"
              type="text"
              className="form-control"
              id="exampleInputCompanyName"
            />
            <br />
            <div className="btnSubmit">
              <button type="submit" className="btn btn-primary">
                Отправить
              </button>
            </div>
          </form>
          <h3 className="regMsg" style={{ color: 'black' }} />
        </div>
      </div>
    </Layout>
  );
};

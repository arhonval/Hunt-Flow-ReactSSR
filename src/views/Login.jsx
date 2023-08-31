const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src="/js/login.js" />
      <div className="loginForm">
        <h2 style={{ color: 'black' }}>Войдите на сайт</h2>
        <div className="card col-md-3" style={{ width: '25rem' }}>
          <form id="loginForm" name="loginForm">
            <label
              htmlFor="exampleInput1"
              className="form-label"
              style={{ color: 'black' }}
            >
              Login
            </label>
            <input
              name="login"
              type="text"
              className="form-control"
              id="exampleInput1"
            />
            <label
              htmlFor="exampleInput2"
              className="form-label"
              style={{ color: 'black' }}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword"
            />
            <label
              htmlFor="exampleInput2"
              className="form-label"
              style={{ color: 'black' }}
            >
              Компания
            </label>
            <input
              name="companyName"
              type="text"
              className="form-control"
              id="exampleInputCompanyName"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </form>
          <h3 className="logMsg" style={{ color: 'black' }} />
        </div>
      </div>
    </Layout>
  );
};

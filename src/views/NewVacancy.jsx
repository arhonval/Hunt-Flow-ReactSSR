const React = require('react');
const Layout = require('./Layout');

function NewVacancy({ login, vacancies }) {
  return (
    <Layout login={login} vacancies={vacancies}>
      <div className="create-form container">
        <h1>Добавьте новую вакансию</h1>
        <div className="card col-md-3">
          <form
            method="POST"
            action="/new-vacancy"
            name="newVacancyForm"
          >
            <label htmlFor="vacancy_name">Название вакансии:</label>
            <input type="text" id="input-style" name="name" required />
            <br />
            <label htmlFor="description_name">Описание:</label>
            <input type="text" id="input-style" name="description" required />
            <br />
            <label htmlFor="needs">Требования:</label>
            <input type="text" id="input-style" name="needs" required />
            <br />
            <label htmlFor="salary">Заработная плата:</label>
            <input type="number" id="input-style" name="salary" required />
            <br />
            <button type="submit" className="btn btn-submit">
              Создать
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = NewVacancy;

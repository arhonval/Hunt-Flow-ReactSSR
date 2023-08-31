const React = require('react');
const Layout = require('./Layout');

function NewCandidate({ login, vacancies }) {
  return (
    <Layout login={login} vacancies={vacancies}>
      <link rel="stylesheet" href="/css/style.css" />
      <div className="create-form container">
        <h1>Добавление кандидата</h1>
        <form
          method="POST"
          action="/newcandidate"
          encType="multipart/form-data"
          name="newCandidateForm"
        >
          <div className="card col-md-3">
            <label htmlFor="last_name">Фамилия:</label>
            <input type="text" id="last_name" name="last_name" required />

            <label htmlFor="first_name">Имя:</label>
            <input type="text" id="first_name" name="first_name" required />

            <label htmlFor="middle_name">Отчество:</label>
            <input type="text" id="middle_name" name="middle_name" required />

            <label htmlFor="experience_age">Опыт работы:</label>
            <input
              type="number"
              id="experience_age"
              name="experience_age"
              required
            />

            <label htmlFor="phone_number">Номер телефона:</label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              required
            />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="vacancy_id">Вакансии:</label>
            <select id="vacancy_id" name="vacancy_id" required>
              <option value="">Выберите вакансию</option>
              {vacancies.map((vacancy) => (
                <option key={vacancy.id} value={vacancy.id}>
                  {vacancy.name}
                </option>
              ))}
            </select>

            <label htmlFor="photo">*Фото:</label>
            <input type="file" id="photo" name="photo" required />

            <button type="submit" className="btn btn-primary">
              Создать
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = NewCandidate;

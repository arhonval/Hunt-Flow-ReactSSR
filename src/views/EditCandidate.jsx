const React = require('react');
const Layout = require('./Layout');

function EditCandidate({ login, id }) {
  return (
    <Layout login={login}>
      <div className="create-form container">
        <h1>Изменить карточку кандидата</h1>
        <form
          method="POST"
          action={`/candidates/${id}/edit`}
          encType="multipart/form-data"
          name="newCandidateForm"
        >
          <div className="card col-md-3" style={{ width: '25rem' }}>
            <label htmlFor="last_name">Фамилия:</label>
            <input type="text" id="last_name" name="last_name" required />

            <label htmlFor="first_name">Имя:</label>
            <input type="text" id="first_name" name="first_name" required />

            <label htmlFor="middle_name">Отчество:</label>
            <input type="text" id="middle_name" name="middle_name" required />

            <label htmlFor="experience_age">Опыт работы:</label>
            <input type="number" id="experience_age" name="experience_age" required />

            <label htmlFor="phone_number">Номер телефона:</label>
            <input type="number" id="phone_number" name="phone_number" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <button type="submit" className="btn btn-primary">Изменить</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = EditCandidate;

const React = require('react');
const Layout = require('./Layout');

function NewCandidateResume({ login, id, vacancies }) {
  return (
    <Layout login={login} vacancies={vacancies}>
      <div className="create-form container">
        <h1>Добавление резюме кандидата</h1>
        <form
          method="POST"
          action={`/newcandidate/${id}/resume`}
          encType="multipart/form-data"
          name="newCandidateForm"
        >
          <div className="card col-md-3" style={{ width: '25rem' }}>
            <label htmlFor="pdf">*Резюме (PDF):</label>
            <input type="file" id="pdf" name="pdf" required />
            <button type="submit" className="btn btn-primary">
              Создать
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

module.exports = NewCandidateResume;

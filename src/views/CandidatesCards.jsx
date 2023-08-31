const React = require('react');
const Layout = require('./Layout');

module.exports = function CandidatesCards({
  candidatesNoMeta,
  stages,
  vacancies,
  login,
}) {
  return (
    <Layout vacancies={vacancies} login={login}>
      <link rel="stylesheet" href="/css/candidates.css" />
      <script defer src="/js/candidates.js" />
      {candidatesNoMeta.length ? (
        <div className="d-flex container" id="conatiner">
          <div
            className="cards d-flex flex-wrap w-50 align-items-start"
            style={{ borderRight: 'solid', overflow: 'auto', height: '89vh' }}
          >
            {candidatesNoMeta.map((candidate) => (
              <div
                className="card m-2"
                style={{ width: '18rem' }}
                key={`card ${candidate.id}`}
              >
                <img
                  src={candidate.photo}
                  className="card-img-top"
                  alt="photo"
                  height="350"
                />
                <div className="card-body">
                  <p className="card-text" data-card={candidate.id}>
                    {`${candidate.last_name} ${candidate.first_name} ${candidate.middle_name}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="info d-flex justify-content-around w-50"
            style={{ overflow: 'auto', height: '89vh' }}
          >
            <div className="info-text ms-3">
              <h3 className="FIO my-5">{`${candidatesNoMeta[0].last_name} ${candidatesNoMeta[0].first_name} ${candidatesNoMeta[0].middle_name}`}</h3>
              <div className="phone">{`Телефон: ${candidatesNoMeta[0].phone_number}`}</div>
              <div className="email">{`Почта: ${candidatesNoMeta[0].email}`}</div>
              <div className="vacancy">{`Вакансия: ${candidatesNoMeta[0].Vacancy.name}`}</div>
              <div className="experience">{`Опыт: ${candidatesNoMeta[0].experience_age}`}</div>
              <div className="resume">
                <button
                  className="btn btn-primary resume-btn"
                  data-resume={candidatesNoMeta[0].pdf}
                >
                  Резюме
                </button>
              </div>
              <br />
              <div
                className="comments"
                id={`comment-${candidatesNoMeta[0].id}`}
              >
                Комментарии:
                {candidatesNoMeta[0].Comments.map((comment) => (
                  <div className="comment">{comment.body}</div>
                ))}
              </div>
            </div>
            <div className="info-inputs-photo">
              <img
                src={candidatesNoMeta[0].photo}
                className="card-img-top mb-5"
                alt="photo"
                height="400"
                style={{ maxWidth: '300px' }}
              />
              <div
                className="history mb-4 p-3"
                style={{
                  border: 'solid',
                  borderRadius: '10px',
                  maxWidth: '300px',
                }}
              >
                <h4>История:</h4>
                {candidatesNoMeta[0].Stages.map((stage) => (
                  <div>
                    {`${stage.History.createdAt.toLocaleString()} - ${
                      stage.name
                    }`}
                  </div>
                ))}
                <div className="dropdown">
                  <button
                    className="btn btn-primary change-stage dropdown-toggle mt-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Смена этапа
                  </button>
                  <ul
                    className="dropdown-menu"
                    data-candidate={candidatesNoMeta[0].id}
                  >
                    {stages.map((stage) => (
                      <li
                        className="dropdown-item"
                        data-stage={stage.id}
                        id={`stage-${stage.id}`}
                      >
                        {stage.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="comment">
                <div>Оставить комментарий:</div>
                <form name="commentForm">
                  <textarea
                    name="comment"
                    className="form-control"
                    id="comm"
                    rows="3"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary send-comment mt-2 mb-5"
                    data-comment={candidatesNoMeta[0].id}
                  >
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>На данном этапе нет кандидатов</h1>
      )}
    </Layout>
  );
};

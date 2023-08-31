const React = require('react');

function Navbar({ vacancies, login }) {
  return (
    <div className="NavbarMenu">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
        <div className="container-fluid">
          {login ? (
            <>
              <div className="leftSideNav">
                <a href="/new-vacancy">
                  <button
                    className="btn btn-outline-success"
                    type="button"
                    style={{ backgroundColor: '#0d6efd', color: '#ffffff' }}
                  >
                    Создать вакансию
                  </button>
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Переключатель навигации"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/candidates"
                    >
                      Все кандидаты
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/sort-new">
                      Новые кандидаты
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Кандидаты по вакансиям
                    </a>
                    <ul className="dropdown-menu">
                      {vacancies?.map((vacancy) => (
                        <li key={vacancy.id}>
                          <a
                            className="dropdown-item"
                            href={`/candidates/vacancy/${vacancy.id}`}
                          >
                            {vacancy.name}
                          </a>
                        </li>
                      ))}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/new-vacancy">
                          Создать вакансию
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="rigthSideNav">
                  <a href="/newcandidate">
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      style={{ backgroundColor: '#0d6efd', color: '#ffffff' }}
                    >
                      Создать кандидата
                    </button>
                  </a>
                  <a className="logout" href="/logout">
                    Выход
                  </a>
                </div>
              </div>
            </>
          ) : (
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/register">
                  Регистрация
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Вход
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

module.exports = Navbar;

const React = require('react');

function StageMenu({ login }) {
  return (
    <div className="stageMenu">
      <ul className="nav nav-underline d-flex justify-content-around">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Активная
          </a>
        </li> */}
        {login ? (
          <>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-1">
                Письмо
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-2">
                Звонок-скрининг
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-3">
                Видеоинтервью
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-4">
                Резюме у заказчика
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-5">
                Интервью с заказчиком
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-6">
                Выставлен оффер
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-7">
                Вышел на работу
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/candidates/stage-8">
                Отказ
              </a>
            </li>
          </>
        ) : (
          <span />
        )}
      </ul>
    </div>
  );
}

module.exports = StageMenu;

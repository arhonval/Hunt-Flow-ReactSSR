const cards = document.querySelector('.cards');
const infoDiv = document.querySelector('.info');
const { commentForm } = document.forms;
const container = document.querySelector('.container');

// async function downloadFile(url) {
//   try {
//     const response = await fetch(url);
//     const blob = await response.blob();
//     const urlObject = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = urlObject;
//     a.download = url.split('/').pop();
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(urlObject);
//   } catch (error) {
//     console.error(error);
//   }
// }

container.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('card-text')) {
    console.log('click');
    const id = e.target.dataset.card;
    console.log('id:', id);
    try {
      const response = await fetch(`/candidates/${id}`, {
        method: 'GET',
      });
      const result = await response.json();
      console.log('result:', result);
      let historyDivs = '';
      result.candidateNoMeta.Stages.forEach((el) => {
        historyDivs += `<div>${new Date(
          el.History.createdAt
        ).toLocaleDateString('RU-ru')}, ${new Date(
          el.History.createdAt
        ).toLocaleTimeString('RU-ru')} - ${el.name}</div>`;
      });
      console.log(historyDivs);
      let commDivs = '';
      if (e.target.classList.contains('btn-primary')) {
        const fileUrl = `/uploadspdf/${result.candidateNoMeta.pdf}`;
        downloadFile(fileUrl);
        return;
      }
      if (result.candidateNoMeta.Comments.length) {
        result.candidateNoMeta.Comments.forEach((el) => {
          commDivs += `<div class='comment'>${el.body}</div>`;
        });
      } else {
        commDivs += `<div class='comment'></div>`;
      }
      const commentId = `comment-${result.candidateNoMeta.id}`;
      const candidateHtml = `
    <div class="info-text ms-3">
        <h3 class="FIO my-5">${result.candidateNoMeta.last_name} ${result.candidateNoMeta.first_name} ${result.candidateNoMeta.middle_name}</h3>
        <div class="phone">Телефон: ${result.candidateNoMeta.phone_number}</div>
        <div class="email">Почта: ${result.candidateNoMeta.email}</div>
        <div class="vacancy">Вакансия: ${result.candidateNoMeta.Vacancy.name}</div>
        <div class="experience">Опыт: ${result.candidateNoMeta.experience_age}</div>
        <div class="resume">
        <button
        class="btn btn-primary resume-btn"
        data-resume=${result.candidateNoMeta.pdf}
      >
        Резюме
      </button>
        </div>
        <br>
        <div class='comments' id=${commentId}>
              Комментарии:
                ${commDivs}
            </div>
      </div>
      <div class="info-inputs-photo">
        <img src=${result.candidateNoMeta.photo} class="card-img-top mb-5" alt="photo" height="400" style="max-width: 300px;"/>
        <div
          class="history mb-4 p-3"
          style="border: solid; border-radius: 10px; max-width: 300px;"
        >
          <h4>История:</h4>
          ${historyDivs}
          <div class="dropdown">
            <button
              class="btn btn-primary change-stage dropdown-toggle mt-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Смена этапа
            </button>
            <ul class="dropdown-menu" data-candidate=${result.candidateNoMeta.id}>
                <li class="dropdown-item" id="stage-1" data-stage="1">
                    Письмо
                </li>
                <li class="dropdown-item" id="stage-2" data-stage="2">
                    Звонок-скрининг
                </li>
                <li class="dropdown-item" id="stage-3" data-stage="3">
                    Видео-интервью
                </li>
                <li class="dropdown-item" id="stage-4" data-stage="4">
                    Резюме у заказчика
                </li>
                <li class="dropdown-item" id="stage-5" data-stage="5">
                    Интервью с заказчиком
                </li>
                <li class="dropdown-item" id="stage-6" data-stage="6">
                    Выставлен оффер
                </li>
                <li class="dropdown-item" id="stage-7" data-stage="7">
                    Вышел на работу
                </li>
                <li class="dropdown-item" id="stage-8" data-stage="8">
                    Отказ
                </li>
            </ul>
          </div>
        </div>
        <div class="comment">
          <div>Оставить комментарий:</div>
          <form name="commentForm">
            <textarea
              name="comment"
              class="form-control"
              id="comm"
              rows="3"
            ></textarea>
            <button class="btn btn-primary send-comment mt-2 mb-5" data-comment=${result.candidateNoMeta.id}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    `;
      infoDiv.innerHTML = candidateHtml;
      scrollTo(scrollX, 0);
    } catch (error) {
      alert(error);
    }
  }

  if (e.target.classList.contains('send-comment')) {
    const id = e.target.dataset.comment;
    console.log('id:', id);
    const element = document.querySelector('.form-control').value;
    console.log('element:', element);
    try {
      const response = await fetch(`/comments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: element }),
      });
      const result = await response.json();
      console.log('result:', result);
      const allComments = document.getElementById(
        `comment-${result.candidate_id}`
      );
      const commentHtml = `
      <div class="comment">${result.body}</div>
      `;
      allComments.insertAdjacentHTML('beforeend', commentHtml);
      console.log(allComments);
      document.querySelector('.form-control').value = '';
    } catch (error) {
      alert(error);
    }
  }

  if (e.target.classList.contains('dropdown-item')) {
    console.log('click');
    const stageId = e.target.dataset.stage;
    const candidateId = e.target.parentNode.dataset.candidate;
    console.log('stageId:', stageId);
    console.log('candidateId:', candidateId);
    try {
      const response = await fetch('/stage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ candidateId, stageId }),
      });
      const result = await response.json();
      console.log('result:', result);
      if (result.err) {
        alert(result.err);
      } else {
        window.location.href = `/candidates/stage-${result.updatedCandidate.stage_id}`;
      }
    } catch (error) {
      alert(error);
    }
  }

  if (e.target.classList.contains('resume-btn')) {
    console.log('click');
    const pdfUrl = e.target.dataset.resume;
    console.log('pdfUrl:', pdfUrl);
    window.location.href = pdfUrl;
  }
});

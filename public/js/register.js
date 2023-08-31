const { regForm } = document.forms;
regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(regForm);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    alert('Введите свои данные!');
  } else {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      console.log(result);
      const msg = document.querySelector('.regMsg');
      if (result.error) {
        msg.innerText = result.error;
        msg.style.color = 'red';
      } else {
        window.location.href = '/candidates';
      }
    } catch (error) {
      alert('owibka', error);
    }
  }
});

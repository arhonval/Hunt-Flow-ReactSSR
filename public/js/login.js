const { loginForm } = document.forms;
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(loginForm);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    alert('Введите свои данные!');
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      const msg = document.querySelector('.logMsg');
      if (result.err) {
        msg.innerText = result.err;
        msg.style.color = 'red';
      } else {
        window.location.href = '/candidates';
      }
    } catch (error) {
      alert('owibka', error);
    }
  }
});

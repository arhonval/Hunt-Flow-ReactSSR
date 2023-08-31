const React = require('react');
const Navbar = require('./components/Navbar');
const StageMenu = require('./components/StageMenu');

module.exports = function Layout({ children, vacancies, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Hunt Flow</title>
      </head>
      <body>
        <Navbar vacancies={vacancies} login={login}/>
        <StageMenu login={login}/>
        {children}
      </body>
    </html>
  );
};

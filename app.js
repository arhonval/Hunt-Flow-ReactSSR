require('dotenv').config();
require('@babel/register');

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);
const ReactDOMServer = require('react-dom/server');


const isAuth = require('./src/middlewares/isAuth');
const dbConnectCheck = require('./db/dbConnectCheck');

const mainRouter = require('./src/routes/mainRouter');

// Require routes
const candidatesRouter = require('./src/routes/candidatesRouter');
const loginRouter = require('./src/routes/loginRouter');
const newCandidateRouter = require('./src/routes/newCandidateRouter');
const registerRouter = require('./src/routes/registerRouter');
const lastCandidatesRouter = require('./src/routes/lastCandidatesRouter');
const commentsRouter = require('./src/routes/commentsRouter');
const newVacancy = require('./src/routes/newVacancyRouter');
const stageRouter = require('./src/routes/stageRouter');

const sessionConfig = {
  name: 'RecruitCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

const app = express();
const { PORT } = process.env ?? 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public/')));
app.use('/uploadspdf', express.static('uploadspdf'));
app.use('/uploadsphoto', express.static('uploadsphoto'));
app.use(session(sessionConfig));

dbConnectCheck();

// Routes
app.use('/newcandidate', newCandidateRouter);

app.use('/', mainRouter);
app.use('/candidates', candidatesRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/sort-new', lastCandidatesRouter);
app.use('/comments', commentsRouter);
app.use('/new-vacancy', newVacancy);
app.use('/stage', stageRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

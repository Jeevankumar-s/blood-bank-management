import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db.js';  // Import the SQLite DB

//controllers
import UserLoginHandler from "./controllers/user/userLoginHandler.js";
import UserRegisterHandler from './controllers/user/UserRegisterHandler.js';
import RequestClassHandler from './controllers/bloodbank/RequestClassHandler.js';
import EmployeeLoginHandler from './controllers/employee/EmployeeLoginHandler.js';
import EmployeeRegisterHandler from './controllers/employee/EmployeeRegisterHandler.js';
import UpdateBlood from './controllers/bloodbank/UpdateStockHandler.js';
import UpdateHealthHandler from './controllers/bloodbank/UpdateHealthHandler.js';
import HandleRequestHandler from './controllers/bloodbank/HandleRequestHandler.js';
import DashboardHandler from './controllers/dashboard/DashboardHandler.js';
import SearchHandler from './controllers/bloodbank/SearchHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// User functionalities
UserRegisterHandler(app, db);
UserLoginHandler(app, db);
RequestClassHandler(app, db);

// Employee functionalities
EmployeeRegisterHandler(app, db);
EmployeeLoginHandler(app, db);
UpdateHealthHandler(app, db);
HandleRequestHandler(app, db);

// Bloodbank functionalities
DashboardHandler(app, db);
UpdateBlood(app, db);
SearchHandler(app, db);

// Listening to the port
app.listen(3001, (err) => {
  if (err) throw err;
  console.log("Listening on port: 3001");
});

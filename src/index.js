const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const PORT = 7749;
const db = require("./config/db");
const methodOverride = require('method-override');
const a = require("../src/routes/")
//connect db
db.connect();

app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");


const route = require("./routes");
const router = express.Router();
app.set("views", path.join(__dirname, "resources", "views"));

//router init
route(app);

//---------create swagger Ui docs page-------------

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:7749/api/v1",
			},
		],
	},
	apis: [`${path.join(__dirname, "./routes/*.js")}`],
};


const swaggerSpec = swaggerJSDoc(options);
app.use('/api/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

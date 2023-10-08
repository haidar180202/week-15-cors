const express = require('express');
const cors = require('cors');
const swaggerUi = require("swagger-ui-express");
const yaml = require("yaml");
const fs = require("fs");
const OpenApiValidator = require("express-openapi-validator");

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://rad-genie-f2e7ed.netlify.app',
  methods: 'GET',
};
app.use(cors(corsOptions));

const openApiPath = "doc/openapi.yaml";
const file = fs.readFileSync(openApiPath, "utf8");
const swaggerDocument = yaml.parse(file);

app.get('/', (req, res) => {
  res.json({ message: 'Transfer Request API DATA' });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
  OpenApiValidator.middleware({
    apiSpec: openApiPath,
    validateRequests: true,
  })
);


app.listen(3002, () => {
  console.log("server run on 3002");
});
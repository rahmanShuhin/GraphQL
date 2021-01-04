const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./Schema/Schema");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log("server is running");
});

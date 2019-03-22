const express = require("express");
const expressGQL = require("express-graphql");
const cors = require("cors");

const schema = require("./schema");

const PORT = process.env.PORT || 4000;
const DEV = process.env.NODE_ENV !== "production";

const app = express();

app.use(cors());

app.use(
  "/graphql",
  expressGQL({
    schema,
    graphiql: DEV,
  }),
);

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});

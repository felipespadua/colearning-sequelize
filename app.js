const express = require("express");
const app = express();
const UserRouter = require("./routes/UserRouter");
const PORT = 3000;
const models = require("./database/models");

app.use(express.json());

models.sequelize.sync();
// const connect = async () => {
//   try {
//     await models.sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// connect();

app.use("/users", UserRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

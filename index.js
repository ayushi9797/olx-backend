const express = require("express");
// importing database connection
const { connection } = require("./config/db");

// importing User's Router
const UserRouter = require("./router/User.Router");

// importing Post Router here
const PostRouter = require("./router/Post.Router");


const app = express();
app.use(express.json());

app.use('/', UserRouter);


// MiddleWare

// Post Router
app.use('/', PostRouter)

// Browser Router

//Home router
app.get("/", async (req, res) => {
  try {
    res.send(`<h1 > OLX HOME ROUTER </h1>`);

  } catch (error) {
    console.log(error.message);

  }

})


// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});

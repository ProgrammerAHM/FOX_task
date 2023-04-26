const express = require("express");
const axios = require("axios");
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8757;
const path = require('path');

var bodyParser = require('body-parser')

app.use("/dist", express.static(__dirname + '/dist'));
app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const imageKitBaseUrl = "https://imagekit.io/api/v1";
const headers = (cookie) => ({
  headers: {
    Cookie: cookie,
  },
});

const handleErrors = (res, error) => {
  res.status(500).send("Server error");
};

app.use(express.json());


app.get("/login", async (req, res) => {
  res.sendfile((__dirname + '/login.html'));
});

app.get("/file", async (req, res) => {
  res.sendfile((__dirname + '/imgs.html'));
});

app.get("/", async (req, res) => {
  res.sendfile((__dirname + '/index.html'));
});


app.get("/api/v1/folders", async (req, res) => {
  try {
    const { cookie } = req.headers;
    const { data } = await axios.get(
      `${imageKitBaseUrl}/files?searchQuery=type%3D%22folder%22`,
      headers(cookie)
    );
    const filteredResponse = data.map(({ name }) => ({ name }));
    res.json(filteredResponse);
  } catch (error) {
    console.log(error)
    handleErrors(res, error);
  }
});

app.get("/api/v1/allfile", async (req, res) => {
  try {
    const { cookie } = req.headers;
    var {data} = await axios.get(
      `${imageKitBaseUrl}/files?searchQuery=type%3D%22file%22`,
      headers(cookie)
    );
    const filteredResponse = data.map(({ url }) => ({ url }));
    res.json(filteredResponse);
  } catch (error) {
    console.log(error)
    handleErrors(res, error);
  }
});

app.get("/api/v1/files", async (req, res) => {
  try {
    const { cookie } = req.headers;
    const { path } = req.query;
    const { data } = await axios.get(
      `${imageKitBaseUrl}/files?searchQuery=type%3D%22file%22&path=${path}`,
      headers(cookie)
    );
    const filteredResponse = data.map(({ filePath, url }) => ({
      filePath,
      url,
    }));
    res.json(filteredResponse);
  } catch (error) {
    handleErrors(res, error);
  }
});

app.post("/api/v1/cookie", (req, res) => {
  const { value } = req.body;
  res.cookie("connect.sid", value);
  res.json("OK");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

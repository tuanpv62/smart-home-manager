const open = require("open").default;
const AUTO_OPEN = true;
const express = require("express");

const cors = require("cors");

const app = express();

const deviceRoutes = require("./routes/deviceRoutes");

app.use(cors());

app.use(express.json());

app.use("/devices", deviceRoutes);
const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend")));
const PORT = 3000;

//add auto open browser
app.listen(PORT, async () => {
  console.log(`Server running http://localhost:${PORT}`);

  if (AUTO_OPEN) {
    await open(`http://localhost:${PORT}`);
  }
});

/*
Nếu:

const AUTO_OPEN=true

Run:

node server.js

↓

Server start

↓

Browser tự mở

↓

Frontend hiện luôn

Nếu:

const AUTO_OPEN=false

↓

Chỉ chạy server

Không mở browser

*/

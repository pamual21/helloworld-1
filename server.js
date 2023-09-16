/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Pamualdeep Kaur Student ID: 160357216 Date: 16-09-2023 *
* Online (Cyclic) URL: https://brick-red-lovebird-boot.cyclic.cloud/
* ********************************************************************************/

const express = require('express');

const app = express();

const HTTP_PORT = process.env.PORT || 8080;

const data = {
  student_name: 'Asim Naveed',
  student_number: 141631192,
};
// setup a 'route' to listen on the default url path
app.get('/', (req, res) => {
  res.send({ student_date: data });
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

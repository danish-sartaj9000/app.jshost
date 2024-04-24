const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(2500, () => {
console.log("App Listening on port 2500");
})
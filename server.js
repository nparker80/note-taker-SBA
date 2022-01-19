const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true,}))
app.use(express.json());
app.use(express.static("public"));

require('./routes/apiRoutes.js');
require('./routes/htmlRoutes.js');

app.listen(PORT, function () {
  console.log(`Server start on PORT: ${PORT}`);
});
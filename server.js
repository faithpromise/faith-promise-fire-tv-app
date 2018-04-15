const express = require('express');

const app = express();

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The application is available http://localhost:${port}`));

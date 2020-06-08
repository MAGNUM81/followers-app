const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/index.html'))

// ... other API endpoints, can be localized in other files


app.listen(process.env.PORT || 8080)

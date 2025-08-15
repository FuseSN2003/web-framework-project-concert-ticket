const path = require('path');
const express = require('express');
const indexRoute = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, '/styles')));

app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
import app from './app'

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/saymyname', function (req, res) {
  res.send(process.env.USER || 'Sorry! I don\'t know your name.');
});

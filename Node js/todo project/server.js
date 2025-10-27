const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/connection');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Display all tasks
app.get('/', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) throw err;
    res.render('index', { tasks: results });
  });
});

// Add new task
app.post('/add', (req, res) => {
  const title = req.body.title;
  db.query('INSERT INTO tasks (title) VALUES (?)', [title], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Delete task
app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tasks WHERE id = ?', [id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Mark task as completed
app.post('/complete/:id', (req, res) => {
  const id = req.params.id;
  db.query('UPDATE tasks SET completed = NOT completed WHERE id = ?', [id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));


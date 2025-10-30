const express = require('express');
const db = require('./config/db');

const app = express();
app.use(express.json());

//  GET all books
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

//  POST add book
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  if (!title || !author || !year) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = 'INSERT INTO books (title, author, year) VALUES (?, ?, ?)';
  db.query(sql, [title, author, year], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, title, author, year });
  });
});

//  PUT update book
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;

  const sql = 'UPDATE books SET title=?, author=?, year=? WHERE id=?';
  db.query(sql, [title, author, year, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book updated successfully' });
  });
});

//  DELETE book
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM books WHERE id=?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  });
});

app.listen(3000, () => console.log('🚀 Server running on port 3000'));


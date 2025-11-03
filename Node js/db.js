const fs= require("fs");
const sql=require('mysql2');

const db=sql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"movieDB",
    }
);


// Read JSON file
const movies = JSON.parse(fs.readFileSync("movies.json", "utf-8"));

// Create table if not exists
const createTableQuery = `
CREATE TABLE IF NOT EXISTS movies (
  id INT PRIMARY KEY,
  movie_name VARCHAR(255),
  release_year INT,
  director VARCHAR(100),
  actor VARCHAR(100),
  actress VARCHAR(100)
)
`;

db.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log(" Table ready!");

  // Insert data
  const insertQuery = `
    INSERT INTO movies (id, movie_name, release_year, director, actor, actress)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  movies.forEach((movie) => {
    const values = [
      movie.id,
      movie.movie_name,
      movie.release_year,
      movie.director,
      movie.actor,
      movie.actress,
    ];

    db.query(insertQuery, values, (err) => {
      if (err) console.error("Insert error:", err.message);
    });
  });

  console.log(" All movie records inserted!");
  db.end();
});

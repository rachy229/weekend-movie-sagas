const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres" 
  JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id" 
  JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id";`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log('error in genre.router GET', error)
  res.sendStatus(500)
  })
});

module.exports = router;
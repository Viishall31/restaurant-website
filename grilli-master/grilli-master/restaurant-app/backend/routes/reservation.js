const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/reserve', (req, res) => {
  const { name, phone, person, reservationDate, time, message } = req.body;

  const sql = `INSERT INTO reservations (name, phone, person_count, reservation_date, reservation_time, message)
               VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, phone, parseInt(person), reservationDate, time, message], (err, result) => {
    if (err) return res.status(500).send('DB Error');
    res.send({ success: true, id: result.insertId });
  });
});

module.exports = router;

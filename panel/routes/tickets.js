const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const authCheck = (req, res, next) => {
  if (!req.user) return res.redirect('/');
  next();
};

router.get('/dashboard/tickets', authCheck, (req, res) => {
  const file = path.join(__dirname, '../config/tickets.json');
  const tickets = JSON.parse(fs.readFileSync(file));
  res.render('tickets', { user: req.user, tickets });
});

module.exports = router;
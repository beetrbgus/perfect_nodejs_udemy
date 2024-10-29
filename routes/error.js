const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.use((req, res, next) => {
    res.status(404).render('error', {docTitle : "Page Not Founded"});
});

module.exports = router;
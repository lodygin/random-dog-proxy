const express = require('express');
const router = express.Router();
const needle = require('needle');

// Env vars
const API_BASE_URL = process.env.API_BASE_URL;

function tossCoin() {
    return Math.random() < 0.5;
}

router.get('/', async (req, res) => {
    if (tossCoin()) {
        res.status(500).json({ message: 'Random error. Handle it!' });
        return;
    }

    try {
        const apiResponse = await needle('get', `${API_BASE_URL}/woof.json`);
        const data = apiResponse.body;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;

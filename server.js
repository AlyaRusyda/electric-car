const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Replace with your actual Rajaongkir API key
const API_KEY = '7d3205f7ea6f5f59de29ac769cf382b7';
const BASE_URL = 'https://api.rajaongkir.com/starter';

app.use(cors());

app.get('/api/provinces', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/province`, {
            headers: { key: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch provinces' });
    }
});

app.get('/api/cities/:provinceId', async (req, res) => {
    const { provinceId } = req.params;
    try {
        const response = await axios.get(`${BASE_URL}/city?province=${provinceId}`, {
            headers: { key: API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cities' });
    }
});

app.post('/api/cost', async (req, res) => {
    const { origin, destination, weight, courier } = req.body;

    if (!origin || !destination || !weight || !courier) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const response = await axios.post(`${BASE_URL}/cost`, null, {
            headers: { key: API_KEY },
            params: { origin, destination, weight, courier }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch shipping costs' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

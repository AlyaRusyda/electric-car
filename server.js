const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = '7d3205f7ea6f5f59de29ac769cf382b7';
const BASE_URL = 'https://api.rajaongkir.com/starter';

app.use(cors());
app.use(express.json())

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

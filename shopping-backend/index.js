const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api/clothing-items', (req, res) => {
    try {
      const clothingData = require('./clothing-items.json'); // Update the path
      res.json(clothingData);
    } catch (error) {
      console.error('Error reading clothing data:', error);
      res.status(500).json({ error: 'Failed to fetch clothing items' });
    }
  });

const PORT = process.env.PORT || 3001; // Use 3001 or any desired port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
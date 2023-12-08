// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/plats', {
   
  }).then(() => {
    console.log("MongoDB is connected");
  }).catch((error) => {
    console.error("MongoDB connection error: ", error);
    process.exit(1); // Exit the application on connection error
  });
// Define the plate schema
const plateSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Plate = mongoose.model('Plate', plateSchema);

// CRUD operations for plates

// Create a new plate
app.post('/plates', async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newPlate = new Plate({ name, description, price });
    await newPlate.save();
    res.json(newPlate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all plates
app.get('/plates', async (req, res) => {
  try {
    const plates = await Plate.find();
    res.json(plates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a plate
app.put('/plates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedPlate = await Plate.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );
    res.json(updatedPlate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a plate
app.delete('/plates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Plate.findByIdAndDelete(id);
    res.json({ message: 'Plate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

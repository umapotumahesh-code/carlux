// Simple placeholder controller using data.json in backend to respond
const path = require('path');
const fs = require('fs');

const dataPath = path.join(__dirname, '..', 'data.json');

function readData() {
  try {
    const raw = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { cars: [] };
  }
}

exports.getAllCars = (req, res) => {
  const data = readData();
  res.json(data.cars || []);
};

exports.getCarById = (req, res) => {
  const data = readData();
  const car = (data.cars || []).find(c => String(c.id) === String(req.params.carId));
  if (!car) return res.status(404).json({ error: 'Car not found' });
  res.json(car);
};

exports.createCar = (req, res) => {
  // In a real app, this would write to DB. For now acknowledge.
  res.status(201).json({ success: true, message: 'Car created (demo stub)' });
};

exports.getCarsBySeller = (req, res) => {
  const data = readData();
  const list = (data.cars || []).filter(c => String(c.sellerId) === String(req.params.sellerId));
  res.json(list);
};

exports.updateCar = (req, res) => {
  res.json({ success: true, message: 'Car updated (demo stub)' });
};

exports.deleteCar = (req, res) => {
  res.json({ success: true, message: 'Car deleted (demo stub)' });
};

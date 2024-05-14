const mongoose = require('mongoose');
require('dotenv').config();

const user = process.env.user;
const password = process.env.password;
const connectToDatabase = async () => {
  const uri = `mongodb+srv://${user}:${password}@cluster0.atdr1.mongodb.net/sistema-ventas?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
    console.log('Conexión a MongoDB Atlas establecida con éxito');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

module.exports = connectToDatabase;

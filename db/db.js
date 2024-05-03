const mongoose = require('mongoose');

const user = process.env.user;
const password = process.env.password;

const connectToDatabase = async () => {
  const uri = `mongodb+srv://${user}:${password}@cluster0.atdr1.mongodb.net`;

  try {
    await mongoose.connect(uri);
    console.log('Conexión a MongoDB Atlas establecida con éxito');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
};

module.exports = connectToDatabase;

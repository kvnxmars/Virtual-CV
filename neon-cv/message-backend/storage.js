const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date
});
const Message = mongoose.model('Message', messageSchema);

async function connectDb(uri) {
  await mongoose.connect(uri, { dbName: 'messages', useNewUrlParser: true, useUnifiedTopology: true });
  console.log('MongoDB connected');
}

module.exports = { connectDb, Message };

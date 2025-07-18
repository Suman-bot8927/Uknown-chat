const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, maxlength: 20, trim: true },
  profileImage: { type: String, default: '' },
}, { _id: false });

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 255,
    trim: true,
  },
  user: {
    type: userSchema,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Define index in the schema
messageSchema.index({ timestamp: -1 });

module.exports = mongoose.model('Message', messageSchema);
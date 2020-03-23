import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConctactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Entrer votre prénom'
  },
  lastName: {
    type: String,
    required: 'Entrer votre nom'
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

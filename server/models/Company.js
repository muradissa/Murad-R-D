const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  ceoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer',
  },
});

module.exports = mongoose.model('Company', CompanySchema);
// Company= > id , name logo ,ceo nane ,id
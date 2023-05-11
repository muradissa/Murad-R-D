const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    enum: ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'UX/UI' ,'Software Development', 'Devops', 'QA' ],
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  status: {
    type: String,
    enum: ['Online', 'Busy','Offline','Deleted'],
  },
  photo: {
    type: String,
    // required: true,
  },
  isManager:{
    type: Boolean,
    default: false,
  }
//   clientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Client',
//   },
});

module.exports = mongoose.model('Employer', EmployerSchema);
// /id / first name/ las name / email / phone / password / city / address/ department/team id/ role/workstatus /photo/ level 1-4
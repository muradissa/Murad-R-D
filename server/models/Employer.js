const mongoose = require('mongoose');

const EmployerSchema = new mongoose.Schema({
  // firstName lastName phone email password city address department status isPrpjectManager isTeamLeader photo companyId isValid
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
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    
  },
  birthday:{
    type: Date,
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
    enum: ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'UX/UI' ,'Software Development', 'Devops', 'QA','Other' ],
    default: 'Other',
    // required: true,
  },
  status: {
    type: String,
    enum: ['Online', 'Busy','Offline','Deleted'],
    default: 'Offline',
  },
  isProjectManager:{
    type: Boolean,
    default: false,
  },
  isTeamLeader:{
    type: Boolean,
    default: false,
  },
  photo: {
    type: String,
    // required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  isValid:{
    type: Boolean,
    default: true,
  }  
// teamId: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Team',
// },
//   clientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Client',
//   },
});

module.exports = mongoose.model('Employer', EmployerSchema);
// /id / first name/ las name / email / phone / password / city / address/ department/team id/ role/workstatus /photo/ level 1-4
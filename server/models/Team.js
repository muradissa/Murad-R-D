const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  department: {
    type: String,
    enum: ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'UX/UI' ,'Frontend', 'Backend','Software Development', 'Devops', 'QA' ],
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model('Team', TeamSchema);
// team => name ,department, teamLeaderID, projects id[], employersid[]
//  department : Marketing, Human Resources, Finance, Legal, Sales, UX/UI, Frontend, Backend, Software Development, Devops, QA 
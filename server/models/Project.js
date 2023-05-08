const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    required: true,
  },
  projectManagerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer',
  },
  teamsId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Team',
  },
//   clientId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Client',
//   },
});

module.exports = mongoose.model('Project', ProjectSchema);
//name, description, status, clientId,project_id , project Managerid , teams id [] 
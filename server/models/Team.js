const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  department: {
    type: String,
    enum: ['Marketing', 'Human Resources', 'Finance', 'Legal', 'Sales', 'UX/UI' ,'Frontend', 'Backend','Software Development', 'Devops', 'QA' ],
  },
  teamLeaderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employer',
  },
  projectsId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Project',
  },
  employersId:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Employer',
  }
});

module.exports = mongoose.model('Team', TeamSchema);
// team => name ,department, teamLeaderID, projects id[], employersid[]
//  department : Marketing, Human Resources, Finance, Legal, Sales, UX/UI, Frontend, Backend, Software Development, Devops, QA 
const Project = require('../models/Project');
const Company = require('../models/Company');
const Employer = require('../models/Employer');
const Team = require('../models/Team');
// import { Kind } from 'graphql/language';
const {Kind} = require('graphql/language');
// const Client = require('../models/Client');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLBoolean,
  GraphQLScalarType ,
  
} = require('graphql');


// const resolverMap = {
//   Date: new GraphQLScalarType({
//       name: 'Date',
//       description: 'Date custom scalar type',
//       parseValue(value) {
//           return new Date(value); // value from the client
//       },
//       serialize(value) { 
//           return value.getTime(); // value sent to the client
//       },
//       parseLiteral(ast) {
//           if (ast.kind === Kind.INT) {
//           return parseInt(ast.value, 10); // ast value is always in string format
//           }
//           return null;
//       },
//   })
// };

const  Date= new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
      return new Date(value); // value from the client
  },
  serialize(value) { 
      return value.getTime(); // value sent to the client
  },
  parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
  },
})

// Company Type
const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    ceoId: { type: GraphQLString },
    // employer: {
    //   type: EmployerType,
    //   resolve(parent, args) {
    //     return Employer.findById(parent.ceoId);
    //   },
    // },
  }),
});


// Employer Type
// firstName lastName phone email password city address department status isProjectManager isTeamLeader photo companyId isValid
const EmployerType = new GraphQLObjectType({
  name: 'Employer',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    birthday:{type: GraphQLString},
    city: { type: GraphQLString },
    address: { type: GraphQLString },
    department: { type: GraphQLString },
    // teamId: { type: GraphQLString },
    status: { type: GraphQLString },
    photo: { type: GraphQLString },
    isProjectManager: { type: GraphQLBoolean },
    isTeamLeader: { type: GraphQLBoolean },
    companyId: { type: GraphQLString }, // GraphQLID
    isValid: { type: GraphQLBoolean },

  })

});

// Project Type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    employer: {
      type: ClientType,
      resolve(parent, args) {
        return Employer.findById(parent.projectManagerId);
      },
    },

  }),
});

// // Team Type  
// const TeamType = new GraphQLObjectType({
//   name: 'Team',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     department: { type: GraphQLString },
//     team:{ 
//       type: EmployerType ,
//       resolve(parent, args) {
//       return Employer.findById(parent.teamLeaderID);
//     },},
//     projects: {
//       type: ProjectType,
//       resolve(parent, args) {
//         return Project.find({
//           _id: {
//             $in: parent.projectsId
//           }
//         });
//       },
//     },
//     employers:{ 
//       type: EmployerType ,
//       resolve(parent, args) {
//       return Employer.find({'teamId':parent.id});
//     },},
//   }),
// });
// Team Type  
const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    department: { type: GraphQLString },
    teamLeaderId:{ type: GraphQLString },
    companyId: { type: GraphQLString }, // GraphQLID
    teamMembersId:{type: new GraphQLList(GraphQLString)},
  }),
});

const TeamInfoType = new GraphQLObjectType({
  name: 'TeamInfo',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    department: { type: GraphQLString },
    // teamLeader:{
    //   type: EmployerType,
    //   resolve(parent, args) {
    //     return Employer.findById(parent.teamLeaderId);
    //   },
    // },
    teamLeader: {
      type: new GraphQLObjectType({
        name: 'TeamLeaderInfo',
        fields: {
          id: { type: GraphQLID },
          firstName: { type: GraphQLString },
          lastName: { type: GraphQLString },
          phone: { type: GraphQLString },
          email: { type: GraphQLString },
          status: { type: GraphQLString },
        },
      }),
      resolve(parent, args) {
        return Employer.findById(parent.teamLeaderId);
      },
    },
    // teamMembers:{
    //   type: new GraphQLList(EmployerType),
    //   resolve(parent, args) {
    //     return Employer.find({ _id: { $in: parent.teamMembersId } }); 
    //   },
    // },
    teamMembers: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'TeamMemberInfo',
          fields: {
            id: { type: GraphQLID },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            phone: { type: GraphQLString },
            email: { type: GraphQLString },
            status: { type: GraphQLString },

          },
        })
      ),
      resolve(parent, args) {
        return Employer.find({ _id: { $in: parent.teamMembersId } });
      },
    },
    companyId: { type: GraphQLString }, // GraphQLID
  }),
});

// const TeamType2 = new GraphQLObjectType({
//   name: 'Team',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     department: { type: GraphQLString },
//     teamLeaderId:{ type: EmployerType },
//     companyId: { type: GraphQLString }, // GraphQLID
//     teamMembersId:{type: GraphQLList(EmployerType)},
//   }),
// });

/////////////////
/////////////////
// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
/////////////////
/////////////////


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // projects: {
    //   type: new GraphQLList(ProjectType),
    //   resolve(parent, args) {
    //     return Project.find();
    //   },
    // },
    // project: {
    //   type: ProjectType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Project.findById(args.id);
    //   },
    // },
    // clients: {
    //   type: new GraphQLList(ClientType),
    //   resolve(parent, args) {
    //     return Client.find();
    //   },
    // },
    // client: {
    //   type: ClientType,
    //   args: { id: { type: GraphQLID } },
    //   resolve(parent, args) {
    //     return Client.findById(args.id);
    //   },
    // },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Company.findById(args.id);
      },
    },
    employer: {
      type: EmployerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Employer.findById(args.id);
      },
    },
    companyEmployers: {
      type: new GraphQLList(EmployerType),
      args: { companyId: { type: GraphQLID } },
      resolve(parent, args) {
        const employers =Employer.find({"companyId":args.companyId});
        // return Employer.find({"companyId":args.companyId});
        // console.log(employers)
        return employers;
      },
    },
    companyTeams: {
      type: new GraphQLList(TeamType),
      args: { companyId: { type: GraphQLID } },
      resolve(parent, args) {
        const teams =Team.find({"companyId":args.companyId});
        // return Employer.find({"companyId":args.companyId});
        // console.log(employers)
        return teams;
      },
    },
    companyTeamsInfo: {
      type: new GraphQLList(TeamInfoType ),
      args: { companyId: { type: GraphQLID } },
      resolve(parent, args) {
        const teams =Team.find({"companyId":args.companyId});
        // var teamInfo =[];
        // var teamMembers= [];
        // teams.forEach((team) => {
        //   team.teamMembersId.forEach((teamMemberId) => {
        //     const employer = Employer.findById(teamMemberId);
        //     teamMembers.push(employer)
        //   })
        //   //const teamMembers = Employer.find({"teamId":team._id});
        //   const teamLeadar = Employer.findById(team.teamLeaderId);

        //   const teamLeader = [];
        //   teamInfo.push(team.teamMembersId);
        // });
        return teams;
      },
    },
  },
});

// // Mutations
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
    
//     // Add a client
//     addClient: {
//       type: ClientType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         email: { type: GraphQLNonNull(GraphQLString) },
//         phone: { type: GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const client = new Client({
//           name: args.name,
//           email: args.email,
//           phone: args.phone,
//         });

//         return client.save();
//       },
//     },
    
//     // Delete a client
//     deleteClient: {
//       type: ClientType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         Project.find({ clientId: args.id }).then((projects) => {
//           projects.forEach((project) => {
//             project.deleteOne();
//           });
//         });

//         return Client.findByIdAndRemove(args.id);
//       },
//     },
    
//     // Add a project
//     addProject: {
//       type: ProjectType,
//       args: {
//         name: { type: GraphQLNonNull(GraphQLString) },
//         description: { type: GraphQLNonNull(GraphQLString) },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatus',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' },
//             },
//           }),
//           defaultValue: 'Not Started',
//         },
//         clientId: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         const project = new Project({
//           name: args.name,
//           description: args.description,
//           status: args.status,
//           clientId: args.clientId,
//         });

//         return project.save();
//       },
//     },
    
//     // Delete a project
//     deleteProject: {
//       type: ProjectType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, args) {
//         return Project.findByIdAndRemove(args.id);
//       },
//     },
    
//     // Update a project
//     updateProject: {
//       type: ProjectType,
//       args: {
//         id: { type: GraphQLNonNull(GraphQLID) },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         status: {
//           type: new GraphQLEnumType({
//             name: 'ProjectStatusUpdate',
//             values: {
//               new: { value: 'Not Started' },
//               progress: { value: 'In Progress' },
//               completed: { value: 'Completed' },
//             },
//           }),
//         },
//       },
//       resolve(parent, args) {
//         return Project.findByIdAndUpdate(
//           args.id,
//           {
//             $set: {
//               name: args.name,
//               description: args.description,
//               status: args.status,
//             },
//           },
//           { new: true }
//         );
//       },
//     },
//   },
// });

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a Company
    addCompany: {
      type: CompanyType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        image: { type:new  GraphQLNonNull(GraphQLString) },
        ceoId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const company = new Company({
          name: args.name,
          image: args.image,
          ceoId: args.ceoId,
        });
        console.log(args.name);
        return company.save();
      },
    },

    //Add a Employer
    // firstName lastName phone email password city address department status isPrpjectManager isTeamLeader photo companyId isValid
    addEmployer: {
      type: EmployerType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        birthday: { type: new GraphQLNonNull(GraphQLString) },
        city: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        department: { type: new GraphQLNonNull(GraphQLString) },
        // status: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLString },
        isProjectManager: { type: new GraphQLNonNull(GraphQLBoolean) },
        isTeamLeader: { type: new GraphQLNonNull(GraphQLBoolean) },
        // photo: { type: new GraphQLNonNull(GraphQLString) },
        photo: { type: GraphQLString },
        companyId: { type: new GraphQLNonNull(GraphQLString) },
        // isValid: { type: new GraphQLNonNull(GraphQLBoolean) },
        isValid: { type: GraphQLBoolean},

      },
      resolve(parent, args) {
        const employer = new Employer({
          firstName: args.firstName,
          lastName: args.lastName,
          phone: args.phone,
          email: args.email,
          password: args.password,
          birthday:args.birthday,
          city: args.city,
          address: args.address,
          department: args.department,
          status: args.status,
          isProjectManager: args.isProjectManager,
          isTeamLeader: args.isTeamLeader,
          photo: args.photo,
          companyId: args.companyId,
          isValid: args.isValid,
        });
        return employer.save();
      },
    },
    addTeam: {
      type: TeamType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        department: { type:new  GraphQLNonNull(GraphQLString) },
        companyId: { type: new GraphQLNonNull(GraphQLString) },
        teamLeaderId: { type: new GraphQLNonNull(GraphQLString) },
        teamMembersId: { type: new GraphQLList(GraphQLString) },

      },
      resolve(parent, args) {
        const team = new Team({
          name: args.name,
          department:args.department,
          teamLeaderId:args.teamLeaderId,
          teamMembersId: args.teamMembersId,
          companyId: args.companyId,

        });
        // console.log(args.name);
        return team.save();
      },
    },
    
    // Update a Company
    updateCompany: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        image: { type:GraphQLString },
        ceoId: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Company.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              image: args.image,
              ceoId: args.ceoId,
            },
          },
          { new: true }
        );
      },
    },
    //Update a Employer
    updateEmployer: {
      type: EmployerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        phone: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        birthday: { type: GraphQLString },
        city: { type: GraphQLString },
        address: { type: GraphQLString },
        department: { type: GraphQLString },
        // status: { type: GraphQLString },
        status: { type: GraphQLString },
        isProjectManager: { type: GraphQLBoolean },
        isTeamLeader: { type: GraphQLBoolean },
        // photo: { type: GraphQLString },
        photo: { type: GraphQLString },
        companyId: { type: GraphQLString },
        // isValid: { type: GraphQLBoolean },
        isValid: { type: GraphQLBoolean},
      },
      resolve(parent, args) {
        return Employer.findByIdAndUpdate(
          args.id,
          {
            $set: {
              firstName: args.firstName,
              lastName: args.lastName,
              phone: args.phone,
              email: args.email,
              password: args.password,
              birthday:args.birthday,
              city: args.city,
              address: args.address,
              department: args.department,
              status: args.status,
              isProjectManager: args.isProjectManager,
              isTeamLeader: args.isTeamLeader,
              photo: args.photo,
              companyId: args.companyId,
              isValid: args.isValid,
            },
          },
          { new: true }
        );
      },

    }
    
    // Delete a client
    // deleteClient: {
    //   type: ClientType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     Project.find({ clientId: args.id }).then((projects) => {
    //       projects.forEach((project) => {
    //         project.deleteOne();
    //       });
    //     });

    //     return Client.findByIdAndRemove(args.id);
    //   },
    // },
    
    // Add a project
    // addProject: {
    //   type: ProjectType,
    //   args: {
    //     name: { type: GraphQLNonNull(GraphQLString) },
    //     description: { type: GraphQLNonNull(GraphQLString) },
    //     status: {
    //       type: new GraphQLEnumType({
    //         name: 'ProjectStatus',
    //         values: {
    //           new: { value: 'Not Started' },
    //           progress: { value: 'In Progress' },
    //           completed: { value: 'Completed' },
    //         },
    //       }),
    //       defaultValue: 'Not Started',
    //     },
    //     clientId: { type: GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     const project = new Project({
    //       name: args.name,
    //       description: args.description,
    //       status: args.status,
    //       clientId: args.clientId,
    //     });

    //     return project.save();
    //   },
    // },
    
    // Delete a project
    // deleteProject: {
    //   type: ProjectType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //   },
    //   resolve(parent, args) {
    //     return Project.findByIdAndRemove(args.id);
    //   },
    // },
    
    // Update a project
    // updateProject: {
    //   type: ProjectType,
    //   args: {
    //     id: { type: GraphQLNonNull(GraphQLID) },
    //     name: { type: GraphQLString },
    //     description: { type: GraphQLString },
    //     status: {
    //       type: new GraphQLEnumType({
    //         name: 'ProjectStatusUpdate',
    //         values: {
    //           new: { value: 'Not Started' },
    //           progress: { value: 'In Progress' },
    //           completed: { value: 'Completed' },
    //         },
    //       }),
    //     },
    //   },
    //   resolve(parent, args) {
    //     return Project.findByIdAndUpdate(
    //       args.id,
    //       {
    //         $set: {
    //           name: args.name,
    //           description: args.description,
    //           status: args.status,
    //         },
    //       },
    //       { new: true }
    //     );
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
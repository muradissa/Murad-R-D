const Project = require('../models/Project');
const Company = require('../models/Company');
const Employer = require('../models/Employer');
const Team = require('../models/Team');

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
} = require('graphql');


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

// Team Type  
const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    department: { type: GraphQLString },
    team:{ 
      type: EmployerType ,
      resolve(parent, args) {
      return Employer.findById(parent.teamLeaderID);
    },},
    projects: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.find({
          _id: {
            $in: parent.projectsId
          }
        });
      },
    },
    employers:{ 
      type: EmployerType ,
      resolve(parent, args) {
      return Employer.find({'teamId':parent.id});
    },},
  }),
});


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
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
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
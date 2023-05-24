import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
// import Home from './pages/Home';
import Project from './pages/Project';
import Home from './components/home/Home';

import NotFound from './pages/NotFound';
import NavbarSec from './components/navbar/NavbarSec';
import NavbarPri from './components/navbar/NavbarPri';
import Employers from './components/employers/Employers';
import Teams from './components/team/Teams';
import MyTeam from './components/team/MyTeam';
import NewTeam from './components/team/NewTeam';
import Departmentss from './components/department/Departmentss';
import SecondaryNavbar from './components/navbar/SecondaryNavbar';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          {/* <Header /> */}
          {/* <NavbarPri/> */}
          <NavbarSec/>
          {/* <SecondaryNavbar></SecondaryNavbar> */}
          <div className='container'>
            <Routes>
              <Route path='/Home' element={<Home />} />

              <Route path='/employers' element={<Employers />} />
              {/* <Route path='/myteam' element={<MyTeam />} /> */}
              <Route path='/teams' element={<Teams />} />
              {/* <Route path='/newteam' element={<NewTeam />} /> */}
              <Route path='/departments' element={<Departmentss />} />


                {/* <Route path='/' element={<Home />} /> */}
                {/* <Route path='/projects/:id' element={<Project />} /> */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
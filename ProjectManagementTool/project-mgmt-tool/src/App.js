import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from"./components/dashboard";
import ProjectDashboard from './components/projectDashboard';
import AddProjectTask from './components/projectTasks/AddProjectTask';
import Header from"./components/layout/Header";
import Addproject from "./components/projects/AddProject";
import updateProject from "./components/projects/updateProject";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {BrowserRouter as Router,Route} from 'react-router-dom';
import{Provider} from 'react-redux';
import store from './store';


class App extends React.Component {
  render()
  {
  return (
    <Provider store={store}>
   <Router>
   <div className="App">
   <Header/>
    </div>
   <Route path ="/dashboard" component={Dashboard}/>
   <Route path ="/addproject" component={Addproject}/>
   <Route path ="/updateproject/:id" component={updateProject}/>
   <Route path ="/projectDashboard/:projectId" component={ProjectDashboard}/>
   <Route path ="/addProjectTask/:projectId" component={AddProjectTask}/>
   <Route path ="/updateProjectTask/:projectId/:taskId" component={AddProjectTask}/>
  </Router>
  </Provider>
    );
}
}

export default App;


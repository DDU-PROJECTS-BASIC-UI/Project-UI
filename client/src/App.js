import logo from './logo.svg';
import { Route } from 'react-router';
// import RightComponent from './Components/Layout/RightComponent/RightComponent';
// import SideNavbar from './Components/Layout/SideNavbar/SideNavbar';
// import TopNavbar from './Components/Layout/TopNavbar/TopNavbar';
import './App.css';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <>
      
      <Route path="/forms">
        <Layout name="forms" />
      </Route>
      <Route path="/tables">
        <Layout name="tables" />
      </Route>
      <Route path="/user_pages">
        <Layout name="user_pages" />
      </Route>
      <Route path="/buttons">
        <Layout name="buttons" />
      </Route>
      <Route path="/home">
        <Layout name="home" />
      </Route>
    </>
  );
}

export default App;

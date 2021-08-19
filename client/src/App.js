import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./App.css";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import Login from "./pages/Login";
// import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Router>
      <Container content>
      
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/trainers" component={Trainers} />
          <Route exact path="/trainings" component={Trainings} />
          <Route exact path="/users" component={User} /> */}
     
      </Container>
    </Router>
  );
}

export default App;

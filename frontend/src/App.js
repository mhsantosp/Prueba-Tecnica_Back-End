import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Ingresar from "./components/form/SingIn";
import NuevoUsuario from "./components/form/SingUp";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Perfil from "./components/form/Perfil";
import Tareas from "./components/task/CollectionTasks"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Switch>
          <Route exact path="/" render={(props) => <Ingresar {...props} />} />
          <Route exact path="/nuevo-usuario" component={NuevoUsuario} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/tareas" component={Tareas} />
          </Switch>
        </main>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
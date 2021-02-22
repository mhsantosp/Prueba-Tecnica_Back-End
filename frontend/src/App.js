import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Ingresar from "./components/form/prueba";
import NuevoUsuario from "./components/form/SingUp";
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
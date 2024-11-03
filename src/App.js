import React from "react";
import Login from "./componentes/seguridad/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme"
import RegistrarUsuario from "./componentes/seguridad/RegistrarUsuario";
import MenuAppBar from "./componentes/Navegacion/MenuBarApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (

    <ThemeProvider theme={theme} >
      <Router>
        <MenuAppBar></MenuAppBar>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registrar" component={RegistrarUsuario} />
          
        </Switch>
      </Router>
     </ThemeProvider>

  );
}

export default App;

import React from "react";
import { StatusBar } from "expo-status-bar";
import CadastroUsuario from "./src/screens/CadastroUsuario";

export default function App () {
  return (
    <>
      <StatusBar style = "auto" />
      <CadastroUsuario />
    </>
  );
}
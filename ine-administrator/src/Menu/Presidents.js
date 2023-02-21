import NavBar from "../UI/NavBar";
import RepublicList from "./RepublicList";
import { useState } from "react";
import PresidentList from "./PresidentList";

class Presidente {
  constructor(length) {
    this.length = length;
    this.charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    this.charset2 =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  generador(stateCode, cantPresidentes) {
    const users = [];

    for (let i = cantPresidentes; i > 0; i--) {
      let password = "",
        usuario = "";

      for (let j = 0; j < this.length; j++) {
        password += this.charset.charAt(
          Math.floor(Math.random() * this.charset.length)
        );
      }

      for (let j = 0; j < 10; j++) {
        usuario += this.charset2.charAt(
          Math.floor(Math.random() * this.charset2.length)
        );
      }

      if (this.validacion(password)) {
        users.push({
          code: stateCode + i,
          user: usuario,
          password: password,
        });
      }
    }

    return users;
  }

  validacion(password) {
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/\d/.test(password) ||
      !/[\W_]/.test(password)
    ) {
      return false;
    }

    return true;
  }
}

const Presidents = () => {
  const [showPresidents, setShowPresidents] = useState(false);
  const [option, setOption] = useState(1);
  const [presidents, setPresidents] = useState();
  const PresidentGenerator = new Presidente(12);

  function handleChildStateChange(childState) {
    setOption(childState);
  }

  function submitedForm(event) {
    event.preventDefault();
    console.log(estados[option-1].code);
    setPresidents(PresidentGenerator.generador(estados[option-1].code, estados[option-1].quantity))
    setShowPresidents(true);
  }

  const estados = [
    { id: 1, code: "AGS", city: "Aguascalientes", quantity: 1864 },
    { id: 2, code: "BC", city: "Baja California", quantity: 5105 },
    { id: 3, code: "BCS", city: "Baja California Sur", quantity: 1247 },
    { id: 4, code: "CHI", city: "Chihuahua", quantity: 7367 },
    { id: 5, code: "CHS", city: "Chiapas", quantity: 13688 },
    { id: 6, code: "CMP", city: "Campeche", quantity: 1686 },
    { id: 7, code: "CMX", city: "Ciudad de Mexico", quantity: 13268 },
    { id: 8, code: "COA", city: "Coahuila", quantity: 4468 },
    { id: 9, code: "COL", city: "Colima", quantity: 1465 },
    { id: 10, code: "DGO", city: "Durango", quantity: 3752 },
    { id: 11, code: "GRO", city: "Guerrero", quantity: 8899 },
    { id: 12, code: "GTO", city: "Guanajuato", quantity: 11404 },
    { id: 13, code: "HGO", city: "Hidalgo", quantity: 4566 },
    { id: 14, code: "JAL", city: "Jalisco", quantity: 19481 },
    { id: 15, code: "MCH", city: "Michoacan", quantity: 10788 },
    { id: 16, code: "MEX", city: "Estado de Mexico", quantity: 37390 },
    { id: 17, code: "MOR", city: "Morelos", quantity: 3765 },
    { id: 18, code: "NAY", city: "Nayarit", quantity: 1896 },
    { id: 19, code: "NL", city: "Nuevo Leon", quantity: 10951 },
    { id: 20, code: "OAX", city: "Oaxaca", quantity: 12858 },
    { id: 21, code: "PUE", city: "Puebla", quantity: 16594 },
    { id: 22, code: "QR", city: "Quintana Roo", quantity: 2217 },
    { id: 23, code: "QRO", city: "Queretaro", quantity: 3710 },
    { id: 24, code: "SIN", city: "Sinaloa", quantity: 5287 },
    { id: 25, code: "SLP", city: "San Luis Potosi", quantity: 6186 },
    { id: 26, code: "SON", city: "Sonora", quantity: 5322 },
    { id: 27, code: "TAB", city: "Tabasco", quantity: 4103 },
    { id: 28, code: "TLX", city: "Tlaxcala", quantity: 1892 },
    { id: 29, code: "TMS", city: "Tamaulipas", quantity: 7727 },
    { id: 30, code: "VER", city: "Veracruz", quantity: 22261 },
    { id: 31, code: "YUC", city: "Yucatan", quantity: 3046 },
    { id: 32, code: "ZAC", city: "Zacatecas", quantity: 3739 },
  ];

  return (
    <div>
      <NavBar activeUsers="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Generar Presidentes
      </h1>
      <RepublicList
        data={estados}
        onClick={submitedForm}
        onChildStateChange={handleChildStateChange}
      />
      {showPresidents ? (
        <PresidentList data={presidents}></PresidentList>
      ) : null}
    </div>
  );
};

export default Presidents;

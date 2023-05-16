import NavBar from "../UI/NavBar";
import RepublicList from "./RepublicList";
import { useState } from "react";
import PresidentList from "./PresidentList";

async function createPresident(users) {
  await fetch("http://localhost:3001/presidents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  });
}

async function deletePresidents(code) {
  await fetch(`http://localhost:3001/presidents/${code}`, {
    method: "DELETE",
  }).then((response) => {
    return response.text();
  });
}

// Clase que genera información de presidentes
class Presidente {
  // Constructor que recibe la longitud de la contraseña
  constructor(length) {
    this.length = length;
    // Conjunto de caracteres para la contraseña
    this.charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    // Conjunto de caracteres para el usuario
    this.charset2 =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  // Método para generar información de presidentes
  async generador(stateCode, cantPresidentes) {
    // Array para guardar la información de los presidentes
    const users = [];

    // Bucle para generar información para todos los presidentes
    for (let i = 1; i <= cantPresidentes; i++) {
      let password = "",
        usuario = "";

      // Bucle para generar la contraseña
      for (let j = 0; j < this.length; j++) {
        password += this.charset.charAt(
          Math.floor(Math.random() * this.charset.length)
        );
      }

      // Bucle para generar el usuario
      for (let j = 0; j < 10; j++) {
        usuario += this.charset2.charAt(
          Math.floor(Math.random() * this.charset2.length)
        );
      }

      // Si la contraseña cumple con las validaciones, se agrega la información del presidente al array
      if (this.validacion(password)) {
        users.push({
          code: stateCode,
          id: i,
          user: usuario,
          password: password,
        });
      } else i--;
    }

    // Se retorna el array con la información de los presidentes
    try {
      await deletePresidents(stateCode);
      createPresident(users);
      return users;
    } catch (error) {
      console.error("Error deleting presidents:", error);
    }
  }

  // Método para validar la contraseña
  validacion(password) {
    // Condición para verificar si la contraseña cumple con los requisitos
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

// Componente de React que muestra la página principal de presidentes
const Presidents = () => {
  // Estado para controlar si se deben mostrar los presidentes
  const [showPresidents, setShowPresidents] = useState(false);
  // Estado para guardar la información de los presidentes
  const [presidents, setPresidents] = useState([]);
  // Instancia de la clase Presidente
  const PresidentGenerator = new Presidente(12);

  // Función que se ejecuta al enviar el formulario
  async function submitedForm(selectedOption, ballotBoxQuantity) {
    try {
      const generatedPresidents = await PresidentGenerator.generador(
        estados[selectedOption - 1].code,
        ballotBoxQuantity
      );
      setPresidents(generatedPresidents);
    } catch (error) {
      console.error("Error generating presidents:", error);
    }

    setShowPresidents(true);
  }

  // Array con la información de los estados
  const estados = [
    { id: 1, code: "AGS", city: "Aguascalientes" },
    { id: 2, code: "BC", city: "Baja California" },
    { id: 3, code: "BCS", city: "Baja California Sur" },
    { id: 4, code: "CHI", city: "Chihuahua" },
    { id: 5, code: "CHS", city: "Chiapas" },
    { id: 6, code: "CMP", city: "Campeche" },
    { id: 7, code: "CMX", city: "Ciudad de Mexico" },
    { id: 8, code: "COA", city: "Coahuila" },
    { id: 9, code: "COL", city: "Colima" },
    { id: 10, code: "DGO", city: "Durango" },
    { id: 11, code: "GRO", city: "Guerrero" },
    { id: 12, code: "GTO", city: "Guanajuato" },
    { id: 13, code: "HGO", city: "Hidalgo" },
    { id: 14, code: "JAL", city: "Jalisco" },
    { id: 15, code: "MCH", city: "Michoacan" },
    { id: 16, code: "MEX", city: "Estado de Mexico" },
    { id: 17, code: "MOR", city: "Morelos" },
    { id: 18, code: "NAY", city: "Nayarit" },
    { id: 19, code: "NL", city: "Nuevo Leon" },
    { id: 20, code: "OAX", city: "Oaxaca" },
    { id: 21, code: "PUE", city: "Puebla" },
    { id: 22, code: "QR", city: "Quintana Roo" },
    { id: 23, code: "QRO", city: "Queretaro" },
    { id: 24, code: "SIN", city: "Sinaloa" },
    { id: 25, code: "SLP", city: "San Luis Potosi" },
    { id: 26, code: "SON", city: "Sonora" },
    { id: 27, code: "TAB", city: "Tabasco" },
    { id: 28, code: "TLX", city: "Tlaxcala" },
    { id: 29, code: "TMS", city: "Tamaulipas" },
    { id: 30, code: "VER", city: "Veracruz" },
    { id: 31, code: "YUC", city: "Yucatan" },
    { id: 32, code: "ZAC", city: "Zacatecas" },
  ];

  return (
    <div style={{ marginBottom: "100px" }}>
      {/* Barra de navegación */}
      <NavBar activeUsers="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Generar Presidentes
      </h1>
      {/* Componente para seleccionar un estado */}
      <RepublicList
        data={estados}
        onClick={submitedForm}
      />
      {/* Tabla de presidentes */}
      {showPresidents ? (
        <PresidentList data={presidents}></PresidentList>
      ) : null}
    </div>
  );
};

// Exportar el componente
export default Presidents;

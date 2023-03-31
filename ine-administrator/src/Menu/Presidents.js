import NavBar from "../UI/NavBar";
import RepublicList from "./RepublicList";
import { useState } from "react";
import PresidentList from "./PresidentList";

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
  generador(stateCode, cantPresidentes) {
    // Array para guardar la información de los presidentes
    const users = [];

    // Bucle para generar información para todos los presidentes
    for (let i = cantPresidentes; i > 0; i--) {
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
          code: stateCode + i,
          user: usuario,
          password: password,
        });
      }
    }

    // Se retorna el array con la información de los presidentes
    return users;
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
  // Estado para controlar la opción seleccionada en la lista de estados
  const [option, setOption] = useState(1);
  // Estado para guardar la información de los presidentes
  const [presidents, setPresidents] = useState();
  // Instancia de la clase Presidente
  const PresidentGenerator = new Presidente(12);

  // Función para actualizar el estado "option" cuando cambia el estado en el componente hijo "RepublicList"
  function handleChildStateChange(childState) {
    setOption(childState);
  }

  // Función que se ejecuta al enviar el formulario
  function submitedForm(event) {
    // Prevenir la acción por defecto del formulario
    event.preventDefault();
    // Generar la información de los presidentes
    setPresidents(PresidentGenerator.generador(estados[option - 1].code, estados[option - 1].quantity));
    // AQUÍ VA LA COPIA A LA BD
    for (let index = 0; index < presidents.length; index++) {
        console.log(presidents[index].code);
    }

    //presidents es el arreglo





    // Mostrar la tabla de presidentes
    setShowPresidents(true);
  }

  // Array con la información de los estados
  const estados = [
    { id: 1, code: "AGS", city: "Aguascalientes", quantity: 186 },
    { id: 2, code: "BC", city: "Baja California", quantity: 510 },
    { id: 3, code: "BCS", city: "Baja California Sur", quantity: 124 },
    { id: 4, code: "CHI", city: "Chihuahua", quantity: 736 },
    { id: 5, code: "CHS", city: "Chiapas", quantity: 136 },
    { id: 6, code: "CMP", city: "Campeche", quantity: 168 },
    { id: 7, code: "CMX", city: "Ciudad de Mexico", quantity: 1326 },
    { id: 8, code: "COA", city: "Coahuila", quantity: 446 },
    { id: 9, code: "COL", city: "Colima", quantity: 146 },
    { id: 10, code: "DGO", city: "Durango", quantity: 375 },
    { id: 11, code: "GRO", city: "Guerrero", quantity: 889 },
    { id: 12, code: "GTO", city: "Guanajuato", quantity: 114 },
    { id: 13, code: "HGO", city: "Hidalgo", quantity: 456 },
    { id: 14, code: "JAL", city: "Jalisco", quantity: 194 },
    { id: 15, code: "MCH", city: "Michoacan", quantity: 107 },
    { id: 16, code: "MEX", city: "Estado de Mexico", quantity: 373 },
    { id: 17, code: "MOR", city: "Morelos", quantity: 375 },
    { id: 18, code: "NAY", city: "Nayarit", quantity: 196 },
    { id: 19, code: "NL", city: "Nuevo Leon", quantity: 951 },
    { id: 20, code: "OAX", city: "Oaxaca", quantity: 158 },
    { id: 21, code: "PUE", city: "Puebla", quantity: 194 },
    { id: 22, code: "QR", city: "Quintana Roo", quantity: 217 },
    { id: 23, code: "QRO", city: "Queretaro", quantity: 310 },
    { id: 24, code: "SIN", city: "Sinaloa", quantity: 527 },
    { id: 25, code: "SLP", city: "San Luis Potosi", quantity: 686 },
    { id: 26, code: "SON", city: "Sonora", quantity: 522 },
    { id: 27, code: "TAB", city: "Tabasco", quantity: 403 },
    { id: 28, code: "TLX", city: "Tlaxcala", quantity: 192 },
    { id: 29, code: "TMS", city: "Tamaulipas", quantity: 727 },
    { id: 30, code: "VER", city: "Veracruz", quantity: 261 },
    { id: 31, code: "YUC", city: "Yucatan", quantity: 346 },
    { id: 32, code: "ZAC", city: "Zacatecas", quantity: 339 },
  ];

  return (
    <div>
      {/* Barra de navegación */}
      <NavBar activeUsers="true" />
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        Generar Presidentes
      </h1>
      {/* Componente para seleccionar un estado */}
      <RepublicList
        data={estados}
        onClick={submitedForm}
        onChildStateChange={handleChildStateChange}
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

import NavBar from "../UI/NavBar";
import RepublicList from "./RepublicList";


const Presidents = () => {

    const estados = [
        { "id": "AGS", "city": "Aguascalientes", "quantity": 1864 },
        { "id": "BC", "city": "Baja California", "quantity": 5105 },
        { "id": "BCS", "city": "Baja California Sur", "quantity": 1247 },
        { "id": "CHI", "city": "Chihuahua", "quantity": 7367 },
        { "id": "CHS", "city": "Chiapas", "quantity": 13688 },
        { "id": "CMP", "city": "Campeche", "quantity": 1686 },
        { "id": "CMX", "city": "Ciudad de Mexico", "quantity": 13268 },
        { "id": "COA", "city": "Coahuila", "quantity": 4468 },
        { "id": "COL", "city": "Colima", "quantity": 1465 },
        { "id": "DGO", "city": "Durango", "quantity": 3752 },
        { "id": "GRO", "city": "Guerrero", "quantity": 8899 },
        { "id": "GTO", "city": "Guanajuato", "quantity": 11404 },
        { "id": "HGO", "city": "Hidalgo", "quantity": 4566 },
        { "id": "JAL", "city": "Jalisco", "quantity": 19481 },
        { "id": "MCH", "city": "Michoacan", "quantity": 10788 },
        { "id": "MEX", "city": "Estado de Mexico", "quantity": 37390 },
        { "id": "MOR", "city": "Morelos", "quantity": 3765 },
        { "id": "NAY", "city": "Nayarit", "quantity": 1896 },
        { "id": "NL", "city": "Nuevo Leon", "quantity": 10951 },
        { "id": "OAX", "city": "Oaxaca", "quantity": 12858 },
        { "id": "PUE", "city": "Puebla", "quantity": 16594 },
        { "id": "QR", "city": "Quintana Roo", "quantity": 2217 },
        { "id": "QRO", "city": "Queretaro", "quantity": 3710 },
        { "id": "SIN", "city": "Sinaloa", "quantity": 5287 },
        { "id": "SLP", "city": "San Luis Potosi", "quantity": 6186 },
        { "id": "SON", "city": "Sonora", "quantity": 5322 },
        { "id": "TAB", "city": "Tabasco", "quantity": 4103 },
        { "id": "TLX", "city": "Tlaxcala", "quantity": 1892 },
        { "id": "TMS", "city": "Tamaulipas", "quantity": 7727 },
        { "id": "VER", "city": "Veracruz", "quantity": 22261 },
        { "id": "YUC", "city": "Yucatan", "quantity": 3046 },
        { "id": "ZAC", "city": "Zacatecas", "quantity": 3739 }
    ];

    return (
        <div>
            <NavBar activeUsers='true' />
            <h1 style={{ textAlign: "center", margin: "50px" }}>Generar Presidentes</h1>
            <RepublicList data={estados}/>
        </div>
    );
}

export default Presidents;
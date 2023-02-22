import './Card.css';

const Card = (props) => {
    // Concatenamos la clase 'card2' con la clase que se recibe como propiedad 'props.className'
    const classes = 'card2 ' + props.className;

    // Devolvemos un elemento div con la clase resultante y su contenido es el children que se recibe como propiedad
    return <div className={classes}>{props.children}</div>
}

// Exportamos la componente Card
export default Card;
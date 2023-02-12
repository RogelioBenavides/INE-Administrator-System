const Option = (props) => {
    const optionStyles = { "width": "75%", "margin": "30px auto",
    "padding": "40px 0", "background": "#FFFFFF",
    "boxShadow": "0px 4px 25px 4px rgba(0, 0, 0, 0.27)",
    "borderRadius": "20px", "display": "flex", "alignItems": "center",
    "justifyContent": "center", "flexDirection": "column" };

    return (
        <div style={optionStyles}>{props.children}</div>
    );
}

export default Option;
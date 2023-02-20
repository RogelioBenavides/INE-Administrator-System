import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";

const ResetMessage = (props) => {
    const messageStyle = {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 5px 4px rgba(255, 255, 255, 0.25)",
        backgroundColor: "#E9E9E9",
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: props.show ? 9999 : 0,
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "50px",
    }
    return (
        <div style={messageStyle}>
            <h1>{props.children}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <SecondaryButton message="Cancelar" onClick={props.onClick}></SecondaryButton>
                <PrimaryButton message="Confirmar" onClick={props.onClick}></PrimaryButton>
            </div>
        </div>
    );
}

export default ResetMessage;
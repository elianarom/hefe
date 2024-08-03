import { useNavigate } from "react-router-dom";

const Error = () => {
    const navegacion = useNavigate();
    const btnHome = () => {
        navegacion('/');
    }
    return (
        <div>
            <h1>404 Página no encontrada</h1>
            <button onClick={btnHome} type="button">Home</button>
        </div>
    )
}

export default Error
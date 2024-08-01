import { Button } from "flowbite-react"
import { AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase";
import { inicioDeSesionExito } from "../redux/usuario/usuarioSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const AuthGoogle = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({prompt: 'select_account'})
        try {
            const resultadoGoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultadoGoogle.user.displayName,
                    email: resultadoGoogle.user.email,
                    googlePhotoUrl: resultadoGoogle.user.photoURL,
                }),
              });
              const data = await res.json()
              if( res.ok ) {
                dispatch(inicioDeSesionExito(data))
                navigate('/')
              }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Button type="button" onClick={handleGoogleClick} pill className="border border-transparent bg-blue-950 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-black dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800">
        <AiFillGoogleCircle className="w-5 h-5 mr-2" />
        Iniciar sesión con Google</Button>
  )
}

export default AuthGoogle
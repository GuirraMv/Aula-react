import { useEffect, useRef } from "react"
import { useAuth } from "../../../../Estudo/providers/authProvider";

const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();

    const { setIslogged, setUserLogged, isLogged, userLogged } = useAuth();

    useEffect(() => {
        emailRef.current.focus()
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append('email', event.target[0].value);
        formData.append('pass', event.target[1].value);
        fetch(
            "http://localhost/lp2/api/auth/login",
            {method: 'POST', body: formData}
        )
            .then(async (response) => {
                if(response.status === 200) {
                    let data = await response.json()
                    setIslogged(true)
                }
            })
    }

    return(
        <>
        <div>

        </div>
        </>
    )
}

export default Login
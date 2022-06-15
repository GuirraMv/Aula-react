import { useEffect, useRef } from "react"
import { useAuth } from "./authProvider";
import Logo from "./Logo";

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
                    setUserLogged(data.session)
                    localStorage.setItem('userLogged', JSON.stringify(data.session));
                } else {
                    let data = await response.json()
                    data?.message
                        ? alert(data.message)
                        : alert('Erro ao Logar!')
                }
            })
    }

    return(
        <>
        <div className="logo">
            <Logo />
            <h2>Área do administrador</h2>
        </div>

        <div className="formulario">
            <form onSubmit={(event) => handleSubmit(event)}>
            <label>Email:</label><input ref={emailRef} type="email" name="email" />
            <label>Senha:</label><input ref={passRef} type="password" name="pass" />
            <input type="submit" value="ENTRAR" />
            </form>
        </div>
        </>
    )
}

export default Login
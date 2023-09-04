import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function FormLogin(){
    const [loginIsTrue, setLoginIsTrue] = useState(false)
    const [usersTrue, setUsersTrue] = useState('[]')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    function changeEmail(event){
        setInputEmail(event.target.value)
    }
    function changePassword(event){
        setInputPassword(event.target.value)
    }
    const sendInfoLogin = async () =>{
        if(inputEmail.length === 0 || inputPassword.length === 0){
            alert('Por favor digite un email')
        }else{
            try {
                const sendLogin = await axios.post("http://localhost:3000/login", {
                    "email": inputEmail,
                    "password": inputPassword
                })
                .then((response) => setUsersTrue(response.data.name))
                setLoginIsTrue(true)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        
        <div>
            {loginIsTrue === true ? 
                    <h1>Seja bem-vindo {usersTrue}</h1> : 
                <form>
                    <h3>Faça seu login</h3>
                    <input type="text" name="email" id="email" onChange={changeEmail} placeholder="Email"/>
                    <input type="password" name="password" id="password" onChange={changePassword} placeholder="Senha"/>
                    <input id="button"type="button" value="Enviar" onClick={sendInfoLogin}/>
                </form>
            }
            <Link to="/signup">Sign Up</Link>
        </div>
        
    )
}
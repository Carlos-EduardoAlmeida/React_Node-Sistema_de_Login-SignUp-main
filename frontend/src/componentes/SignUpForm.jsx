import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function SignUpForm(){
    const [signIsTrue, setSignIsTrue] = useState(false)
    const [inputName, setInputName] = useState('')
    const [inputLastName, setInputLastName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    function addName(event){
        setInputName(event.target.value)
    }
    function addlastName(event){
        setInputLastName(event.target.value)
    }
    function addEmail(event){
        setInputEmail(event.target.value)
    }
    function addPassword(event){
        setInputPassword(event.target.value)
    }
    const sendInfoSign = async()=>{
        if(inputName.length === 0 || inputLastName.length === 0 || inputEmail.length === 0 || inputPassword.length === 0){
            alert('Por favor digite todas informações')
        }else{
            try {
                const sendUser = await axios.post("http://localhost:3000/signup", {
                    name: inputName,
                    lastName: inputLastName,
                    email: inputEmail,
                    password: inputPassword,
                })
                .then((response => console.log(response.data)));
                setSignIsTrue(true)
            } catch (error) {
                console.log(error)
            }
        }
    }
    
    return(
        <div>
            {
                signIsTrue === true ? 
                <h1>Usuário Cadastrado</h1>
                    :
                
                    <form>
                        <h3>Faça seu login</h3>
                        <input type="text" name="name" id="name" onChange={addName} placeholder="Primeiro nome" />
                        <input type="text" name="lastName" id="lastName" onChange={addlastName} placeholder="Último nome" />
                        <input type="text" name="email" id="email" onChange={addEmail} placeholder="Email"/>
                        <input type="password" name="password" id="password" onChange={addPassword} placeholder="Senha"/>
                        <input id="button" type="button" value="Enviar" onClick={sendInfoSign}/>
                    </form>
            }
            <Link to="/">Login</Link>
        </div>
    )
}
import "./Login.css"
import { useState } from "react"
import axios from "axios"

export default function Login(){

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function authenticateUser() {
        axios.post('http://localhost:8080/user/login', {
            userName: userName, 
            password: password
        }).then((response) =>{
            const userData = response.data[0]
            console.log(userData)
        })
    }

    return (
        <div className="LoginContainer">
            <article>
                Enter account info below to Login or click Create Account to get started
            </article>
            <div className="UserCredentials">
                <div className="username">
                    <label>Username:</label>
                    <input
                        onChange = {(e) => setUserName(e.target.value)}
                        name = "userName"
                        type = "text"
                        value = {userName}
                    />
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input
                        onChange = {(e) => setPassword(e.target.value)}
                        name = "password"
                        type = "text"
                        value = {password}
                    />
                </div>
            </div>
            <button onClick={authenticateUser}>Login</button>
            <button>Create Account</button>
        </div>
    )
}
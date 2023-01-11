import axios from "axios"
import { useState } from "react"
import "./UserRegistration.css"

export default function UserRegistration(){

    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/user/createAccount', {
            userName: userName,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthday: birthday
        }).then((response) =>{
            console.log(response)
        })
        console.log("submitted!")
    }

    return (
        <div className="registrationContainer">
            <div className="reasonsToRegister">
                <ul>
                    <li>Reason 1</li>
                    <li>Reason 2</li>
                    <li>Reason 3</li>
                </ul>
            </div>
            <form className="registrationForm" onSubmit={handleSubmit}>
                <div className="firstName">
                    <label>First Name:</label>
                    <input
                        onChange = {(e) => setFirstName(e.target.value)}
                        name = "firstName"
                        type = "text"
                        value = {firstName}
                    />
                </div>
                <div className="lastName">
                    <label>Last Name:</label>
                    <input
                        onChange = {(e) => setLastName(e.target.value)}
                        name = "lastName"
                        type = "text"
                        value = {lastName}
                    />
                </div>
                <div className="email">
                    <label>Email:</label>
                    <input
                        onChange = {(e) => setEmail(e.target.value)}
                        name = "email"
                        type = "text"
                        value = {email}
                    />
                </div>
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
                <div className="birthday">
                    <label>Birthday:</label>
                    <input
                        onChange = {(e) => setBirthday(e.target.value)}
                        name = "birthday"
                        type = "text"
                        value = {birthday}
                    />
                </div>
                <button>Create Account</button>
            </form>
        </div>
    )
}
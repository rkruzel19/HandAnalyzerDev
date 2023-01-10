import "./AccountInfo.css"
import { useState, useEffect } from 'react'
import AccountInfoService from "../../services/AccountInfoService"

export default function AccountInfo(){
    
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        AccountInfoService.getUserInfo().then(res => {
            // console.log("test 1")
            setId(res.data.id)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
            setUserName(res.data.userName)
            setPassword(res.data.password)
        })
    }, [])
    
    return (
        <div>
            id = {id}<br/>
            firstName = {firstName}<br/>
            lastName = {lastName}<br/>
            email = {email}<br/>
            userName = {userName}<br/>
            password = {password}<br/>
        </div>
    )
}
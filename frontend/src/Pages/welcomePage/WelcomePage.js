import Login from "../../components/login/Login"
import UserRegistration from "../../components/userRegistration/UserRegistration"
import "./WelcomePage.css"

export default function WelcomePage(){
    return (
        <div className="Container">
            <div className="WelcomeMessage">
                WholeCard Poker<br/>
                Take A Step Back To See The Bigger Picture
            </div>
            <div className="BodyArea">
                <div className="DisplayField">
                    <UserRegistration />
                </div>
                <div className="LoginArea">
                    <Login />
                </div>
            </div>
        </div>
    )
}
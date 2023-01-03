import "./WelcomePage.css"

export default function WelcomePage(){
    return (
        <div className="Container">
            <div className="WelcomeMessage">
                Welcome Message
            </div>
            <div className="BodyArea">
                <div className="DisplayField">
                    Images and New User Form
                </div>
                <div className="LoginArea">
                    Login here
                </div>
            </div>
        </div>
    )
}
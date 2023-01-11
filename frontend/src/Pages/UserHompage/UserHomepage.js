import AccountInfo from "../../components/accountInfo/AccountInfo"
import "./UserHomepage.css"
import HandData from "../../ScheduledTournament.txt"

export default function UserHomepage(){

    function handleClick(){
        fetch(HandData)
        .then(function(response) {
            return response.text()
        })
        .then(function(data){
            // setFileText(data)
            // setTournament(setupTournament(data))
            console.log(data)
        })
    }

    return (
        <div className="MainContainer">
            <header>
                <div className="Logo">
                    Logo goes here
                </div>
                <nav>
                    Will be replaced with NavBar Component
                </nav>
            </header>
            <div className="BodyArea">
                <div className="AccountInfo">
                    <AccountInfo />
                </div>
                <div className="MainArea">
                    <div className="TournamentList">
                        Tournament List Component
                    </div>
                    <div className="TournamentButtonPanel">
                        <button onClick={handleClick}>Add Tournament</button>
                        Buttons for CRUD actions associated with Tournaments
                    </div>
                </div>
            </div>
        </div>
    )
}
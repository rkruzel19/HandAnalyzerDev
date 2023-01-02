import "./UserHomepage.css"

export default function UserHomepage(){
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
                    <ul>
                        <li>User Info</li>
                        <li>Stats</li>
                        <li>Account Info</li>
                    </ul>
                </div>
                <div className="MainArea">
                    <div className="TournamentList">
                        Tournament List Component
                    </div>
                    <div className="TournamentButtonPanel">
                        Buttons for CRUD actions associated with Tournaments
                    </div>
                </div>
            </div>
        </div>
    )
}
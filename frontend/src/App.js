import './App.css';
import AccountInfo from './components/accountInfo/AccountInfo';
import UserHomepage from './pages/userHompage/UserHomepage';
import WelcomePage from './pages/welcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
      <UserHomepage />
      {/* <WelcomePage /> */}
    </div>
  );
}

export default App;

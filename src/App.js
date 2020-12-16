import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "loginPage">
      <header className = "AppHeader">
          <img src = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt = "facebook icon"/>
      </header>
      <section className = "RecentLogins">
          <h1>Recent Logins</h1>
          <p>click your picture or add an account</p>
          <div className = "loginAccounts">
          </div>
      </section>
      <section className = "loginDetails">
        <form>
          <input type = "email" placeholder = "Email" id = "userEmail" />
          <label for = "userEmail"></label>
          <input type = "password" placeholder = "Password" id = "userPassword" />
          <label for = "userPassword"></label>
          <input type = "submit" value = "Login" id = "userLogin" />
          <label for = "userLogin"></label>
        </form>
      </section>
    </div>
  );
}

export default App;

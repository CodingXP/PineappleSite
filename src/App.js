import "./styles.css";
import { useState } from "react";
import logo from "/src/pineapple.png";
import background from "/src/image_summer.png";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="newsletterText">
        <h1>Subscribe to newsletter</h1>
        <p>
          Subscribe to our newsletter and get 10% discount on pineapple glasses.
        </p>
      </div>
      <div>
        <Input />
      </div>
      <Service />
      <hr className="line"></hr>
      <IconBar />
      <img
        src={background}
        alt="Pineapple with sunglasses."
        className="background"
      ></img>
    </div>
  );
}

function NavBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="Logo of a pineapple." className="logo"></img>
      <p className="logoText">pineapple.</p>
      <Link value="About" />
      <Link value="How It Works" />
      <Link value="Contact" />
    </div>
  );
}

function Link({ value }) {
  return (
    <span href="#" className="link">
      {value}
    </span>
  );
}

function Input() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  var style = "";

  function emailValidation(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleValidation(event) {
    if (event.target.value.length === 0) {
      setError("E-mail address is required");
    }
    if (!emailValidation(event.target.value)) {
      setError("Please provide a valid e-mail address");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  }

  return (
    <div>
      <input
        className="input"
        name="email"
        value={email}
        onChange={handleValidation}
        placeholder="Type your email adress here..."
        style={{ style }}
      ></input>
      {error && <h2 className="inputError">{error}</h2>}
    </div>
  );
}

function Service({ handleValidation }) {
  return (
    <div className="checkbox">
      <input id="termsCheckbox" type="checkbox"></input>
      <label for="termsCheckbox" className="label">
        I agree to
      </label>
      <span href="#" className="serviceLink">
        terms of service
      </span>
    </div>
  );
}

function IconBar() {
  return (
    <div className="iconBar">
      <Icon value="facebook" />
      <Icon value="instagram" />
      <Icon value="twitter" />
      <Icon value="youtube" />
    </div>
  );
}

function Icon({ value }) {
  return <div className={`circle ${value}`}></div>;
}

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";

function App() {
  const [text, setText] = useState([]);
  // const fetchAdvice = async () => {
  //   const res = await fetch("https://api.adviceslip.com/advice");
  //   const data = await res.json();
  //   console.log(data)
  //   setText(data);
  // };

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res)
        setText(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advice Generator</title>
        <link rel="canonical" href="http://darkmodefirstpush.netlify.app" />
        <meta name="description" content="random advice generator" />
      </Helmet>
      {
        
      }
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit?
      </p>
      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>
      <div>
        <button>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

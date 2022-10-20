import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";

function App() {
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res);
        setText(res.data.slip);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(setLoading(true));
  }, []);

  if (loading) {
    return <p className="noData">Just a sec, your link is loading...</p>;
  }
  if (error) {
    return <p className="noData">Sorry, something went wrong😓</p>;
  }

  const handleClick = () => {
   axios
     .get("https://api.adviceslip.com/advice")
     .then((res) => {
       console.log(res);
       setText(res.data.slip);
       setLoading(false);
     })
     .catch((err) => {
       setError(err);
     })
     .finally(setLoading(true));
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advice Generator</title>
        <link rel="canonical" href="http://darkmodefirstpush.netlify.app" />
        <meta name="description" content="random advice generator" />
      </Helmet>
      <h1>Advice #{text.id}</h1>
      <p>{text.advice}</p>
      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>
      <div>
        <button onClick={handleClick}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Advice Generator</title>
        <link rel="canonical" href="http://darkmodefirstpush.netlify.app" />
        <meta name="description" content="random advice generator" />
      </Helmet>
      hi
    </div>
  );
}

export default App;

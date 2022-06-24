import Navigation from "./Components/Navigation";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import Register from "./Components/Register";

function App() {
  return (<>
      < Navigation/>
      <div className="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white wrapperbg" id="home">
        <blockquote>Bienvenue sur Toky Transport : la coopérative du futur</blockquote>
      </div>
      <h1 className="intro fs-4 w-50 mb-4" id="list">Une liste des villes de destination , des véhicules et nos tarifs </h1>
      < Section />
      <Register />
      <Footer />
  </>);
}

export default App;

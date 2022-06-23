import Navigation from "./Components/Navigation";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  return (<>
    < Navigation/>
    <blockquote>Bienvenue sur Toky Transport : la coopérative du futur</blockquote>
    <p className="recap">Voici les listes des villes de destination, nos véhicules et nos tarifs.</p>
    < Section />
    <Footer />
  </>);
}

export default App;

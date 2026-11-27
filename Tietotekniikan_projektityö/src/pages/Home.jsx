/* Sovelluksen etusivu.
   Sisältää harjoituskategorioiden valinnan. */

import { ChevronRight } from "lucide-react";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <h1>Hetki itsellesi</h1>
      <p>Ota hetki aikaa palautumiseen.</p>

      <h2>Valitse itsellesi sopiva harjoitus?</h2>

      <div className="categories">
        <button className="category-card">
          Hengitysharjoitukset
          <ChevronRight size={22} aria-hidden="true" />
        </button>

        <button className="category-card">
          Keholliset harjoitukset
          <ChevronRight size={22} aria-hidden="true" />
        </button>

        <button className="category-card">
          Mielen palautuminen
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
    </main>
  );
}

export default Home;
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import AppHeader from "./components/header";
import AppHero from "./components/hero";
import AppAbout from "./components/about";
import AppServices from "./components/service";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppPricing from "./components/pricing";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";
import AppFooter from "./components/footer";


function App() {
  return (
    <>
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>
        <main>
          <AppHero />
        </main>
        <section>
          < AppAbout />
        </section>
        <section>
          <AppServices/>
        </section>
        <section>
          <AppWorks/>
        </section>
        <section>
          <AppTeams/>
        </section>
        <section>
          <AppTestimonials/>
        </section>
        <section>
          <AppPricing/>
        </section>
        <section>
          <AppBlog/>
        </section>
        <section>
          <AppContact/>
        </section>
        <footer>
          <AppFooter/>
        </footer>
      </div>
    </>
  );
}

export default App;

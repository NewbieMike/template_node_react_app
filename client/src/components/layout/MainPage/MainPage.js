import React from "react";
import ContactForm from "../../../ContactForm";
import LandingPage from "../LandingPage/LandingPage";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <LandingPage
        title="Pozwolenia na pracę w Polsce"
        subtitle="Nie zwlekaj i zacznij pracować już dziś!"
        button="Kontakt"
      />
      <ContactForm />
    </div>
  );
};

export default MainPage;

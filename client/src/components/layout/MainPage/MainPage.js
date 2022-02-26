import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactForm from "../ContactForm/ContactForm";
import LandingPage from "../LandingPage/LandingPage";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <LandingPage
        title="Pozwolenia na pracę w Polsce"
        subtitle="Nie zwlekaj i zacznij pracować już dziś"
        button="Zadzwoń już dziś!"
      />
      <AboutUs
        title="O nas"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae massa erat. Nullam ac tellus erat. Cras eget cursus lacus. Pellentesque ut venenatis dolor. Donec vitae bibendum eros, sit amet lobortis sem. Nam gravida ligula ligula, id cursus neque facilisis nec. Fusce ornare hendrerit aliquam.
        Donec porta sodales metus sollicitudin placerat. Cras pellentesque ex sit amet sollicitudin consequat. Pellentesque accumsan efficitur ullamcorper. Nam blandit sem ligula, nec dapibus velit viverra nec. In ac finibus urna. Maecenas cursus ac nisi a suscipit. Nullam venenatis faucibus sem, at iaculis lacus efficitur eu. Etiam nec vestibulum mauris, sit amet dignissim turpis. Nam at lacus in eros ornare vestibulum at id erat. Donec ullamcorper volutpat augue, sed porta leo bibendum in."
        serviceTitle1=" Usługa I"
        serviceTitle2=" Usługa II"
        serviceTitle3=" Usługa III"
        serviceDescription1="Opis usługi I"
        serviceDescription2="Opis usługi II"
        serviceDescription3="Opis usługi III"
      />
      <ContactForm
        title="Kontakt"
        name="Imię"
        email="Email"
        subject="Temat wiadomości"
        message="Treść wiadomości..."
        submit="Wyślij"
        phoneTitle="Zadzwoń do Nas"
        phoneNumber="+48 111 222 333"
        emailTitle="Napisz do Nas"
        emailAddress="email@email.com"
      />
    </div>
  );
};

export default MainPage;

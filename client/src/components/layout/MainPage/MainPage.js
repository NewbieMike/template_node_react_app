import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactForm from "../ContactForm/ContactForm";
import LandingPage from "../LandingPage/LandingPage";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <LandingPage
        title="Przyjmij pracownika z zagranicy od zaraz!"
        subtitle="Nie zwlekaj, Ty przyjmiesz ludzi a my zajmiemy się wszystkimi formalnościami."
        button="Zadzwoń już dziś!"
      />
      <AboutUs
        title="O usłudze"
        text="Legalizacją pracy cudzoziemców zajmujemy się już od wielu lat. W ostatnich latach, wraz z wzmożoną aktywnością imigracyjną zdobyliśmy szerokie kompetencje i doświadczenie w tym zakresie. Jako firma, zajmujemy się nie tylko zalegalizowaniem pobytu pracownika ale w miarę potrzeby również następczą obsługą kadrowo-płacową i wsparciem na każdy etapie pobytu danej osoby w Polsce. Możemy wesprzeć Państwa przedsiębiorstwo szczególnie w dobie obecnego kryzysu i zapewnić pewne i rzetelne usługi w zakresie legalizacji pobytu pracowników ze wschodu."
        text2="Jesteśmy na rynku od 25 lat, aktywnie wspieramy naszych klientów w sprawach pracowniczych."
        text3="Zapraszamy do kontaktu."
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
        message="Treść wiadomości"
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

import React, { useState, useEffect, useRef } from "react";
import StickyBox from "react-sticky-box";
import { CSSTransition } from "react-transition-group";
import { isMobile } from "react-device-detect";

import "./App.css";

import ContactCard from "./components/ContactCard";
import ContactCardContainer from "./components/ContactCardContainer";
import ListItem from "./components/ListItem";
import StickyContainer from "./components/StickyContainer";

const relaxedSubheadingWeight = 200;
// const acceptedNoticedKey = "acceptedNotice";

function App() {
  // TODO(teddywilson): temporary disable
  // const [acceptedNotice, setAcceptedNotice] = useState(() => {
  //   return JSON.parse(window.sessionStorage.getItem(acceptedNoticedKey)) || false;
  // });
  const [acceptedNotice, setAcceptedNotice] = useState(false);
  const nodeRef = useRef(null);

  const onClick = () => {
    setAcceptedNotice(true);
  };

  useEffect(() => {
    // TODO(teddywilson): temporary disable
    // window.sessionStorage.setItem(acceptedNoticedKey, JSON.stringify(acceptedNotice));
  }, [acceptedNotice]);

  return (
    <div className="app">
      <CSSTransition
        nodeRef={nodeRef}
        in={!acceptedNotice}
        timeout={200}
        classNames="header"
        unmountOnExit
      >
        <StickyBox>
          <div ref={nodeRef} className="header">
            <h4>
              Innehåll och information om Folkbrev får inte på något sätt delas
              på Instagram, Facebook, etc.
            </h4>
            <div onClick={onClick} className="button">
              ACCEPTERA
            </div>
          </div>
        </StickyBox>
      </CSSTransition>
      <StickyContainer>
        <h1>FOLKBREV</h1>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
          }}
        >
          <i>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>för </span>
            <span className="gaza">GAZA</span>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>{` & `}</span>
            <span className="libanon">LIBANON</span>
          </i>
        </h2>
      </StickyContainer>
      <StickyContainer>
        <h2>
          Det krävs att vi blir många för att det här ska fungera. Förmodligen
          jättemånga. Så tack för att du är här
        </h2>
      </StickyContainer>
      <StickyContainer>
        <h2>
          Det här är en möjlighet att konkret engagera dig i kampen för att få
          stopp på Israels brutala krigföring i Mellanöstern och folkmord i
          Gaza.
        </h2>
        <h3>
          {"\n"}Med sociala medier kommer man inte särskilt långt, men med hjälp
          av ai och några minuter av din tid kan du vara med och göra skillnad
          på riktigt.
        </h3>
      </StickyContainer>
      <StickyContainer>
        <h2>Vad är ett Folkbrev?</h2>
        <h3>
          {"\n"}Det är ett supersnabbt och enkelt sätt att skapa och skicka
          riktade mail till utvalda beslutsfattare och opinionsbildare. Ett
          ai-verktyg tar fram och personanpassar innehållet, vilket gör det
          möjligt att få ut mail i stor skala, utan att dom fastnar i spamfilter
          eller uppfattas som massutskick.
        </h3>
      </StickyContainer>
      <StickyContainer>
        <h2>Hur funkar det?</h2>
        <h3>{"\n"}Läs igenom instruktionerna innan du går vidare.</h3>
        <ol>
          <ListItem>
            Välj vem du vill skicka Folkbrev till på nästa sida.
          </ListItem>
          <ListItem>
            Gå in på <a href="https://writemail.ai/">writemail.ai</a>.
          </ListItem>
          <ListItem>
            Skriv eller klistra in 1-3 prompts (alltså instruktioner till
            ai-verktyget) i stora rutan. Vi har skrivit ihop ett gäng{" "}
            <a href="https://docs.google.com/document/d/1oyDJos0B11S6k3KWRFx-0oTdsPrxm1CN9OehvbbHXwA/edit?usp=sharing">
              exempel
            </a>{" "}
            som du gärna får kopiera, men du kan såklart hitta på egna istället.
          </ListItem>
          <ListItem>
            Anpassa sedan ditt mail med hjälp av knapparna under stora rutan,
            efter tonläge, längd, språk etc., och tryck sen på “Generate My
            Email with Ai”
          </ListItem>
          <ListItem>
            När du är nöjd med din text: kopiera den, klistra in i ett nytt mail
            (din privata) och skicka iväg till den du önskar!
          </ListItem>
          <ListItem>
            Kom sen tillbaka hit för ett sista litet men viktigt steg.
          </ListItem>
        </ol>
      </StickyContainer>
      <StickyContainer>
        <h2>Vem vill du skicka ett Folkbrev till?</h2>
        <h3>
          {"\n"}Listorna kommer uppdateras kontinuerligt. Skicka till flera i
          listan om du orkar.{"\n\n"}
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "32px",
          }}
        >
          <ContactCardContainer header={"POLITIKER"}>
            <ContactCard
              name={"Maria Malmer Stenergard"}
              profession={"Utrikesminister (M)"}
              email={"maria.malmer.stenergard@riksdagen.se"}
            />
            <ContactCard
              name={"Karin Enström"}
              profession={"Partisekreterare (M)"}
              email={"karin.enstrom@riksdagen.se"}
            />
            <ContactCard
              name={"Pål Jonson"}
              profession={"Försvarsminister (M)"}
              email={"pal.jonson@riksdagen.se"}
            />
            <ContactCard
              name={"Muharrem Demirok"}
              profession={"Partiledare (C)"}
              email={"muharrem.demirok@riksdagen.se"}
            />
            <ContactCard
              name={"Karin Ernlund"}
              profession={"Partisekreterare (C)"}
              email={"karin.ernlund@riksdagen.se"}
            />
            <ContactCard
              name={"Liza-Maria Norlin"}
              profession={"Partisekreterare (KD)"}
              email={"liza-maria.norlin@riksdagen.se"}
            />
            <ContactCard
              name={"Jakob Olofsgård"}
              profession={"Partisekreterare (L)"}
              email={"jakob.olofsgard@riksdagen.se"}
            />
          </ContactCardContainer>
          <ContactCardContainer header={"MEDIA"}>
            <ContactCard
              name={"Ina Kokalari"}
              profession={"PR- och programkommunikationschef TV4"}
              email={"ina.kokalari@tv4.se"}
            />
            <ContactCard
              name={"Caspar Opitz"}
              profession={"Medieombudsmannen"}
              email={"caspar.opitz@medieombudsmannen.se"}
            />
            <ContactCard
              name={"Anne Lagercrantz"}
              profession={"VD SVT"}
              email={"anne.lagercrantz@svt.se"}
            />
            <ContactCard
              name={"Klas Granström"}
              profession={"Chefredaktör Expressen"}
              email={"klas.granstrom@expressen.se"}
            />
            <ContactCard
              name={"Peter Wolodarski"}
              profession={"Chefredaktör DN"}
              email={"peter.wolodarski@dn.se"}
            />
            <ContactCard
              name={"Lisa Irenius"}
              profession={"Chefredaktör SvD"}
              email={"lisa.irenius@svd.se"}
            />
            <ContactCard
              name={"Lotta Edling"}
              profession={"Publicistisk direktör Bonnier News"}
              email={"lotta.edling@bonniernews.se"}
            />
          </ContactCardContainer>
        </div>
      </StickyContainer>
      <StickyContainer>
        <h2>Tack för ditt engagemang!</h2>
        <h3>
          {"\n"}Vill du hjälpa oss bli fler? Dela den här sidan via sms och mail
          (inte sociala medier*) för att uppmana fler att göra sina röster
          hörda: kollegor, familj, vänner och bekanta – så många du kan och
          orkar!{"\n\n"}
        </h3>
        <h4>
          * Risken med att sprida Folkbrev i sociala medier är att du blir
          nedstängd av Meta, eller att fel personer (högerextrema och andra
          troll) hittar hit. Det vill vi inte, så var försiktig {"<"}3
        </h4>
      </StickyContainer>
    </div>
  );
}

export default App;

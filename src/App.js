import React, { Text } from 'react';
import StickyContainer from './components/StickyContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <StickyContainer>
        <h1>FOLKBREV</h1>
        <h2><i>För <span style={{ color: 'green' }}>GAZA</span> & <span style={{ color: 'red' }}>LIBANON</span></i></h2>
      </StickyContainer>

      <StickyContainer>
        <h2>Tack för att du är här - vi vill hjälpa dig att hjälpa!</h2>
        <h3>{`
För känner du också hopplöshet kring världsläget och dina möjligheter att påverka? Det pågår ett folkmord i livesändning, Sveriges regering är tyst, och flera svenska företag, institutioner och medier är direkt eller indirekt delaktiga i Israels ockupation av Gaza och krigföring i Mellanöstern.\n
Folkbrev är ett snabbt och konkret sätt att engagera dig och göra skillnad, genom att sätta press på makthavare och opinionsbildare. Det tar 2-4 minuter och är en chans att faktisk påverka.\n
Ju fler vi blir, desto starkare blir budskapet, vilket kan leda till verklig förändring!
        `}
        </h3>
      </StickyContainer>

      <StickyContainer>
        <h2>Vad är ett Folkbrev?</h2>
        <h3>{`
Ett Folkbrev är ett AI-genererat personaliserat mejl som skickas till utvalda beslutsfattare och opinionsbildare inom politik, media och näringsliv.\n 
I och med att innehållet personanpassas (du kommer snart förstå hur) kommer vi tillsammans kunna skicka ut mejl i stor skala, med liten risk för att det det fastnar i spamfilter eller kan sållas bort som “kedjemejl” av mottagaren.\n
Vi tror att ju fler mejl som skickas till dessa personer, desto större effekt kan vi få. Vi vill göra det omöjligt att ignorera oss.\n
Följ några snabba stegen nedan för att göra din röst hörd på ett effektivt sätt. Tillsammans kan vi påverka beslut som påverkar liv!        
        `}
        </h3>
      </StickyContainer>

      <StickyContainer>
        <h2>Men först: vem vill du skicka ett Folkbrev till?</h2>
        <h3>{`
Klicka på namnet på den du vill kontakta i listan nedan, så öppnas ett nytt utkast i ditt mejlverktyg. Fungerar inte det – kopiera mejladressen och klistra in i ett nytt mejl på egen hand.\n
Om du vill skicka till fler går det självklart bra – the more the merrier!
        `}
        </h3>
      </StickyContainer>

      <StickyContainer>
        <h3>Läs igenom dom här instruktionerna innan du går vidare</h3>
        <ol>
          <li>
            Gå in på <a href="https://writemail.ai/">https://writemail.ai/</a>.
          </li>
          <li>Skriv ditt namn och mottagarens namn.</li>
          <li>
            Skriv in 1-3 prompts (instruktioner till Ai-verktyget). Här är några
            exempel:
            <ol>
              <li>Folkmordet i Gaza måste upphöra.</li>
              <li>Hur försvarar ni att.</li>
              <li>Ditt uppdrag som journalist är att.. hur förklarar du.</li>
              <li>
                Ditt företag har möjlighet att sätta press på regeringen genom
                att…
              </li>
            </ol>
          </li>
          <li>
            Välj ton, humör, längd mm efter tycke genom att trycka på knapparna
            i verktyget.
          </li>
          <li>
            När du är nöjd, kopiera texten, klistra in i ditt nyskapade mail och
            skicka.
          </li>
          <li>Kom sen tillbaka hit för ett sista litet steg.</li>
        </ol>
      </StickyContainer>

      <StickyContainer>
        <h2>Markera vem/vilka nedan som du har skickat ett mail till.</h2>
      </StickyContainer>
    </div>
  );
}

export default App;

import React from 'react';
import StickyContainer from './components/StickyContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <StickyContainer>
        <h1>Kedjebrev för Gaza & Lebanon 🇵🇸🇱🇧</h1>
      </StickyContainer>

      <StickyContainer>
        <h2>Det här mailet är viktigt - konkret sätt att få sin röst hörd/påverka.</h2>
      </StickyContainer>

      <StickyContainer>
        <h2>Tryck på namnet som du vill kontakta för att kopiera mailadressen.</h2>
      </StickyContainer>

      <StickyContainer>
        <h3>Läs igenom dom här instruktionerna innan du går vidare:</h3>
        <ol>
          <li>Gå in på <a href="https://writemail.ai/">https://writemail.ai/</a>.</li>
          <li>Skriv ditt namn och mottagarens namn.</li>
          <li>
            Skriv in 1-3 prompts (instruktioner till Ai-verktyget). Här är några exempel:
            <ol>
              <li>Folkmordet i Gaza måste upphöra.</li>
              <li>Hur försvarar ni att.</li>
              <li>Ditt uppdrag som journalist är att.. hur förklarar du.</li>
              <li>Ditt företag har möjlighet att sätta press på regeringen genom att…</li>
            </ol>
          </li>
          <li>Välj ton, humör, längd mm efter tycke genom att trycka på knapparna i verktyget.</li>
          <li>När du är nöjd, kopiera texten, klistra in i ditt nyskapade mail och skicka.</li>
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

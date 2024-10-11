import React from 'react';
import StickyContainer from './components/StickyContainer';
import TextBlock from './components/TextBlock';
import './App.css';

function App() {
  const content = [
    { text: "Kedjebrev för Gaza & Lebanon 🇵🇸🇱🇧", className: "" },
    { text: "Det här mailet är viktigt - konkret sätt att få sin röst hörd/påverka. Ju fler vi är desto högljuddare blabla.. Vi har hittat ett Ai-verktyg som är gratis och gör det jätteenkelt, följ bara några enkla steg nedan.", className: "block-2" },
    { text: "Tryck på namnet som du vill kontakta för att kopiera mailadressen, klipp in den i ett nytt mail (i ditt vanliga mail-verktyg).", className: "block-3" },
    {
      text: `
        Läs igenom dom här instruktionerna innan du går vidare:<br /><br />
        <ol>
          <li>Gå in på <a href="https://writemail.ai/">https://writemail.ai/</a>.</li>
          <li>Skriv ditt namn och mottagarens namn.</li>
          <li>
            Skriv in 1-3 prompts (instruktioner till Ai-verktyget). Här är några exempel, hitta på själv eller kopiera:
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
        </ol>`,
      className: "block-4"
    },
    {
      text: "Markera vem/vilka nedan som du har skickat ett mail till. På så sätt kan nästa person se hur många mail resp person i maillistan har fått och prioritera utifrån det.",
      className: "block-5"
    }
  ];

  return (
    <div className="app">
      {content.map((block, index) => (
        <StickyContainer key={index}>
          <TextBlock text={block.text} className={block.className} />
        </StickyContainer>
      ))}
    </div>
  );
}

export default App;

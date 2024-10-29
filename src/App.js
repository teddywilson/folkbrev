import React, { useState, useEffect, useRef } from 'react';
import StickyBox from 'react-sticky-box';
import { CSSTransition } from 'react-transition-group';

import './App.css';

import StickyContainer from './components/StickyContainer';
import { content } from './content';

const relaxedSubheadingWeight = 200;
// const acceptedNoticedKey = "acceptedNotice";

function App() {
  // TODO(teddywilson): temporary disable
  // const [acceptedNotice, setAcceptedNotice] = useState(() => {
  //   return JSON.parse(window.sessionStorage.getItem(acceptedNoticedKey)) || false;
  // });
  const [acceptedNotice, setAcceptedNotice] = useState((false));
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
      <CSSTransition nodeRef={nodeRef} in={!acceptedNotice} timeout={200} classNames="header" unmountOnExit>
        <StickyBox>
          <div ref={nodeRef} className='header'>
            <h4>{content.header.text}</h4>
            <div onClick={onClick} className="button">{content.header.button}</div>
          </div>
        </StickyBox>
      </CSSTransition>
      <StickyContainer>
        <h1>{content.landing.title}</h1>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif'
        }}>
          <i>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>för </span>
            <span className='gaza'>GAZA</span>
            <span style={{ fontWeight: relaxedSubheadingWeight }}>{` & `}</span>
            <span className='libanon'>LIBANON</span>
          </i>
        </h2>
      </StickyContainer>
      <StickyContainer heading={content.block1.heading} text={content.block1.text} />
      <StickyContainer heading={content.block2.heading} text={content.block2.text} />
      <StickyContainer heading={content.block3.heading} text={content.block3.text} />
      {/* TODO(teddywilson): generalize content generation more after direction clear. */}
      <StickyContainer heading={content.block4.heading} text={content.block4.text}>
        <ol>
          <li>
            Gå in på <a href="https://writemail.ai/">https://writemail.ai/</a>.
          </li>
          <li>
            Fyll i ditt namn och mottagarens namn.
          </li>
          <li>
            Skriv in 1-3 prompts (alltså instruktioner till AI-verktyget) i stora rutan. På nästa sida har vi skrivit ihop ett gäng exempel som du gärna får kopiera, men du kan såklart också hitta på egna.
          </li>
          <li>
            Anpassa sedan ditt mejl efter tonläge, längd, språk etc, genom att trycka på knapparna i verktyget.
          </li>
          <li>
            När du är nöjd med din text: kopiera den och klistra in i ditt påbörjade mejl → tryck på Skicka!
          </li>
          <li>Kom sen tillbaka hit för ett sista litet men viktigt steg.</li>
        </ol>
      </StickyContainer>
      <StickyContainer heading={content.block5.text} />
    </div >
  );
}

export default App;

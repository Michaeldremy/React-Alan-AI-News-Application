import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const alanKey = '685e6de5dc635cc19ce9af14aa4a6a022e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      // creating alan commands
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="alan logo"/>
      </div>
      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;

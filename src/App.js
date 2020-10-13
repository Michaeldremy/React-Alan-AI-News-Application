import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '685e6de5dc635cc19ce9af14aa4a6a022e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

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
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;

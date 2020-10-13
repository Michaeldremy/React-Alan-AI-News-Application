import React from 'react'

import NewsCard from '../NewsCard/NewsCard';

export default function NewsCards({ articles }) {
  return (
    <div>
      {articles.map((article, i) => (
        <NewsCard />
      ))}
    </div>
  )
}

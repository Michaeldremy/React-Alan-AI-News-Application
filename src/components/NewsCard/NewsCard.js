import React, { useState, useEffect, createRef } from "react";
import classNames from 'classnames';
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

// articles is coming from NewsCards and is being destructured but we are only grabbing the elements we want to use
const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i, activeArticle,
}) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  // passing ref as a parameter then we are using window.scroll with 0 x-coord and then getting the refs current location and offsetting from the top miuns 50px
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    // Here we are setting refs to be an empty array with 20 indexes and then we will fill the array with refs at specific index or create a ref
    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, [])

  useEffect(() => {
    // if index of i is equal to the active article and our refs index is active article then we will scroll to the elRefs[activeArtice] index
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs])

  return (
    <Card ref={elRefs[i]} className={classNames( classes.card, activeArticle === i ? classes.activeCard : null )}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          className={classes.media}
          image={
            urlToImage ||
            "https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"
          }
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" href={url} target="_blank">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

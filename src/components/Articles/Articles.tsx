import React, { useState, FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Article } from './components/Article/Article';
import { News, New } from '../../types/new.type';
import { NewsProvider } from '../../types/new.type';

interface ArticleProps {
  newProvider: NewsProvider;
  newProviderCategory: string;
  news: News;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      margin: '40px auto',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

export const Articles: FC<ArticleProps> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);
  const { news, newProvider, newProviderCategory } = props;

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={classes.root}>
      {news.map(({ title, url, body, time, category }: New, index) => (
        <Article
          key={url}
          newProvider={newProvider}
          newProviderCategory={newProviderCategory}
          index={index + 1}
          title={title}
          url={url}
          time={time}
          category={category}
          paragraphs={body}
          expanded={expanded}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

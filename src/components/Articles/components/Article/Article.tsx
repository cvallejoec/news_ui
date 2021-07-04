import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { useSelectedNews } from '../../../../hooks/useSelectedNews';
import { categories, CategoriesTypes } from '../../../../types/new.type';
import { ActionType } from '../../../../common/NewsProvider';
import { Button } from '../../../Button/Button';
import { CheckboxC } from '../../../Checkbox/Checkbox';
import { ComboBox } from '../../../Autocomplete/Autocomplete';
import { CopyToClipboardC } from '../../../CopyToClipboard/CopyToClipboard';

interface ArticleProps {
  index: number;
  title: string;
  url: string;
  time: string;
  category: string;
  paragraphs: string[];
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordion: {
      padding: '10px 0',
    },
    accordionSummary: {
      display: 'flex',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '60%',
      fontFamily: 'Merriweather',
      fontWeight: 700,
      // flexShrink: 0,
    },
    time: {
      fontSize: theme.typography.pxToRem(13),
      color: 'var(--bg-accent)',
    },
    viewMore: {
      marginLeft: 'auto',
    },
    copySection: {
      display: 'flex',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    paragraph: {
      fontFamily: 'Merriweather',
      fontWeight: 400,
      margin: '15px 0',
    },
  })
);

export const Article: FC<ArticleProps> = ({
  index,
  title,
  url,
  paragraphs,
  expanded,
  time,
  category,
  handleChange,
}: ArticleProps) => {
  const classes = useStyles();
  const { selectedNews, dispatch } = useSelectedNews();

  const handleNewOfTheDay = () => {
    // If the selected NewOfTheDay is the same clicked, then I remove it
    if (selectedNews.newOfTheDay.url === url)
      return dispatch({ type: ActionType.removeNewOfTheDay });
    // But if don't it means that I have to change it.
    dispatch({
      type: ActionType.selectNewOfTheDay,
      payload: { title, url, body: paragraphs, time, category },
    });
  };

  const handleCategory = (value: CategoriesTypes) => {
    dispatch({
      type: ActionType.removeCategorizedNew,
      url,
    });
    if (value !== null) {
      dispatch({
        type: ActionType.addCategorizedNew,
        category: value,
        article: {
          body: paragraphs,
          category,
          time,
          title,
          url,
        },
      });
    }
  };

  return (
    <Accordion
      expanded={expanded === url}
      onChange={handleChange(url)}
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className={classes.accordionSummary}
      >
        <div>
          <Typography className={classes.heading}>
            {index}. {title}
          </Typography>
          <br />
          <small className={classes.time}>{time}</small>
        </div>
        <div className={classes.viewMore}>
          <Button url={url} icon={<OpenInNewIcon />}>
            Ver Más
          </Button>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <div className={classes.copySection}>
            <CopyToClipboardC value={title} label={'Copiar Título'} />
            <CopyToClipboardC value={url} label={'Copiar URL'} />
          </div>
          <div>
            <CheckboxC
              label={'Noticia del día'}
              checked={selectedNews.newOfTheDay.url === url}
              handleChange={handleNewOfTheDay}
            />
            <ComboBox
              label="Asignar Categoría"
              options={categories}
              handleChange={handleCategory}
              currentValue={
                selectedNews.categorizedNews.filter(
                  (item) => item.article.url === url
                ).length > 0
                  ? selectedNews.categorizedNews.filter(
                      (item) => item.article.url === url
                    )[0].category
                  : null
              }
            />
          </div>
          {paragraphs.map((paragraph) => (
            <>
              <Typography className={classes.paragraph}>{paragraph}</Typography>
            </>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

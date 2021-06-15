import React, { FC } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import { Button } from '../../../Button/Button';

interface ArticleProps {
  title: string;
  link: string;
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
    viewMore: {
      marginLeft: 'auto',
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
  title,
  link,
  paragraphs,
  expanded,
  handleChange,
}: ArticleProps) => {
  const classes = useStyles();

  return (
    <Accordion
      expanded={expanded === link}
      onChange={handleChange(link)}
      className={classes.accordion}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className={classes.accordionSummary}
      >
        <Typography className={classes.heading}>{title}</Typography>
        <div className={classes.viewMore}>
          <Button link={link} icon={<OpenInNewIcon />}>
            Ver Más
          </Button>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
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

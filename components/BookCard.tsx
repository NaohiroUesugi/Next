import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';
import React from 'react';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function BookCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Homeページへ
        </Typography>
      </CardContent>
      <CardActions>
        <NextLink href="/">
          <Button size="small">Home</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}

export default BookCard;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "../Card"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid(props) {
  const classes = useStyles();

  console.log(props.basketball)
  function FormRow() {

  
    return (
      <React.Fragment>
              <Grid item xs={12}>
          <Paper className={classes.paper}> <Card basketball={props.basketball} index="0" /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Card basketball={props.basketball} index="1" /></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Card basketball={props.basketball} index="2" /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item  sm={3} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item sm={3} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item sm={3} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item sm={3} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
import './App.css';

import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import FilterInputs from './component/filter-inputs-box'
import FilterResults from './component/filter-result-box'

const useStyles = makeStyles((theme) => ({
  containerTable: {
    background: 'grey'
  },
  resultTable: {
    position: 'relative',
    width: "90%",
    alignContent: "center",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row"
        justifyContent="center"
        alignItems="center" className={classes.containerTable}>
        <Paper className={classes.resultTable} square={true}>
          <Grid item xs={12} md={12}>
            <FilterInputs />
            {/* <Divider /> */}
            <FilterResults />
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
}

export default App;

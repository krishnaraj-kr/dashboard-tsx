import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import DateRange from './filter-inputs-daterange'
import SearchableDropdown from './filter-inputs-dropdown'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const FilterInputs = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={5}><SearchableDropdown /></Grid>
                <Grid item xs={7}><DateRange /></Grid>
            </Grid>
        </div>
    )
}

export default FilterInputs;
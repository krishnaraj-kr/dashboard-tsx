import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import TodayIcon from '@material-ui/icons/Today';
import EventIcon from '@material-ui/icons/Event';


export default function MaterialUIPickers() {
    const [isOpenFrom, setIsOpenFrom] = useState(false);
    const [isOpenTo, setIsOpenTo] = useState(false);

    // The first commit of Material-UI
    const [fromDate, setFromDate] = React.useState<Date | null>(
        new Date('2021-08-01T21:11:54'),
    );
    const [toDate, setToDate] = React.useState<Date | null>(
        new Date('2021-08-31T21:11:54'),
    );

    const handleFromChange = (date: Date | null) => {
        setFromDate(date);
    };

    const handleToChange = (date: Date | null) => {
        setToDate(date);
    };
    console.log(fromDate, toDate)

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justifyContent="flex-end" direction="row">
                <KeyboardDatePicker
                    disableToolbar
                    label=""
                    variant="inline"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    open={isOpenFrom}
                    keyboardIcon={<TodayIcon style={{ color: 'red' }} />}
                    value={fromDate}
                    style={{ paddingRight: "10px" }}
                    onChange={newDate => {
                        handleFromChange(newDate);
                        setIsOpenFrom(false); // Add this
                        setIsOpenTo(true);
                    }}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                        onFocus: e => {
                            setIsOpenFrom(true);
                        }
                    }}
                    PopoverProps={{
                        disableRestoreFocus: true,
                        onClose: () => {
                            setIsOpenFrom(false);
                        }
                    }}
                    InputProps={{
                        onFocus: () => {
                            setIsOpenFrom(true);
                        }
                    }}
                />
                <KeyboardDatePicker
                    disableToolbar
                    minDate={fromDate}
                    label=""
                    variant="inline"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    open={isOpenTo}
                    keyboardIcon={<EventIcon style={{ color: 'red' }} />}
                    value={toDate}
                    style={{ paddingRight: "10px" }}
                    onChange={newDate => {
                        handleToChange(newDate);
                        setIsOpenTo(false); // Add this
                    }}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                        onFocus: e => {
                            setIsOpenTo(true);
                        }
                    }}
                    PopoverProps={{
                        disableRestoreFocus: true,
                        onClose: () => {
                            setIsOpenTo(false);
                        }
                    }}
                    InputProps={{
                        onFocus: () => {
                            setIsOpenTo(true);
                        }
                    }}

                />
            </Grid>
        </MuiPickersUtilsProvider>
    );
}

//npm i @material-ui/pickers
//npm i @date-io/moment@1.x moment
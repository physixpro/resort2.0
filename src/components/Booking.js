import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./booking.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <div className="booking-container">
      <h1 className="headers" id="booking-header">
        We Would Like To Know A Little Bit About Your Vacation
      </h1>

      <form className={classes.container} id="booking-form"noValidate>
        <TextField
          id="date"
          label="Check In"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="date"
          label="Check Out"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <input
          id="booking-room"
          type="text"
          label="name"
          placeholder="1 Room: 1 Adult/Room"
        />
        <button id="booking-button">VIEW RATES</button>
      </form>
      
      <p className="travel-warning" id="booking-warning">
        Customers should review government guidance to confirm eligibility to
        travel & stay at hotel. See travelguidance.islaescondida.com.
      </p>

     
      <p className="travel-warning" id="booking-warning">
        The health and safety of our guests is our top priority: COVID-19
        updates and what to expect at our hotel.
      </p>
      
    </div>
  );
}

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import * as moment from "moment";

import styles from "./Cards.module.css";

const Cards = ({
  data: { confirmed, active, deaths, recovered, state, lastupdatedtime },
}) => {
  if (!confirmed) {
    return " Please select a state to view COVID-19 status";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.confirmed)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Confirmed
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed} duration={3} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.active)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={active} duration={3} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.recovered)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recoveries
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={recovered} duration={3} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={cx(styles.card, styles.deaths)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Death
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths} duration={3} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {moment(lastupdatedtime, "DD-MM-YYYY").format("MMM Do YYYY")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

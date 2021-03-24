import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
  },
  sidebar: {
    backgroundColor: theme.palette.primary.main,
    height: "100",
    padding: theme.spacing(2),
    maxWidth: "30vw",
  },
  table: {},
  head: {
    color: theme.palette.common.white,
  },
}));

const data = {
  "Crewe SME": [
    {
      name: "Michael Kiwanuka",
      sales: Math.floor(Math.random() * 10),
      VIC: 10000,
    },
    { name: "Bob Ross", sales: Math.floor(Math.random() * 10), VIC: 20000 },
    { name: "Liam Neeson", sales: Math.floor(Math.random() * 10), VIC: 30000 },
    { name: "Cher", sales: Math.floor(Math.random() * 10), VIC: 40000 },
    {
      name: "Lindsay Lohan",
      sales: Math.floor(Math.random() * 10),
      VIC: 50000,
    },
    { name: "Ant", sales: Math.floor(Math.random() * 10), VIC: 60000 },
  ],
  "Crewe Inbound": [
    { name: "Bobby Moore", sales: Math.floor(Math.random() * 10), VIC: 18000 },
    { name: "Geoff Hurst", sales: Math.floor(Math.random() * 10), VIC: 9000 },
    { name: "Gordon Banks", sales: Math.floor(Math.random() * 10), VIC: 70 },
    { name: "Alan Ball", sales: Math.floor(Math.random() * 10), VIC: 900 },
    {
      name: "Jack Charlton",
      sales: Math.floor(Math.random() * 10),
      VIC: 10000,
    },
    {
      name: "Jimmy Armfield",
      sales: Math.floor(Math.random() * 10),
      VIC: 10000,
    },
    {
      name: "Peter Bonetti",
      sales: Math.floor(Math.random() * 10),
      VIC: 23000,
    },
    { name: "Nobby Styles", sales: Math.floor(Math.random() * 10), VIC: 4500 },
    { name: "Jimmy Greaves", sales: Math.floor(Math.random() * 10), VIC: 3000 },
  ],
  "Crewe KEY": [
    { name: "Alvin", sales: Math.floor(Math.random() * 10), VIC: 20000 },
    { name: "Simon", sales: Math.floor(Math.random() * 10), VIC: 30000 },
    { name: "Theodore", sales: Math.floor(Math.random() * 10), VIC: 40000 },
  ],
  "York SME": [
    {
      name: "Vincent Van Gogh",
      sales: Math.floor(Math.random() * 10),
      VIC: 8000,
    },
    { name: "Claude Monet", sales: Math.floor(Math.random() * 10), VIC: 750 },
    { name: "Salvador Dali", sales: Math.floor(Math.random() * 10), VIC: 9900 },
    { name: "Banksy", sales: Math.floor(Math.random() * 10), VIC: 1234 },
    { name: "Damien Hirst", sales: Math.floor(Math.random() * 10), VIC: 660 },
    { name: "Tracy Emmin", sales: Math.floor(Math.random() * 10), VIC: 10000 },
  ],
};

export function DashboardOutline() {
  const [team, setTeam] = useState("Crewe Inbound");

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.sidebar}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Agent</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Sales</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data[team]
                .sort((a, b) => b.sales - a.sales)
                .map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.sales}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

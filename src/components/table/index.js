import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 650,
  },
  text: {
    fontWeight: (props) => (props.type === "title" ? 600 : 400),
  },
}));

export default function DefaultTable({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root} component={Paper} {...restProps}>
      <Table>{children}</Table>
    </TableContainer>
  );
}

DefaultTable.Row = function DefaultTableRow({ children, ...restProps }) {
  return (
    <TableRow className={useStyles().row} {...restProps}>
      {children}
    </TableRow>
  );
};

DefaultTable.Header = function DefaultTableHeader({ children, ...restProps }) {
  return (
    <TableHead className={useStyles().head} {...restProps}>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
};

DefaultTable.Body = function DefaultTableBody({ children, ...restProps }) {
  return (
    <TableBody className={useStyles().body} {...restProps}>
      {children}
    </TableBody>
  );
};

DefaultTable.Cell = function DefaultTableCell(props) {
  const { children, ...restProps } = props;
  return (
    <TableCell className={useStyles().cell} {...restProps}>
      <Typography className={useStyles(props).text} {...restProps}>
        {children}
      </Typography>
    </TableCell>
  );
};

import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(8),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export default function Form({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <form className={classes.root} {...restProps}>
      {children}
    </form>
  );
}

Form.Input = function FormInput({ children, ...restProps }) {
  return (
    <TextField className={useStyles().input} {...restProps}>
      {children}
    </TextField>
  );
};

Form.Button = function FormInput({ children, ...restProps }) {
  return (
    <Button className={useStyles().button} {...restProps}>
      {children}
    </Button>
  );
};

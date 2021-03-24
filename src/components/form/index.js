import {
  TextField,
  makeStyles,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
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

Form.Checkbox = function FormCheckbox({ children, ...restProps }) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          className={useStyles().checkbox}
          value="remember"
          color="primary"
        />
      }
    />
  );
};

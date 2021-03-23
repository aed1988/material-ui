import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingTop: theme.spacing(props.pt) || theme.spacing(4),
  }),
}));

export default function DeafaultContainer({ children, ...restProps }) {
  const classes = useStyles({ ...restProps });
  return (
    <Container className={classes.root} {...restProps}>
      {children}
    </Container>
  );
}

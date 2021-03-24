import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    paddingTop: theme.spacing(props.pt) || theme.spacing(3),
    paddingLeft: theme.spacing(props.pl) || theme.spacing(0),
    paddingBottom: theme.spacing(props.pb) || theme.spacing(2),
    paddingRight: theme.spacing(props.pr) || theme.spacing(0),
    display: "flex",
    flexDirection: props.direction || "column",
    alignItems: "center",
    backgroundColor: theme.palette.grey[50],
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

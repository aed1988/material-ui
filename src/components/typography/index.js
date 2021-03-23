import { Typography } from "@material-ui/core";

export default function DefaultTypography({ children, ...restProps }) {
  return <Typography {...restProps}>{children}</Typography>;
}

import React from "react";
import { Form, Container, Typography } from "../components/";

export function LogInForm() {
  return (
    <Container maxWidth="xs" pt={8}>
      <Form>
        <Typography variant="h4">Sign In</Typography>
        <Form.Input variant="outlined" placeholder="Email address" fullWidth />
        <Form.Input
          variant="outlined"
          placeholder="Password"
          type="password"
          fullWidth
        />
        <Form.Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
        >
          Submit
        </Form.Button>
        <Container direction="row" pt={-2}>
          <Form.Checkbox color="primary" />
          <Typography variant="p">Remember me?</Typography>
        </Container>
      </Form>
    </Container>
  );
}

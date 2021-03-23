import React from "react";
import { Form, Container, Typography } from "../components/";

export function LogInForm() {
  return (
    <Container maxWidth="sm" pt={8}>
      <Typography variant="h4">Sign In</Typography>
      <Form>
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
      </Form>
    </Container>
  );
}

import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Table, Container } from "../components";
import { data, tableInfo } from "../data/index";

export function DashboardOutline() {
  const [team, setTeam] = useState("Crewe SME");

  return (
    <Container direction="column">
      <Typography variant="h4">{team}</Typography>
      <Table>
        <Table.Header>
          {tableInfo.headers.map((elem) => (
            <Table.Cell key={elem.title} type="title">
              {elem.title}
            </Table.Cell>
          ))}
        </Table.Header>
        <Table.Body>
          {data[team]
            .sort((a, b) => b.sales - a.sales)
            .map((elem, index) => (
              <Table.Row>
                <Table.Cell>{elem.name}</Table.Cell>
                <Table.Cell>{elem.sales}</Table.Cell>
                <Table.Cell>{elem.VIC}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Container>
  );
}

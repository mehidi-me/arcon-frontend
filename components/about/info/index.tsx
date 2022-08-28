import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Title } from "components/common/Title";
import React from "react";
import styles from "./styles.module.css";

export default function Info() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#e5e5e5",
          my: 5,
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 8,
            }}
          >
            <Grid item md={3} xs={12} className={styles.itemContainer}>
              <Stack>
                <Title variant="h2" color="secondary">
                  4K
                </Title>
                <Title variant="h6">Project Completed</Title>
              </Stack>
            </Grid>
            <Grid item md={3} xs={12} className={styles.itemContainer}>
              <Stack>
                <Title variant="h2" color="secondary">
                  27
                </Title>
                <Title variant="h6">Awards Win</Title>
              </Stack>
            </Grid>
            <Grid item md={3} xs={12} className={styles.itemContainer}>
              <Stack>
                <Title variant="h2" color="secondary">
                  845
                </Title>
                <Title variant="h6">Team Members</Title>
              </Stack>
            </Grid>
            <Grid item md={3} xs={12} className={styles.itemContainer}>
              <Stack>
                <Title variant="h2" color="secondary">
                  6K+
                </Title>
                <Title variant="h6">Award Winner</Title>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

import React from "react";
import { Typography, Grid, Box, Container, Stack, Button } from "@mui/material";
import data from "./data";
import { SectionTitle, Title } from "components/common/Title";
import styles from "./styles.module.css";

export default function WorkStage() {
  return (
    <>
      <Container sx={{ my: 7 }}>
        <SectionTitle sx={{ textAlign: "center" }}>Work Stages</SectionTitle>
        <Title variant="h4">Best Solutions For Your Dream</Title>
        <Grid container>
          {data.map((service) => (
            <Grid
              key={service.id}
              item
              md={3}
              sm={6}
              xs={12}
              sx={{
                p: 3,
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <Box textAlign="center" className={styles.itemContainer}>
                <Box className={styles.iconContainer}>
                  <Typography>{service.icon}</Typography>
                </Box>

                <Title variant="h6">{service.title}</Title>
                <Typography variant="body2" color="#757575">
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

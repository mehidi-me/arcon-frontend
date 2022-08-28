import React from "react";
import teamData from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  Typography,
  Box,
  Grid,
  Stack,
  Button,
  CardMedia,
  CardHeader,
  CardContent,
  Card,
  CardActionArea,
} from "@mui/material";
import Image from "next/image";
import { SectionTitle, Title } from "components/common/Title";
import styles from "./styles.module.css";
import { Facebook, Instagram, LinkedIn, Pinterest } from "components/common/SocialIcon";


export default function Team() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container sx={{ overflow: "hidden" }}>
        <SectionTitle sx={{ textAlign: "center" }}>Our Teams</SectionTitle>
        <Title variant="h4">Meet Over Leadership Team</Title>
        <Slider {...settings}>
          {teamData.map((team) => (
            <Card
              key={team.name}
              sx={{
                p: 3,
                boxShadow: 0,
              }}
            >
              <CardActionArea>
                <CardMedia className={styles.cardArea}>
                  <Image
                    src={team.img}
                    alt=""
                    objectFit="fill"
                    layout="fill"
                  />
                  <Box className={styles.socialDrawer}>
                    <Facebook />
                    <Instagram />
                    <LinkedIn />
                    <Pinterest />
                  </Box>
                </CardMedia>
                <CardContent sx={{ background: "#f7f7f7" }}>
                  <Typography gutterBottom variant="h5" component="div" noWrap>
                    {team.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {team.position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </Container>
    </>
  );
}

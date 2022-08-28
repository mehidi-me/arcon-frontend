import { Box } from "@mui/system";
import Breadcrumb from "components/common/breadcrumb";
import Navbar from "components/common/navbar";
import { PageTitle } from "components/common/Title";
import React from "react";
import styles from "./styles.module.css";

export default function Header({ breadcrumbTitle, pageTitle }: { breadcrumbTitle: string, pageTitle: string }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Box
        component="header"
      >
        <PageTitle position='relative' top='150px' variant="h3">{pageTitle}</PageTitle>
        <Breadcrumb pageTitle={breadcrumbTitle} />
      </Box>
    </div>
  );
}

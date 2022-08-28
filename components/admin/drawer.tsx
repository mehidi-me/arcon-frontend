import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddIcon from "@mui/icons-material/Add";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { useRouter } from "next/router";

interface Props {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => (event: any) => void;
}

export function AdminDrawer({ drawerOpen, toggleDrawer }: Props) {
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = useState(true);
  const handleListCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={{ minWidth: 250 }}>
        <List component="nav">
          <ListItemButton onClick={handleListCollapse}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
            {collapseOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
            <Box sx={{ pl: 4 }}>
              <ListItemButton onClick={() => router.push("/admin")}>
                <ListItemIcon>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="All Projects" />
              </ListItemButton>
              <ListItemButton onClick={() => router.push("/admin/create")}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
            </Box>
          </Collapse>
          <ListItemButton onClick={() => router.push("/admin/media")}>
            <ListItemIcon>
              <PermMediaIcon />
            </ListItemIcon>
            <ListItemText primary="Media" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

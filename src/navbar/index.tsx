import {
  Accordion,
  AccordionDetails,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { NavAccordionSummary } from "./nav-accordion-summary";
import { Home } from "@mui/icons-material";

export function Navbar() {
  return (
    <Paper
      elevation={8}
      sx={{
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#00264d",
        padding: 2,
        paddingTop: 4,
        color: "white",
      }}
    >
      <Box margin={1}>
        <Link to="/">
          <Box alignItems="center" display="flex">
            <Home fontSize="small" />
            <Typography variant="body1" sx={{ paddingLeft: 1 }}>
              Home
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box margin={1}>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "unset",
            boxShadow: "unset",
            color: "white",
            padding: 0,
          }}
        >
          <NavAccordionSummary
            expandIcon={
              <ArrowForwardIosSharpIcon
                sx={{ color: "white", fontSize: "0.9rem" }}
              />
            }
          >
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              Projects
            </Typography>
          </NavAccordionSummary>
          <AccordionDetails sx={{ paddingBottom: 0, paddingLeft: 3 }}>
            <Link to="/scrollr">
              <Typography variant="body1">Scrollr</Typography>
            </Link>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box margin={1}>
        <Link to="/contact">
          <Box alignItems="center" display="flex">
            <MailIcon fontSize="small" />
            <Typography variant="body1" sx={{ paddingLeft: 1 }}>
              Contact
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box margin={1}>
        <Link to="/resume">
          <Box alignItems="center" display="flex">
            <WorkIcon fontSize="small" />
            <Typography variant="body1" sx={{ paddingLeft: 1 }}>
              Resume
            </Typography>
          </Box>
        </Link>
      </Box>
    </Paper>
  );
}

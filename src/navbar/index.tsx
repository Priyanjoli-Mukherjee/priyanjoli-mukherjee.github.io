import { useState } from "react";
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
import Home from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { useFeatureFlag } from "../hooks/use-feature-flag";
import { FeatureFlag } from "../types/feature-flag";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isKanbanEnabled = useFeatureFlag(FeatureFlag.KANBAN);

  return (
    <Paper
      elevation={8}
      sx={{
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: isMenuOpen ? 163 : 68,
        backgroundColor: "#00264d",
        padding: 2,
        paddingTop: 4,
        color: "white",
        transition: "width 400ms",
      }}
    >
      <Box
        onClick={() => setMenuOpen(!isMenuOpen)}
        margin={1}
        color="white"
        sx={{ cursor: "pointer" }}
      >
        {isMenuOpen ? (
          <Box display="flex" alignItems="center">
            <MenuOpenIcon />
            <Typography
              component="em"
              variant="body1"
              sx={{ paddingLeft: 0.5 }}
            >
              Collapse
            </Typography>
          </Box>
        ) : (
          <MenuIcon fontSize="small" />
        )}
      </Box>
      <Box margin={1}>
        <Link to="/">
          <Box alignItems="center" display="flex">
            <Home fontSize="small" />
            {isMenuOpen && (
              <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                Home
              </Typography>
            )}
          </Box>
        </Link>
      </Box>
      <Box display="flex" flexDirection="column" margin={1}>
        {isMenuOpen ? (
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
                <Box alignItems="center" display="flex">
                  <PeopleIcon fontSize="small" />
                  <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                    Scrollr
                  </Typography>
                </Box>
              </Link>
              <Link to="/event-master">
                <Box alignItems="center" display="flex" marginTop={1}>
                  <TheaterComedyIcon fontSize="small" />
                  <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                    Concerto
                  </Typography>
                </Box>
              </Link>
              {isKanbanEnabled && (
                <Link to="/kanban">
                  <Box alignItems="center" display="flex" marginTop={1}>
                    <FormatListNumberedIcon fontSize="small" />
                    <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                      Kanban
                    </Typography>
                  </Box>
                </Link>
              )}
            </AccordionDetails>
          </Accordion>
        ) : (
          <>
            <Link to="/scrollr">
              <PeopleIcon fontSize="small" />
            </Link>
            <Link to="/event-master">
              <TheaterComedyIcon fontSize="small" sx={{ marginTop: 1 }} />
            </Link>
            {isKanbanEnabled && (
              <Link to="/kanban">
                <FormatListNumberedIcon
                  fontSize="small"
                  sx={{ marginTop: 1 }}
                />
              </Link>
            )}
          </>
        )}
      </Box>
      <Box margin={1}>
        <Link to="/contact">
          <Box alignItems="center" display="flex">
            <MailIcon fontSize="small" />
            {isMenuOpen && (
              <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                Contact
              </Typography>
            )}
          </Box>
        </Link>
      </Box>
      <Box margin={1}>
        <Link to="/resume">
          <Box alignItems="center" display="flex">
            <WorkIcon fontSize="small" />
            {isMenuOpen && (
              <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                Resume
              </Typography>
            )}
          </Box>
        </Link>
      </Box>
    </Paper>
  );
}

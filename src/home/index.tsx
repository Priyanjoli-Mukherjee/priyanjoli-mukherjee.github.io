import { Box, Button, IconButton, Typography } from "@mui/material";
import priya_rainier from "../images/rainier.jpg";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";

export function Home() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height={100}
          justifyContent="flex-start"
          width="100%"
          sx={{
            background:
              "linear-gradient(rgba(0, 51, 153, 0), rgba(0, 51, 153, 1))",
          }}
        >
          <Typography variant="h4" sx={{ marginLeft: 5, marginTop: 2 }}>
            Software Engineer
          </Typography>
          <Typography variant="body2" sx={{ marginLeft: 5 }}>
            Bellevue, Washington
          </Typography>
        </Box>
        <img
          style={{
            width: 200,
            height: 200,
            display: "flex",
            justifyContent: "center",
            borderRadius: 100,
            marginTop: 40,
          }}
          src={priya_rainier}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ color: "#9999ff", margin: 3 }}>
            Hey, I&apos;m Priya Mukherjee
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: 2,
              marginLeft: 8,
              marginRight: 8,
              maxWidth: 800,
              textAlign: "justify",
            }}
          >
            I specialize in building beautiful websites with the latest
            technologies, and integrating them with the most cutting-edge Large
            Language Models on the market. In my spare time I enjoy hiking,
            kayaking, and exploring the remotest parts of Washington state.
            Click below to check out some of the projects I have been working on
            lately!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
          }}
        >
          <Link to="/scrollr">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#003399",
                display: "flex",
                flexDirection: "column",
                paddingLeft: 4,
                paddingRight: 4,
              }}
            >
              <Typography variant="body1">Scrollr</Typography>
            </Button>
          </Link>
          <Link to="/event-master">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#003399",
                display: "flex",
                flexDirection: "column",
                paddingLeft: 4,
                paddingRight: 4,
                marginLeft: 1,
              }}
            >
              <Typography variant="body1">Concerto</Typography>
            </Button>
          </Link>
            <Link to="/kanban">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#003399",
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 4,
                  paddingRight: 4,
                  marginLeft: 1,
                }}
              >
                <Typography variant="body1">Kanban</Typography>
              </Button>
            </Link>
        </Box>
        <Box sx={{ display: "flex", flex: "1 1", alignItems: "flex-end" }}>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/priya-m-a84b77182/"
              style={{ color: "white" }}
            >
              <LinkedInIcon />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://github.com/Priyanjoli-Mukherjee/priyanjoli-mukherjee.github.io"
              style={{ color: "white" }}
            >
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton>
            <Link to="/contact" style={{ color: "white" }}>
              <MailIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/resume" style={{ color: "white" }}>
              <WorkIcon />
            </Link>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

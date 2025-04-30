import { Box, Button, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import priya_rainier from "./images/priya_rainier.jpg";
import "./style/styles.scss";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          className="header"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
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
            Hey, I'm Priya Mukherjee
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
        <Box sx={{ display: "flex", margin: 5 }}>
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
        </Box>
      </Box>
    </Box>
  );
}

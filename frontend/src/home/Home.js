import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="/MMA.jpg" alt="MMA" width={"100%"} height="70%" />
    
      <Box width="100%" height="30%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"quicksand"}
          textAlign={"center"}
          variant="h4"
          padding={4}
        >
          READ INTRIGUING MMA STORIES HERE
        </Typography>
        <Box margin="auto">
          <Button
            LinkComponent={Link}
            to={`/stories`}
            variant="contained"
            sx={{ ml: 3 }}
          >
            View Stories
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

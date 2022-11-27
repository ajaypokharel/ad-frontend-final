import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getUserDetails } from "../api-helpers/helpers";
import StoryItem from "../stories/StoryItem";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  
  useEffect(() => {
    getUserDetails()
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <Box display="flex" flexDirection={"column"}>
      {user && (
        <>
          {" "}
          <Typography
            textAlign={"center"}
            variant="h3"
            fontFamily={"quicksand"}
            padding={2}
          >
            User Profile
          
          </Typography>
          <Box textAlign='center' m={6}>
          
          <Typography fontFamily={"quicksand"} padding={1} textAlign="center">
            Name: {user.name}
          </Typography>
          <Typography fontFamily={"quicksand"} padding={1} textAlign="center">
            Email: {user.email}
          </Typography>
          
          <Button
            onClick={handleClick}
            sx={{ mr: "auto", width: "15%",bgcolor:"#ff4d4d" }} 
            variant="contained"
            
    
          >
            Logout
          </Button>

          </Box>

          <Typography fontFamily={"quicksand"} textAlign="center" fontSize={60}>

          My MMA Stories

            </Typography>
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            {user.posts.map((post, index) => (
              <StoryItem
                key={index}
                title={post.title}
                date={post.date}
                description={post.description}
                id={post.id}
                image={post.image}
                location={post.location}
                user={user._id}
                name={user.name}
              />
            ))}
          </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default Profile;

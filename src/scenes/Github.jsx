import React from 'react';
import Header from "./global/Header";
import { tokens } from "../theme";
import { Box, useTheme, Typography, IconButton, Divider } from "@mui/material";
import TabOutlinedIcon from '@mui/icons-material/TabOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ForkRightOutlinedIcon from '@mui/icons-material/ForkRightOutlined';
import { useState, useEffect } from "react";

function Github() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [repos, setRepos] = useState([]);
  const repos_to_show = ["Gramophone","Dashboard", "Python-Image-Steganography", "Vibranto"];
  const username = "rudee-Sb";
  
  useEffect(() => {
    async function fetch_repos() {
      const promises = repos_to_show.map(repo =>
        fetch(`https://api.github.com/repos/${username}/${repo}`)
          .then(res => res.json())
      );

      const data = await Promise.all(promises);
      setRepos(data);
    }

    fetch_repos();
  }, []);
  
  useEffect(() => {
    console.log("repo data =", repos);
  },[repos])
    
  return (
    <>
      <Box m="20px">
        <Header title="GITHUB" subtitle="Graveyard of Ideas."></Header>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px" >
          {
            repos.map(repo => (
            <Box key={repo.id} gridColumn="span 3"  borderRadius="10px" padding="10px" display="flex" alignItems="center" justifyContent="center" sx={{ cursor: "pointer" }} bgcolor="rgb(67, 73, 87)" p="15px">
              <Box display="flex" width="100%" alignItems="center" flexDirection="row" gap="15px">
                <TabOutlinedIcon />
                <Typography variant="h4" fontWeight="bold" color="rgb(146 227 233)">{repo.name}</Typography>
               <Typography
                  variant="h5"
                  color: repo.private ? "#d73a49" : "#22863a", // red for private, green for public
                  background: "transparent",
                  padding: "6px 8px",
                  border: `1.4px solid ${repo.private ? "#d73a49" : "#22863a"}`,
                  borderRadius: "12px"
                >
                  {repo.private ? "private" : "public"}
                </Typography>
              </Box>
            </Box>
            ))
          }
        </Box>
      </Box>
    </>
  )
}

export default Github

import { IconButton, Stack } from "@mui/material";
import React from "react";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram, TbBrandDiscord } from "react-icons/tb";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = ({ spacing = 2 }) => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="left"
    spacing={spacing}
  >
    <IconButton
      href="https://twitter.com/AssetMantle"
      target="_blank"
      color="inherit"
    >
      <FiTwitter />
    </IconButton>
    <IconButton
      href="https://discord.gg/BSdBQ4495d"
      target="_blank"
      color="inherit"
    >
      <TbBrandDiscord />
    </IconButton>
    <IconButton
      href="https://github.com/AssetMantle"
      target="_blank"
      color="inherit"
    >
      <FiGithub />
    </IconButton>
    <IconButton
      href="https://t.me/assetmantlechat"
      target="_blank"
      color="inherit"
    >
      <TbBrandTelegram />
    </IconButton>
    <IconButton
      href="https://www.instagram.com/assetmantle/"
      target="_blank"
      color="inherit"
    >
      <InstagramIcon />
    </IconButton>
  </Stack>
);

export default SocialIcons;

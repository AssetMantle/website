import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";
import Divider from "../components/Divider";
import Li from "../components/Li";

const sectionStyle = {
  display: "flex",
  pt: 8,
  pb: 7,
  color: "primary.light",
};

const listStyle = {
  mt: 8,
  mx: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 13,
};

const joinStyle = {
  textAlign: "center",
  marginTop: "48px",
  textTransform: "uppercase",
};

export default function WorkingGroup() {
  const List = [
    "A community-led initiative to develop Interchain standards that will advance the state of the art for Non-fungible Tokens and the Metadata associated with uniquely identified tokenised resources.",
    "Our mission is to make NFTs interoperable across blockchain networks. To enable ownership, control and rights management of NFT metadata and linked resources, regardless of where these are located.",
  ];
  return (
    <Box component="section" sx={sectionStyle}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          color="inherit"
          sx={{
            paddingBottom: "22px",
            backgroundImage: "url(/static/line.svg)",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            width: "min(510px,100%)",
            "@media (max-width:900px)": {
              textAlign: "center",
              width: "100%",
            },
          }}
        >
          InterNFT Working Group
        </Typography>
        <Box sx={listStyle} maxWidth="840px">
          {List.map((data, index) => (
            <Li key={index}>{data}</Li>
          ))}
        </Box>
        <Divider mt="112px" />
        <Box sx={joinStyle}>
          <Typography component="p" variant="body2" color="inherit">
            Interested in Joining the InterNFT Working Group?{" "}
            <Link
              underline="none"
              href="https://t.me/joinchat/V0HEvpFn6TOVTauH"
              sx={{ cursor: "pointer" }}
            >
              Click here!
            </Link>
          </Typography>
          <Typography component="p" variant="body2" color="inherit">
            Want to Participate in developing next-generation Interchain
            standards and share your use-case requirements?
          </Typography>
          <Link
            underline="none"
            href="https://github.com/interNFT/nft-rfc/blob/main/nft-rfc-002.md"
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            Click to participate
          </Link>
        </Box>
        <Divider mt="48px" />
      </Container>
    </Box>
  );
}

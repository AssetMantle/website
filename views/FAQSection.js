import { React, useState } from "react";
import Section from "../components/Section";
import {
  List,
  ListItem,
  Link as MuiLink,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Grid,
} from "@mui/material";
import Link from "next/link";
import NextLink from "../components/NextLink";

const configData = {
  list: [
    {
      title: "What is an NFT?",
      info: "NFT stands for “Non-Fungible Token”. An NFT is an immutable token on the blockchain. It is cryptographically protected and can be treated as a digital certificate of ownership on the blockchain. NFTs on AssetMantle are part of the growing Cosmos ecosystem.",
    },
    {
      title: "What is MantlePlace?",
      info: "MantlePlace is the native NFT marketplace if AssetMantle.All creators on MantlePlace are verified for authenticity in an effort to minimize instances of frauds and rug pulls.",
    },
    {
      title: "What is MantleBuilder?",
      info: "MantleBuilder is the revolutionary no-code NFT marketplace builder from AssetMantle. It's simple drag-and-drop interface empowers creators and brands to build their robust and custom-branded NFT storefronts in the Cosmos ecosystem. Read more about MantleBuilder",
    },
    {
      title: "What is IBC Protocol?",
      info: "IBC stands for “Inter-Blockchain Communication”. It is an open-source protocol that allows sovereign blockchains in the Cosmos ecosystem to transfer assets and information among themselves. This empowers NFT creators and collectors to utilize   their NFTs across different chains and metaverses.",
    },
    {
      title: "What makes AssetMantle special?",
      info: "AssetMantle is built from the ground up to completely redefine digital asset ownership. Some noteworthy features include:",
      accordionList: [
        "Support for fractional NFTs",
        "Negligible gas fees",
        "Ledger hardware support",
        "InterNFT standard",
        "IPFS storage mechanism",
        "Cross-chain interoperability",
        "Support for multiple asset types",
        "Real-world asset tokenization",
      ],
    },
  ],
};

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Section title="FAQ">
        <Grid container>
          {configData.list.map((ele, index) => (
            <Accordion
              variant="translucent"
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant="body1">{ele.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{ele.info}</Typography>
                {"accordionList" in ele && (
                  <List>
                    {ele.accordionList.map((item) => (
                      <ListItem>
                        <Typography variant="body1">{item}</Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Section>
    </>
  );
}

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
import MUIAnchor from "../components/MUIanchor";

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Section title="FAQ">
        <Grid container>
          <Accordion
            variant="translucent"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">What is an NFT?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                NFT stands for “Non-Fungible Token”. An NFT is an immutable
                token on the blockchain. It is cryptographically protected and
                can be treated as a digital certificate of ownership on the
                blockchain. NFTs on AssetMantle are part of the growing Cosmos
                ecosystem.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            variant="translucent"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">What is MantlePlace?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                MantlePlace is the native NFT marketplace if AssetMantle.All
                creators on MantlePlace are verified for authenticity in an
                effort to minimize instances of frauds and rug pulls.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            variant="translucent"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">What is MantleBuilder?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ display: "inline" }}>
                MantleBuilder is the revolutionary no-code NFT marketplace
                builder from AssetMantle. It's simple drag-and-drop interface
                empowers creators and brands to build their robust and
                custom-branded NFT storefronts in the Cosmos ecosystem. Read
                more about MantleBuilder{" "}
              </Typography>
              <MUIAnchor
                href="https://docs.assetmantle.one/MantleBuilder_Overview"
                target="_blank"
              >
                here.
              </MUIAnchor>
            </AccordionDetails>
          </Accordion>
          <Accordion
            variant="translucent"
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">What is IBC Protocol?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                IBC stands for “Inter-Blockchain Communication”. It is an
                open-source protocol that allows sovereign blockchains in the
                Cosmos ecosystem to transfer assets and information among
                themselves. This empowers NFT creators and collectors to utilize
                their NFTs across different chains and metaverses.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            variant="translucent"
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="body1">
                What makes AssetMantle special?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                AssetMantle is built from the ground up to completely redefine
                digital asset ownership. Some noteworthy features include:{" "}
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="body1">Open-source modules</Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">IBC protocol enabled</Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    Support for fractional NFTs
                  </Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">Negligible gas fees</Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    Ledger hardware support
                  </Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">InterNFT standard</Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    IPFS storage mechanism
                  </Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    Cross-chain interoperability
                  </Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    Support for multiple asset types
                  </Typography>
                </ListItem>{" "}
                <ListItem>
                  <Typography variant="body1">
                    Real-world asset tokenization
                  </Typography>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Section>
    </>
  );
}

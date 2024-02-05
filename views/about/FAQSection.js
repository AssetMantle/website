import { React, useState } from "react";
import Section from "../../components/Section";
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
import NextLink from "../../components/NextLink";

export default function FAQSection({ FAQSectionData }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Section title="FAQ">
        <Grid container>
          {FAQSectionData.list.map((ele, index) => (
            <Accordion
              key={index}
              variant={FAQSectionData.accordionVariant}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{ width: "100%" }}
            >
              <AccordionSummary
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
              >
                <Typography variant={FAQSectionData.accordionTextVariant}>
                  {ele.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {"link" in ele ? (
                  <Typography variant={FAQSectionData.accordionTextVariant}>
                    {ele.info}{" "}
                    <NextLink href={ele.link.href}> {ele.link.text} </NextLink>.
                  </Typography>
                ) : (
                  <Typography variant={FAQSectionData.accordionTextVariant}>
                    {ele.info}
                  </Typography>
                )}

                {"accordionList" in ele && (
                  <List>
                    {ele.accordionList.map((item, index) => (
                      <ListItem key={index}>
                        <Typography
                          variant={FAQSectionData.accordionTextVariant}
                        >
                          {item}
                        </Typography>
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

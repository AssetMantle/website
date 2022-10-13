import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../components/Section";

export default function TokenUtility({ tokenUtilityData }) {
  return (
    <Section
      title={tokenUtilityData.title}
      subTitle={tokenUtilityData.description}
    >
      <Grid container spacing={{ xs: 1, md: 3 }}>
        {tokenUtilityData.options &&
          Array.isArray(tokenUtilityData.options) &&
          tokenUtilityData.options.length > 0 &&
          React.Children.toArray(
            tokenUtilityData.options.map((option) => (
              <Grid item xs={12} md={6} backgroundColor="transparent">
                <Paper
                  variant={tokenUtilityData.paperVariant}
                  sx={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      background: "transparent",
                      textAlign: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={option.title}
                      image={option.icon && option.icon}
                      sx={{
                        margin: "40px auto 10px",
                        border: "none",
                        width: "80px",
                        height: "auto",
                        objectPosition: "center",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant={tokenUtilityData.optionsTitleVariant}
                        color={tokenUtilityData.optionsColor}
                      >
                        {option.title}
                      </Typography>
                      <Typography
                        variant={tokenUtilityData.optionsDescriptionVariant}
                        sx={{ pt: 4 }}
                      >
                        {option.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))
          )}
      </Grid>
    </Section>
  );
}

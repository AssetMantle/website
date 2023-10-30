import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../../components/Section";

const Content = ({ configData, listStyle }) => {
  return (
    <Grid container spacing={0} sx={{ alignItems: "center" }}>
      <Grid item xs={12} md={5}>
        <Stack
          spacing={3}
          sx={listStyle}
          maxWidth={
            configData.left.contentMaxWidth
              ? configData.left.contentMaxWidth
              : "480px"
          }
        >
          {configData.left.icon && (
            <Stack
              sx={{
                alignItems: { xs: "center", md: "start" },
              }}
            >
              <img
                src={configData.left.icon.src}
                alt={configData.left.title && configData.left.title}
                style={{ width: "50%" }}
              />
            </Stack>
          )}
          {configData.left.title && (
            <Typography
              variant={configData.left.titleVariant}
              color={configData.left.titleColor}
              textAlign={{ xs: "center", md: "left" }}
            >
              {configData.left.title}
            </Typography>
          )}
          {configData.left.description &&
          Array.isArray(configData.left.description) ? (
            <Stack
              spacing={4}
              sx={
                configData.left.descriptionStyle || {
                  pb: 2,
                  maxWidth: "92%",
                  textAlign: { xs: "center", md: "left" },
                }
              }
            >
              {configData.left.description.map((item, index) => (
                <Typography
                  variant={configData.left.descriptionVariant}
                  color={configData.left.descriptionColor}
                  key={index}
                  textAlign={{ xs: "center", md: "left" }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography
              component="p"
              variant={configData.left.descriptionVariant}
              color={configData.left.descriptionColor}
              sx={
                configData.left.descriptionStyle
                  ? configData.left.descriptionStyle
                  : {
                      pb: 2,
                      maxWidth: "92%",
                      textAlign: "left",
                    }
              }
            >
              {configData.left.description}
            </Typography>
          )}
        </Stack>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          position: "relative",
          padding: { xs: " 56px 0 0", md: "32px" },
        }}
      >
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          {configData?.right?.array &&
            Array.isArray(configData.right.array) &&
            configData.right.array.length > 0 &&
            React.Children.toArray(
              configData.right.array.map((item) => (
                <Grid item xs={12} sm={6}>
                  <Stack spacing={2}>
                    {item.icon && (
                      <Stack
                        sx={{
                          alignItems: { xs: "center", md: "start" },
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.title && item.title}
                          style={{ width: "79px" }}
                        />
                      </Stack>
                    )}
                    {item.title && (
                      <Typography
                        variant={configData?.right?.titleVariant}
                        component={"h4"}
                        sx={{ width: { xs: "100%", md: "min(236px,100%)" } }}
                      >
                        {item.title}
                      </Typography>
                    )}
                    {item.description && (
                      <Typography
                        variant={configData?.right?.descriptionVariant}
                        component={"p"}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              ))
            )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default function ControlledIdentity({ configData }) {
  return (
    <Section
      title={configData.title && configData.title}
      subTitle={configData.description && configData.description}
    >
      <Content configData={configData} listStyle={configData?.listStyle} />
    </Section>
  );
}

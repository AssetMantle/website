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
    <>
      <Box sx={{ width: "min(848px,100%)", margin: "0 auto" }}>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          {configData?.identities &&
            Array.isArray(configData.identities) &&
            configData.identities.length > 0 &&
            React.Children.toArray(
              configData.identities.map((item) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={2} alignItems={"center"}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      alignSelf={"flex-start"}
                    >
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
                          variant={configData?.IdentityTitleVariant}
                          component={"h4"}
                        >
                          {item.title?.split(" ")?.[0]}
                          <br />
                          {item.title?.split(" ")?.[1]}
                        </Typography>
                      )}
                    </Stack>
                    {item.description && (
                      <Typography
                        variant={configData?.IdentitySubtitleVariant}
                        component={"p"}
                        sx={{
                          width: {
                            xs: "100%",
                            md: `min(${item?.width ? item.width : 238}px,100%)`,
                          },
                          textAlign: "center",
                        }}
                        mx={"auto"}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Stack>
                </Grid>
              ))
            )}
        </Grid>
      </Box>
    </>
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

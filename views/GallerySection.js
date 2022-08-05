import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const GalleryConfigData = {
  textAlign: "center",
  title: "",
  titleComponent: "",
  titleVariant: "",
  description: "",
  descriptionStyle: "", // array of styles
  galleries: [
    // object template
    // {
    //   image: "",
    //   height: "",
    //   title: "",
    //   description: "",
    //   buttons: [
    //     {
    //       text: "",
    //       url: "",
    //     },
    //   ],
    // },
  ],
};

const sectionStyle = {
  my: 10,
  paddingTop: "7px",
  color: "primary.light",
  textAlign: { xs: "center", sm: "center", md: "left" },
};

const optionContainerStyles = {
  display: "flex",
  justifyContent: { sm: "center", md: "space-between" },
  flexWrap: "wrap",
  gap: "30px",
  pt: 4,
};
const optionStyles = {
  borderRadius: "6px",
  backgroundColor: "transparent",
  maxWidth: 262,
  boxShadow: "none",
  textAlign: { xs: "center", md: "left" },
};

export default function GallerySection() {
  return (
    <Box component="section" sx={sectionStyle}>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: GalleryConfigData.textAlign
            ? GalleryConfigData.textAlign
            : "left",
        }}
      >
        {GalleryConfigData.title && (
          <Typography
            component={
              GalleryConfigData.titleComponent
                ? GalleryConfigData.titleComponent
                : "h2"
            }
            variant={
              GalleryConfigData.titleVariant
                ? GalleryConfigData.titleVariant
                : "h2"
            }
            color="inherit"
            sx={{
              pb: 2,
            }}
          >
            {GalleryConfigData.title}
          </Typography>
        )}
        {GalleryConfigData.description && (
          <Typography
            component="p"
            variant="subtitle1"
            color="inherit"
            sx={
              GalleryConfigData.descriptionStyle
                ? GalleryConfigData.descriptionStyle
                : {
                    pb: 2,
                  }
            }
          >
            {GalleryConfigData.description}
          </Typography>
        )}
        {GalleryConfigData.galleries && GalleryConfigData.galleries.length > 0 && (
          <Box sx={optionContainerStyles}>
            {GalleryConfigData.galleries.map((Gallery, index) => (
              <Card sx={optionStyles}>
                <CardMedia
                  key={index}
                  component="img"
                  alt={Gallery.title}
                  height={Gallery.height ? Gallery.height : 420}
                  image={Gallery.image}
                  sx={{ border: "none" }}
                />
                <CardContent>
                  {Gallery.title && (
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="primary.light"
                    >
                      {Gallery.title}
                    </Typography>
                  )}
                  {Gallery.description && (
                    <Typography variant="body2" color="primary.light">
                      {Gallery.description}
                    </Typography>
                  )}
                </CardContent>
                {Gallery.buttons.length !== 0 && (
                  <CardActions>
                    {Gallery.buttons.map((button, index) => (
                      <Button
                        component="a"
                        href={button.url && button.url}
                        key={index}
                        size="small"
                      >
                        {button.text && (
                          <>
                            {button.text} <KeyboardArrowRightIcon />
                          </>
                        )}
                      </Button>
                    ))}
                  </CardActions>
                )}
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicMenu({ title, titleEndIcon, urls }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={`basic-button-${title}`}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={titleEndIcon && titleEndIcon}
        sx={{ justifyContent: { xs: "start", md: "center" } }}
      >
        {title}
      </Button>
      {urls && Array.isArray(urls) && urls.length > 0 && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            boxShadow: "none",
            ".css-6hp17o-MuiList-root-MuiMenu-list": { padding: 0 },
          }}
        >
          <Paper variant="translucent">
            {urls.map((data, index) =>
              !data.titleExist ? (
                <Stack
                  key={data.menuName && data.menuName + index}
                  direction="row"
                  spacing={1}
                  sx={{
                    borderBottom: "1px solid",
                    borderColor: "grey.700",
                    py: 2,
                    px: 2,
                    "&:last-child": {
                      borderColor: "transparent",
                    },
                  }}
                >
                  {data.menuIcon && data.menuIcon}
                  <Stack>
                    <Typography variant="body2">
                      {data.menuName && data.menuName}
                    </Typography>
                    <Typography variant="caption" sx={{ pb: 2 }}>
                      {data.menuDescription && data.menuDescription}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" sx={{ gap: 1 }}>
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        data.url.map((url, index) => (
                          <MenuItem
                            key={url.menuName && url.menuName + index}
                            component="a"
                            href={url.url && url.url}
                            target={url.isExternalURL ? "_blank" : "_self"}
                            rel={url.isExternalURL ? "noopener noreferrer" : ""}
                            onClick={handleClose}
                            sx={{
                              p: 0,
                              ":hover": {
                                backgroundColor: "transparent",
                              },
                            }}
                          >
                            <Chip
                              label={url.menuName}
                              sx={{
                                cursor: "pointer",
                                "&:hover": {
                                  backgroundColor: "primary.main",
                                  color: "background.default",
                                  fontWeight: "400",
                                },
                              }}
                            />
                          </MenuItem>
                        ))}
                    </Stack>
                  </Stack>
                </Stack>
              ) : (
                <Accordion
                  variant="transparent"
                  defaultExpanded={!data.isNestMenuCollapsed}
                  key={data.menuName && data.menuName + index}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{}}>
                    <span
                      style={{
                        marginRight: "16px",
                      }}
                    >
                      {data.menuIcon && data.menuIcon}
                    </span>
                    <Typography variant="body2">
                      {data.menuName && data.menuName}
                      <br />
                      <Typography variant="caption" sx={{ pb: 2 }}>
                        {data.menuDescription && data.menuDescription}
                      </Typography>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack direction="column" flexWrap="wrap">
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        data.url.map((urls, index) => (
                          <Stack
                            key={urls.menuName && urls.menuName + index}
                            sx={{
                              borderBottom: "1px solid",
                              borderColor: "grey.700",
                              py: 2,
                              "&:last-child": {
                                border: "none",
                              },
                            }}
                          >
                            <Typography variant="body2" sx={{ px: 2, pb: 1 }}>
                              {urls.menuName && urls.menuName}
                            </Typography>
                            <Stack
                              direction="row"
                              flexWrap="wrap"
                              sx={{
                                p: 1,
                                gap: 1,
                              }}
                            >
                              {urls.url &&
                                Array.isArray(urls.url) &&
                                urls.url.length > 0 &&
                                urls.url.map((url, index) => (
                                  <MenuItem
                                    key={url.menuName && url.menuName + index}
                                    component="a"
                                    href={url.url && url.url}
                                    target={
                                      url.isExternalURL ? "_blank" : "_self"
                                    }
                                    rel={
                                      url.isExternalURL
                                        ? "noopener noreferrer"
                                        : ""
                                    }
                                    onClick={handleClose}
                                    sx={{
                                      p: 0,
                                      ":hover": {
                                        backgroundColor: "transparent",
                                      },
                                    }}
                                  >
                                    <Chip
                                      label={url.menuName}
                                      sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                          backgroundColor: "primary.main",
                                          color: "background.default",
                                          fontWeight: "400",
                                        },
                                      }}
                                    />
                                  </MenuItem>
                                ))}
                            </Stack>
                          </Stack>
                        ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </Paper>
        </Menu>
      )}
    </>
  );
}

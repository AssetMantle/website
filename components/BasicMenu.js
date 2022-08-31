import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function BasicMenu({
  title,
  titleEndIcon,
  urls,
  ratioWidthExist,
}) {
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
        >
          <Paper component="dark">
            <Grid container spacing={1}>
              {urls.map((data, index) => (
                <Grid
                  item
                  xs={12}
                  md={ratioWidthExist ? (data.titleExist ? 6 : 5 + index) : 6}
                  key={data.menuName && data.menuName + index}
                >
                  <Typography variant="body2" sx={{ px: 2, pb: 1 }}>
                    {data.menuName && data.menuName}
                    <Divider />
                  </Typography>
                  {!data.titleExist ? (
                    data.url &&
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
                      >
                        <Typography variant="caption">
                          {url.menuName}
                        </Typography>
                      </MenuItem>
                    ))
                  ) : (
                    <Grid container spacing={1}>
                      {data.url &&
                        Array.isArray(data.url) &&
                        data.url.length > 0 &&
                        data.url.map((urls, index) => (
                          <Grid
                            item
                            xs={12}
                            md={6}
                            key={urls.menuName && urls.menuName + index}
                          >
                            <Typography variant="body2" sx={{ px: 2, pb: 1 }}>
                              {urls.menuName && urls.menuName}
                              <Divider />
                            </Typography>
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
                                >
                                  <Typography variant="caption">
                                    {url.menuName}
                                  </Typography>
                                </MenuItem>
                              ))}
                          </Grid>
                        ))}
                    </Grid>
                  )}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Menu>
      )}
    </>
  );
}

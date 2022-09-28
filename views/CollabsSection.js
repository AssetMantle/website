import {
  Stack,
  TextField,
  Grid,
  Typography,
  Chip,
  Card,
  Select,
  CardContent,
  MenuItem,
  CardHeader,
  Tooltip,
} from "@mui/material";
import { React, useState } from "react";
import Section from "../components/Section";

export default function CollabsSection({ configData }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [projects, setProjects] = useState("All Projects");
  const [searchData, setSearchData] = useState("");
  let filters = [];

  const getFilters = (array) => {
    array.map((item) => {
      item.filters.map((element) => {
        if (filters.includes(element)) {
          return;
        }
        filters.push(element);
      });
    });
  };

  const handleDropdownChange = (event) => {
    setActiveFilters([]);
    setProjects(event.target.value);
  };

  const getSortedArray = () => {
    if (searchData.length) {
      sortedData = configData.list.filter((element) => {
        return (
          element.name.toLowerCase().includes(searchData.toLowerCase()) ||
          element.description.toLowerCase().includes(searchData.toLowerCase())
        );
      });
      return sortedData;
    }

    const compareArray =
      projects == "All Projects" ? activeFilters : [...activeFilters, projects];
    const sortedData = configData.list.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    getFilters(sortedData);
    return sortedData;
  };

  let sortedArray = getSortedArray();

  return (
    <>
      <Section>
        {/* Textbox and Number of Search results text */}
        <Stack spacing={4}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <TextField
              type="search"
              label="search"
              // onClose={(e) => {
              //   setSearchData("");

              // }}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
              variant={configData.textFieldVariant}
            />

            <Grid item>
              <Select
                MenuProps={{ PaperProps: { variant: "translucent" } }}
                value={projects}
                onChange={handleDropdownChange}
              >
                {configData.dropdownFilters.map((ele, index) => (
                  <MenuItem color="primary.main" value={ele.text} key={index}>
                    <Typography color="primary.main" variant="body1">
                      {ele.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Stack>

          {/* Filters  */}
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            gap={2}
          >
            {filters.map(
              (type, index) =>
                type !== "AssetMantle" &&
                type !== "MantleLabs" && (
                  <Grid key={index} item>
                    <Chip
                      sx={{ px: 2 }}
                      color="primary"
                      variant={
                        activeFilters.includes(type) ? "filled" : "outlined"
                      }
                      onClick={() => {
                        if (activeFilters.includes(type)) {
                          return setActiveFilters(
                            activeFilters.filter((filter) => {
                              return filter !== type;
                            })
                          );
                        }
                        setActiveFilters([...activeFilters, type]);
                      }}
                      label={type}
                    ></Chip>
                  </Grid>
                )
            )}
          </Grid>

          {/* Ecosystems */}
          <Grid container spacing={2}>
            {sortedArray.map((ele, index) => {
              return (
                <Grid
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                  item
                  xs={12}
                  md={4}
                >
                  <Card
                    variant={configData.cardVariant}
                    sx={{
                      maxWidth: "400px",
                      height: "100%",
                      display: "flex",
                      flexGrow: 1,
                      flexDirection: "column",
                    }}
                  >
                    <CardHeader
                      avatar={
                        ele.filters[ele.filters.length - 1] == "AssetMantle" ? (
                          <Tooltip title={"Part of AssetMantle"}>
                            <img
                              width="32x"
                              src={"/CollabsSection/AM_LogoMark.png"}
                              alt=""
                            />
                          </Tooltip>
                        ) : (
                          <Tooltip title={"Part of MantleLabs"}>
                            <img
                              width="32px"
                              src={"/CollabsSection/ML_Logo.png"}
                              alt=""
                            />
                          </Tooltip>
                        )
                      }
                      action={
                        <Chip
                          color="primary"
                          label={
                            activeFilters.length == 0
                              ? ele.filters[0]
                              : activeFilters[0]
                          }
                        />
                      }
                    ></CardHeader>
                    <CardContent>
                      {"heading" in ele ? (
                        <Typography variant="h4">{ele.heading}</Typography>
                      ) : (
                        <img width="auto" height="30px" src={ele.icon} alt="" />
                      )}

                      <Typography
                        variant={configData.nameVariant}
                        color="primary.main"
                      >
                        {ele.name}
                      </Typography>
                      <Typography variant={configData.descriptionVariant}>
                        {ele.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Section>
    </>
  );
}

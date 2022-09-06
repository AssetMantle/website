import {
  Stack,
  TextField,
  Grid,
  Typography,
  Chip,
  Box,
  Card,
  Select,
  CardContent,
  Paper,
  ButtonBase,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
} from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { React, useState, useEffect } from "react";
import Section from "../components/Section";

const optionStyles = {
  // background:
  //   "linear-gradient(157.26deg, rgba(217, 217, 217, 0.12) -5.39%, rgba(217, 217, 217, 0.08) 108.05%)",
  // backdropFilter: "blur(47.4479px)",
  // borderRadius: "16px",

  maxWidth: { xs: "400px" },
  // boxShadow: "none",
  // height: "100%",
  // mx: "auto",
  // padding: "0 11px",
  // textAlign: { xs: "center", md: "left" },
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
};

//Dummy Content
const data = [
  {
    name: "one",
    filters: ["MantleCreatives ", "Initiatives", "MantleLabs"],
  },
  {
    name: "two",
    filters: ["MantleCreatives", "AssetMantle Ecosystem"],
  },
  { name: "three", filters: ["Products", "MantleCreatives", "MantleLabs"] },
  {
    name: "four",
    filters: [
      "Community Initiatives",
      "MantleCreatives",
      "AssetMantle Ecosystem",
    ],
  },
  {
    name: "five",
    filters: ["Community Initiatives", "MantleLabs"],
  },
  {
    name: "six",
    filters: ["Ecosystem", "AssetMantle Ecosystem"],
  },
  { name: "seven", filters: ["Partnerships", "AssetMantle Ecosystem"] },
  { name: "eight", filters: ["Integrations", "Partnerships", "MantleLabs"] },
  { name: "nine", filters: ["Grants", "Ecosystem", "AssetMantle Ecosystem"] },
];

const chips = [
  { key: "Products" },
  { key: "Grants" },
  { key: "Integrations" },
  { key: "Partnerships" },
  { key: "Ecosystem" },
];

export default function EcosystemsPageLowerSection() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [projects, setProjects] = useState("All Projects");
  const [searchData, setSearchData] = useState("");
  const [availableFilters, setAvailableFilters] = useState([]);

  const getFilters = (array) => {
    array.map((item) => {
      console.log(item);
      setAvailableFilters([]);
      // if (!availableFilters.includes(item.filters)) {
      //   setAvailableFilters([...availableFilters, item.filters]);
      // }
    });
  };

  const handleDropdownChange = (event) => {
    setProjects(event.target.value);
  };

  const getSortedArray = () => {
    const compareArray =
      projects == "All Projects" ? activeFilters : [...activeFilters, projects];
    const sortedData = data.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    // getFilters(sortedData);
    return sortedData;
  };

  const submitSearchData = () => {
    if (activeFilters.includes(searchData)) {
      return;
    }
    setActiveFilters((previous) => [...previous, searchData]);
  };

  let sortedArray = getSortedArray();

  return (
    <>
      <Section>
        {/* Textbox and Number of Search results text */}
        <Stack spacing={4}>
          <Grid wrap="nowrap" container justifyContent="space-between">
            <Grid item>
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForwardOutlinedIcon
                        sx={{ cursor: "pointer" }}
                        onClick={submitSearchData}
                      />
                    </InputAdornment>
                  ),
                }}
                label="search"
                onChange={(e) => {
                  setSearchData(e.target.value);
                  if (e.target.value.length == 0) {
                    setActiveFilters([]);
                    return;
                  }
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Select value={projects} onChange={handleDropdownChange}>
                <MenuItem value="All Projects">All Projects</MenuItem>
                <MenuItem value="AssetMantle Ecosystem">
                  AssetMantle Ecosystem
                </MenuItem>
                <MenuItem value="MantleLabs">MantleLabs</MenuItem>
              </Select>
            </Grid>
          </Grid>

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
            {chips.map((ecosystem, index) => {
              return (
                <Grid key={index} item>
                  <Chip
                    sx={{ px: 2 }}
                    color={
                      activeFilters.includes(ecosystem.key) ? "info" : "primary"
                    }
                    onClick={() => {
                      if (activeFilters.includes(ecosystem.key)) {
                        return setActiveFilters(
                          activeFilters.filter((filter) => {
                            return filter !== ecosystem.key;
                          })
                        );
                      }
                      setActiveFilters([...activeFilters, ecosystem.key]);
                    }}
                    label={ecosystem.key}
                  ></Chip>
                </Grid>
              );
            })}
          </Grid>

          {/* <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
            gap={2}
          > */}
          {/* {projects == "All Projects"
              ? data.map((ecosystem, index) => {
                  return (
                    <Grid key={index} item>
                      <Chip
                        sx={{ px: 2 }}
                        color={
                          activeFilters.includes(ecosystem.key)
                            ? "info"
                            : "primary"
                        }
                        onClick={() => {
                          if (activeFilters.includes(ecosystem.key)) {
                            return setActiveFilters(
                              activeFilters.filter((filter) => {
                                return filter !== ecosystem.key;
                              })
                            );
                          }
                          setActiveFilters([...activeFilters, ecosystem.key]);
                        }}
                        label={ecosystem.filters}
                      ></Chip>
                    </Grid>
                  );
                })
              : data
                  .filter((ele) => ele.pType == projects)
                  .map((ecosystem, index) => {
                    return (
                      <Grid key={index} item>
                        <Chip
                          sx={{ px: 2 }}
                          color={
                            activeFilters.includes(ecosystem.key)
                              ? "info"
                              : "primary"
                          }
                          onClick={() => {
                            if (activeFilters.includes(ecosystem.key)) {
                              return setActiveFilters(
                                activeFilters.filter((filter) => {
                                  return filter !== ecosystem.key;
                                })
                              );
                            }
                            setActiveFilters([...activeFilters, ecosystem.key]);
                          }}
                          label={ecosystem.filters}
                        ></Chip>
                      </Grid>
                    );
                  })}
          </Grid> */}

          {/* Ecosystems */}
          <Grid container spacing={2}>
            {sortedArray.map((ele, index) => {
              return (
                <Grid
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                  item
                  xs={12}
                  md={4}
                >
                  <ButtonBase href="/">
                    <Card sx={optionStyles}>
                      <Paper>
                        <CardContent>
                          <Stack spacing={2}>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                            >
                              <img
                                width="30%"
                                src="/images/hero/mantlePlace.png"
                                alt=""
                              />
                              <Chip color="primary" label={ele.filters["0"]} />
                            </Stack>
                            <Typography variant="h4" color="primary.main">
                              MantlePlace
                            </Typography>
                            <Typography variant="body2">
                              A new, highly optimized NFT marketplace for Cosmos
                              Ecosystem
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "end",
                              }}
                            >
                              <Typography color="primary" variant="caption">
                                Live Now
                              </Typography>
                            </Box>
                          </Stack>
                        </CardContent>
                      </Paper>
                    </Card>
                  </ButtonBase>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Section>
    </>
  );
}

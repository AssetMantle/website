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
  CardHeader,
  Avatar,
  CardActions,
} from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { React, useState } from "react";
import Section from "../components/Section";
import { MergeType } from "@mui/icons-material";

export default function CollabsSection({ configData }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [projects, setProjects] = useState("All Projects");
  const [searchData, setSearchData] = useState("");
  const [nameFilters, setNameFilters] = useState("");
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
    setProjects(event.target.value);
  };

  const getSortedArray = () => {
    const compareArray =
      projects == "All Projects" ? activeFilters : [...activeFilters, projects];
    const sortedData = configData.list.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    if (nameFilters.length) {
      sortedData = configData.list.filter((element) => {
        return element.name.toLowerCase() == nameFilters.toLowerCase();
      });
    }
    getFilters(sortedData);
    return sortedData;
  };

  const submitSearchData = () => {
    setNameFilters(searchData);
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
                  setNameFilters("");
                  return;
                }
              }}
              variant={configData.textFieldVariant}
            />

            <Grid item>
              <Select value={projects} onChange={handleDropdownChange}>
                {configData.dropdownFilters.map((ele) => (
                  <MenuItem value={ele.text}>{ele.text}</MenuItem>
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
                      color={
                        activeFilters.includes(type) ? "warning" : "primary"
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
                        <img
                          width="60px"
                          src={
                            ele.filters[ele.filters.length - 1] == "AssetMantle"
                              ? "/CollabsSection/AM_Logo.png"
                              : "/CollabsSection/ML-Logo.png"
                          }
                          alt=""
                        />
                      }
                      action={<Chip color="primary" label={ele.filters["0"]} />}
                    ></CardHeader>
                    <CardContent>
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

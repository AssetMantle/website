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
import { React, useState } from "react";
import Section from "../components/Section";
import { MergeType } from "@mui/icons-material";

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

const configData = [
  {
    name: "Osmosis",
    filters: ["MantleChain Partners", "Token Integration Partners"],
    description:
      "The leading decentralized Cosmos exchange to swap, earn, and build",
  },
  {
    name: "Axelar",
    filters: ["MantleChain Partners"],
    description: "Axelar delivers secure cross-chain communication for Web3. ",
  },
  {
    name: "Crescent",
    filters: ["MantleChain Partners"],
    description:
      "Innovating DeFi investment through advancements in inter-blockchain technology",
  },
  {
    name: "Juno",
    filters: ["MantleChain Partners"],
    description:
      " A digital banking platform that offers a high-yield checking account",
  },
  {
    name: "Evmos",
    filters: ["MantleChain Partners"],
    description:
      "Bringing the world of Ethereum-based applications and assets to the interoperable networks of the Cosmos ecosystem, all while aligning developer and user incentives",
  },
  {
    name: "Gravity Bridge",
    filters: ["MantleChain Partners", "Token Integration Partners"],
    description:
      "An open, decentralized bridge that unlocks the power of interoperability & liquidity between blockchain ecosystems.",
  },
  {
    name: "OKC",
    filters: ["MantleChain Partners"],
    description:
      "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading",
  },
  {
    name: "RushRaids",
    filters: ["MantleGrants Partners"],
    description: "description",
    description: "description",
  },
  {
    name: "MyriadFlow",
    filters: ["MantleGrants Partners", "interNFT"],
    description: "An innovative platform to explore & launch NFT Experiences",
  },
  {
    name: "GlitchCandies",
    filters: ["MantleGrants Partners"],
    description:
      "Hand made collection of evolving sculptures created using sound synthesis and GLSL shaders minted on Cosmos ecosystem",
  },
  {
    name: "Kevin Harrison",
    filters: ["MantleGrants Partners"],
    description: "description",
  },
  {
    name: "LumosLabs",
    filters: ["MantleGrants Partners"],
    description:
      "A world built for developers, designed to open access to ecosystem opportunities and help them with their journey into Web3",
  },
  {
    name: "Cosmostation",
    filters: ["Validators"],
    description: "Wallet for Cosmos SDK based chains",
  },
  {
    name: "Everstake",
    filters: ["Validators"],
    description:
      "The biggest decentralized staking provider in the blockchain industry",
  },
  {
    name: "Citadel.one",
    filters: ["Validators"],
    description:
      "Stake, send, and exchange your crypto assets with a user-friendly non-custodial platform",
  },
  {
    name: "Forbole",
    filters: ["Validators"],
    description:
      "A pioneer in building blockchain solutions with a strong focus on user experience and making blockchain space more accessible to more people",
  },
  {
    name: "P2P.org",
    filters: ["Validators"],
    description:
      "Helping investors compound their cryptocurrency investments through non-custodial staking",
  },
  { name: "DSRV", filters: ["Validators"], description: "description" },
  {
    name: "INFStones",
    filters: ["Validators"],
    description:
      "Build decentralized applications with unmatched agility, reliability, and scalability on more than 60 leading blockchain protocols",
  },
  {
    name: "Cros-Nest",
    filters: ["Validators"],
    description:
      "State-of-the-art distributed and redundant validator infrastructure for Proof of Stake Blockchains",
  },
  { name: "BlockScope", filters: ["Validators"], description: "description" },
  {
    name: "Frens",
    filters: ["Validators"],
    description:
      "A community growth platform to help NFT, DAO, DeFi and blockchain gaming projects to grow quickly and engage their members",
  },
  {
    name: "AllNodes",
    filters: ["Validators"],
    description:
      "A non-custodial platform where you can host Masternodes, Validator Nodes, Super Nodes, Sentry Nodes, Full Nodes, and partake in Staking in over 55 protocols.",
  },
  { name: "DroidDAO", filters: ["Partnerships"], description: "description" },
  { name: "NHDAO", filters: ["Partnerships"], description: "description" },
  {
    name: "AvigationAI",
    filters: ["Partnerships"],
    description: "description",
  },
  {
    name: "Tanukiverse",
    filters: ["Partnerships"],
    description: "description",
  },
  { name: "Metaverse", filters: ["Partnerships"], description: "description" },
  {
    name: "Vorlds",
    filters: ["Partnerships"],
    description:
      "A creator based Metaverse platform that supports users, NFTs and other parts from blockchains across the Polkadot & Ethereum ecosystems.",
  },
  {
    name: "JunoSwap",
    filters: ["Token Integration Partners"],
    description:
      "First ever interchain decentralized exchange focussed on CW-20 (CosmWasm) asset adoption",
  },
  {
    name: "StakingRewards",
    filters: ["Token Integration Partners"],
    description: "Leading data provider for staking and crypto-growth tools",
  },
  { name: "PolkaDot", filters: ["interNFT"], description: "description" },
  {
    name: "Memora",
    filters: ["interNFT"],
    description:
      "A Fintech Ecosystem that allows all actors of the arts world to monetize the assets",
  },
  {
    name: "IXO",
    filters: ["interNFT"],
    description:
      "The ixo Protocol is the basis for building an Internet of Impact for sustainable social, environmental and ecomic development and to mitigate climate impacts",
  },
  {
    name: "HyperSign",
    filters: ["interNFT"],
    description:
      "Hypersign is an Identity and access management solution that makes sure your employees and customers are who they say they are",
  },
  {
    name: "interChain Foundation",
    filters: ["interNFT"],
    description:
      "Stewards of the interchain, funding and advancing the creation of an interoperable, sustainable, and community-owned decentralized ecosystem",
  },
  {
    name: "IRIS",
    filters: ["interNFT"],
    description:
      "IRISnet (a.k.a IRIS Hub) is designed to be the foundation for the next generation distributed applications. Built with Cosmos-SDK, IRIS Hub enables cross-chain interoperability through a unified service model",
  },
  {
    name: "AkashNetwork",
    filters: ["interNFT"],
    description:
      "Launch applications such as DeFi apps, blogs, games, data visualizations, block explorers, blockchain nodes, and other blockchain network components on a decentralized cloud",
  },
];

export default function EcosystemsPageLowerSection() {
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
    const sortedData = configData.filter((element) =>
      compareArray.every(
        (compareArrayItem) => element.filters.indexOf(compareArrayItem) != -1
      )
    );
    if (nameFilters.length) {
      sortedData = configData.filter((element) => {
        return element.name == nameFilters;
      });
    }
    getFilters(sortedData);
    return sortedData;
  };

  const submitSearchData = () => {
    setNameFilters(searchData);
  };

  let sortedArray = getSortedArray();
  console.log(sortedArray);

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
                    setNameFilters("");
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
            {filters.map((type, index) => {
              return (
                <Grid key={index} item>
                  <Chip
                    sx={{ px: 2 }}
                    color={activeFilters.includes(type) ? "info" : "primary"}
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
              );
            })}
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
                  <ButtonBase href="/">
                    <Card sx={optionStyles}>
                      <Paper sx={{ height: "312px" }}>
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
                              {ele.name}
                            </Typography>
                            <Typography variant="body2">
                              {ele.description}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "end",
                                marginBottom: "20px",
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

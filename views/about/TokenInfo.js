import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Icon,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import NextLink from "../../components/NextLink";
import Section from "../../components/Section";

export default function TokenInfo({ tokenInfoData }) {
  const [usdValue, setUSDValue] = useState("");
  const [tickersValue, setTickersValue] = useState([]);
  const [apyValue, setAPYValue] = useState("");

  useEffect(() => {
    const fetchUSDValue = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/assetmantle?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false"
      );
      const inflation = await fetch(
        "https://rest.assetmantle.one//cosmos/mint/v1beta1/inflation"
      );
      const pool = await fetch(
        "https://rest.assetmantle.one//cosmos/staking/v1beta1/pool"
      );
      const totalSupply = await fetch(
        "https://rest.assetmantle.one//cosmos/bank/v1beta1/supply"
      );
      const responseJson = await response.json();
      const inflationJson = await inflation.json();
      const poolJson = await pool.json();
      const totalSupplyJson = await totalSupply.json();
      const mntlSupply = totalSupplyJson.supply.find(
        (ele) => ele.denom === "umntl"
      );
      setAPYValue(
        (10 ** 6 * mntlSupply.amount * inflationJson.inflation) /
          poolJson.pool.bonded_tokens /
          10000
      );
      setUSDValue(responseJson.market_data.current_price.usd);
      setTickersValue(
        responseJson.tickers.map((item) => {
          return {
            name: item.market.name,
            usd_value:
              item.converted_last.usd || item.market_data.current_price.usd,
            coin_id: item.coin_id,
            target_coin_id: item.target_coin_id,
          };
        })
      );
    };
    fetchUSDValue();
  }, []);

  return (
    <Section title={tokenInfoData.title} subTitle={tokenInfoData.description}>
      <Grid container spacing={{ xs: 0, md: 3 }}>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            alignItems="center"
            justifyContent={{ xs: "center", sm: "start" }}
            sx={{ my: "auto" }}
          >
            <Box
              sx={{
                width: "min(204px, 100%)",
              }}
            >
              <img
                src={tokenInfoData.left.mntlCoinImage}
                alt="MNTL token illustration"
                style={{
                  width: "100%",
                  height: "auto",
                  objectPosition: "center",
                }}
              />
            </Box>
            <Stack direction="column" spacing={3}>
              <Typography
                variant={tokenInfoData.left.titleVariant}
                color={tokenInfoData.left.titleColor}
              >
                {tokenInfoData.left.title && tokenInfoData.left.title}
              </Typography>
              <Stack>
                {tokenInfoData.left.data.map((ele, index) => (
                  <Typography
                    component="span"
                    sx={{ display: "inline" }}
                    variant={ele.textVariant}
                    color={ele.textColor}
                    key={index}
                  >
                    {`${ele.title.toUpperCase()}:`}
                    {ele.title === "usd" ? (
                      <Typography
                        sx={{ display: "inline" }}
                        variant={ele.textVariant}
                        color={ele.valueColor}
                      >
                        {usdValue}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{ display: "inline" }}
                        variant={ele.textVariant}
                        color={ele.valueColor}
                      >
                        {Math.trunc(apyValue)}
                      </Typography>
                    )}
                  </Typography>
                ))}
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                justifyContent={{ xs: "center", sm: "start" }}
              >
                {tokenInfoData.left.ctas &&
                  Array.isArray(tokenInfoData.left.ctas) &&
                  tokenInfoData.left.ctas.length > 0 &&
                  React.Children.toArray(
                    tokenInfoData.left.ctas.map((cta, index) => (
                      <Button
                        component="a"
                        variant={cta.variant ? cta.variant : "contained"}
                        size={cta.size}
                        href={cta.url && cta.url}
                        target={cta.target && cta.target}
                        endIcon={<Icon>{cta.endIcon}</Icon>}
                        key={index}
                      >
                        {cta.title}
                      </Button>
                    ))
                  )}
              </Stack>
              <Stack direction="row" spacing={2.5}>
                {tokenInfoData.left.references &&
                  Array.isArray(tokenInfoData.left.references) &&
                  tokenInfoData.left.references.length > 0 &&
                  React.Children.toArray(
                    tokenInfoData.left.references.map((reference, index) => (
                      <Link
                        href={reference.url && reference.url}
                        target={reference.target && reference.target}
                        sx={{ width: "45px" }}
                        key={index}
                      >
                        <img
                          src={reference.logo && reference.logo}
                          alt={reference.name}
                          sx={{
                            width: "100%",
                            height: "auto",
                            objectPosition: "center",
                          }}
                        />
                      </Link>
                    ))
                  )}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              // display: "grid",
              // gridTemplateColumns: "repeat(7, 1fr)",
              mt: { xs: 7, md: 0 },
            }}
          >
            <TableContainer
              sx={{
                height: "350px",
              }}
              component={Paper}
              variant="translucent"
            >
              <Table size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {tokenInfoData.right.tableHeaders.map((header, index) => (
                      <TableCell key={index}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tokenInfoData.right.tokenFrom2.map((token, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell>
                        <Typography variant="caption">
                          <Button
                            component="a"
                            variant={tokenInfoData.right.buttonVariant}
                            href={token.url}
                            target="_blank"
                          >
                            {token.title}
                          </Button>
                        </Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography variant="caption">{token.name}</Typography>
                      </TableCell>
                      <TableCell scope="row">
                        <Typography variant="caption">{token.pair}</Typography>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {tickersValue.map((ele, index) => {
                          return token.name === "Osmosis"
                            ? ele.target_coin_id === "osmosis" && (
                                <Typography variant="caption" key={index}>
                                  {ele.usd_value}
                                </Typography>
                              )
                            : ele.name.includes(token.name) && (
                                <Typography variant="caption" key={index}>
                                  {ele.usd_value}
                                </Typography>
                              );
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

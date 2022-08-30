import { Link as MuiLink } from "@mui/material";
import Link from "next/link";
import React, { forwardRef } from "react";

const MUIanchor = ({ href, as, prefetch, ...props }, ref) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} {...props} underline="hover" color="primary.main" />
  </Link>
);

export default forwardRef(MUIanchor);

import React, { forwardRef, Ref } from "react";
import Link, { LinkProps } from "next/link";
import { Link as MuiLink } from "@mui/material";

const MUIAnchor = ({ href, as, prefetch, ...props }, ref) => (
  <Link href={href} as={as} prefetch={prefetch} passHref>
    <MuiLink ref={ref} {...props} underline="hover" color="primary.main" />
  </Link>
);

export default forwardRef(MUIAnchor);

import { Link } from "@mui/material";
import React from "react";

const primaryStyle = {
  backgroundColor: "primary.main",
  color: "primary.dark",
  padding: "12px 25px",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  borderRadius: 8,
};
const secondaryStyle = {
  border: "1px solid",
  borderColor: "primary.main",
  color: "primary.main",
  padding: "12px 34px",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  borderRadius: 8,
};

export default function Button({
  text,
  href,
  icon,
  target,
  disabled,
  variant = "secondary",
}) {
  return (
    <>
      {text && variant === "primary" ? (
        <Link
          variant="subtitle1"
          underline="none"
          sx={primaryStyle}
          href={href && href}
          component="a"
          target={target ? target : "_self"}
          disabled={disabled ? disabled : false}
        >
          {text}
          {icon &&
            (typeof icon === "string" ? <img src={icon} alt={icon} /> : icon)}
        </Link>
      ) : (
        <Link
          variant="subtitle1"
          underline="none"
          sx={secondaryStyle}
          href={href && href}
          component="a"
          target={target ? target : "_self"}
          disabled={disabled ? disabled : false}
        >
          {text}
          {icon &&
            (typeof icon === "string" ? <img src={icon} alt={icon} /> : icon)}
        </Link>
      )}
    </>
  );
}

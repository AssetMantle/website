"use client";
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    opacity: 0,
  },
  open: (delay) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.004 * delay[1] },
  }),
  closed: (delay) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.0 * delay[0] },
  }),
};

export default function Pixelate({ menuIsActive }) {
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColum) => {
    if (typeof window === "undefined") return null;
    const { innerWidth, innerHeight } = window;
    const blockSize = innerHeight * 0.04;
    const nbOfBlocks = Math.ceil(innerWidth / blockSize);
    const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
    return React.Children.toArray(
      shuffledIndexes.map((randomIndex, index) => {
        return (
          <motion.div
            key={index}
            className={styles.block}
            variants={animationVariants}
            initial="initial"
            animate={menuIsActive ? "open" : "closed"}
            custom={[
              indexOfColum + randomIndex,
              10 - indexOfColum + randomIndex,
            ]}
          />
        );
      })
    );
  };

  return (
    <div style={{ flexDirection: "column" }} className={styles.pixelBackground}>
      {React.Children.toArray(
        [...Array(25)].map((_, index) => {
          return (
            <div key={index} className={styles.row}>
              {getBlocks(index)}
            </div>
          );
        })
      )}
    </div>
  );
}

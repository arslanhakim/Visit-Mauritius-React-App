import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ASSETS } from "../assets/path";

export const Testing = () => {
  // const [move, setMove] = useState(false);
  const [x_axis, setX_axis] = useState();
  const [y_axis, setY_axis] = useState();

  useEffect(() => {
    // setX_axis(screen.width / 2);
    // setY_axis(screen.height / 2);
    // console.log(x_axis);
    // $("html").ready(function (e) {
    //   var wx = $(window).width();
    //   var wy = $(window).height();

    // newx = wx / 2;
    // newy = wy / 2;
    // });
    console.log("width changes", window.innerWidth);
    setX_axis(window.innerWidth / 2);
  }, [window.innerWidth]);

  return (
    <motion.div
      id="frameOuter"
      style={{
        color: "white",
        width: "100%",
        height: "100%",
        paddingLeft: 10,
        paddingTop: 25,
        // display: "flex",
      }}
      initial={{ background: "#271e30" }}
      animate={{ backgroundColor: "transparent" }}
      transition={{
        type: "tween",
        duration: 12,
        delay: 6,
        width: 20,
      }}
    >
      <motion.img
        initial={{ x: 750, y: 280, scale: 3, width: 90 }}
        // animate={{ x: move ? 200 : -200, y: move ? 100 : 20 }}
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{
          type: "tween",
          duration: 5,
          delay: 1,
          width: 20,
        }}
        src={ASSETS.OPEN.LOGO_SVG}
        className="brand-img"
        id="frameOuter"
      ></motion.img>
      <br />
      <motion.h4
        id="frame"
        initial={{ x: 1070, y: 350, scale: 1.5 }}
        // animate={{ x: move ? 200 : -200, y: move ? 100 : 20 }}
        animate={{ x: 150, y: 150, scale: 1 }}
        transition={{ type: "tween", duration: 5, delay: 2 }}
      >
        Coming Soon
      </motion.h4>
      <br />
      <motion.h1
        id="frameTitle"
        initial={{ x: 0, y: 200, scale: 0 }}
        animate={{ x: 200, y: 170, scale: 1 }}
        transition={{
          type: "tween",
          duration: 4,
          delay: 5,
        }}
      >
        VISIT <br /> MAURITIUS
      </motion.h1>
    </motion.div>
  );
};

export default Testing;

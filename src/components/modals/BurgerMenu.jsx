import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
export default function BurgerMenu({ burgerModal, setBurgerModal }) {
  return (
    <AnimatePresence>
      {burgerModal && (
        <motion.div
          className="burgerModal-layout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div onClick={() => setBurgerModal(false)} className="burger-x">
            <IconContext.Provider value={{ size: "35px" }}>
              <AiOutlineClose />
            </IconContext.Provider>
          </div>
          <section>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/cart">CART</Link>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

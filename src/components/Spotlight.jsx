"use client";
import "./header.css";
import Lottie from "lottie-react";
import rocket from "../rocket.json";
import { motion } from "motion/react";
import { Spotlight } from "../components/ui/Spotlight-new";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="header header-content"
        id="home"
      >
        <h1 className="gradient__text">Lead the Next Digital Revolution</h1>

        <p className="">
          From NFTs to DAOs, we craft strategies that amplify your brand and
          position you as an industry pioneer.
        </p>

        <a href="#" rel="noopener noreferrer" target="_blank" >
            <div className="hero-btn">
              Get Started{" "}
              <Lottie
                className="siren "
                loop={true}
                animationData={rocket}
              ></Lottie>
            </div>
          </a>
      </motion.div>
    </div>
  );
}

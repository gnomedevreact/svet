import { motion } from "framer-motion";

import { Svg } from "@/app/components/shared/Svg/Svg";

import styles from "./Block.module.scss";

export const Block = () => {
  return (
    <div className={styles.wrap}>
      <Svg.Diamond />
      <div>
        <div>
          <a
            href="https://www.instagram.com/x07ssx?igsh=dHJpZGtwdHdma3dl"
            target="_blank"
          >
            <Svg.Ig />
          </a>
          <a
            href="https://www.tiktok.com/@xeniaxisll?_t=8mD1Gafms0v"
            target="_blank"
          >
            <Svg.Tt />
          </a>
          <a href="https://t.me/vcwete" target="_blank">
            <Svg.Tg />
          </a>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Xenia Asveta
        </motion.h1>
      </div>
    </div>
  );
};

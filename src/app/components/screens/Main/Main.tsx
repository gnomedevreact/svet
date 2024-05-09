"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "../../shared/Container/Container";
import { Block } from "./Block/Block";
import styles from "./Main.module.scss";

export const Main = () => {
  const interBubbleRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    function move() {
      setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
      setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }
    move();
  }, [curX, curY]);

  return (
    <main>
      <Container>
        <Block />
        <div className={styles.gradientBg}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className={styles.gradientsContainer}>
            <div className={styles.g1}></div>
            <div className={styles.g2}></div>
            <div className={styles.g3}></div>
            <div className={styles.g4}></div>
            <div className={styles.g5}></div>
            <div className={styles.interactive}></div>
          </div>
        </div>
      </Container>
    </main>
  );
};

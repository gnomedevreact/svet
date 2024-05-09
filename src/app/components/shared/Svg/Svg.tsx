import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const Ig = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { y: 5, x: -2 }, { duration: 0.4 });
      await animate(scope.current, { y: 0, x: 0 }, { duration: 0.4 });
    };
    animation();
  }, []);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      ref={scope}
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.723 0.368188C12.8393 0.588538 8.60645 1.78253 5.18849 5.18606C1.7586 8.60747 0.579438 12.8571 0.358539 17.69C0.221223 20.7064 -0.581729 43.4949 1.74666 49.4712C3.31683 53.503 6.40933 56.603 10.478 58.1782C12.3766 58.9167 14.5438 59.4166 17.723 59.5625C44.3054 60.7655 54.1593 60.1106 58.3145 49.4712C59.0519 47.5774 59.5593 45.412 59.6996 42.2407C60.9146 15.5901 59.5027 9.81344 54.8698 5.18606C51.1951 1.52048 46.8726 -0.974762 17.723 0.368188ZM17.9677 54.2027C15.0572 54.0716 13.4781 53.5867 12.4244 53.1787C9.77358 52.1484 7.78252 50.1656 6.75862 47.5303C4.98547 42.9893 5.57356 21.4216 5.73177 17.9317C5.88699 14.5132 6.57953 11.389 8.9915 8.97707C11.9766 5.99933 15.8333 4.53997 42.0934 5.72512C45.5203 5.87995 48.6517 6.57107 51.0697 8.97707C54.0548 11.9548 55.5354 15.8412 54.3294 42.0005C54.1981 44.9038 53.7115 46.4792 53.3026 47.5303C50.601 54.4535 44.386 55.4146 17.9677 54.2027ZM42.383 14.0689C42.383 16.0401 43.986 17.6431 45.9652 17.6431C47.9443 17.6431 49.5503 16.0401 49.5503 14.0689C49.5503 12.0976 47.9443 10.4961 45.9652 10.4961C43.986 10.4961 42.383 12.0976 42.383 14.0689ZM14.702 29.9639C14.702 38.4087 21.5648 45.2554 30.0306 45.2554C38.4964 45.2554 45.3592 38.4087 45.3592 29.9639C45.3592 21.5191 38.4964 14.6768 30.0306 14.6768C21.5648 14.6768 14.702 21.5191 14.702 29.9639ZM20.0812 29.9639C20.0812 24.4849 24.535 20.0396 30.0306 20.0396C35.5262 20.0396 39.98 24.4849 39.98 29.9639C39.98 35.4459 35.5262 39.8926 30.0306 39.8926C24.535 39.8926 20.0812 35.4459 20.0812 29.9639Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect
            width="60"
            height="60"
            fill="white"
            transform="translate(0.114014)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

const Tg = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { y: 5, x: 2 }, { duration: 0.4 });
      await animate(scope.current, { y: 0, x: 0 }, { duration: 0.4 });
    };
    animation();
  }, []);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      ref={scope}
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.4625 17.6656C40.4738 17.6656 40.4888 17.6656 40.5038 17.6656C40.8957 17.6656 41.2594 17.7875 41.5575 17.9975L41.5519 17.9937C41.7694 18.1831 41.9157 18.4494 41.9513 18.7494V18.755C41.9888 18.9837 42.0094 19.2462 42.0094 19.5144C42.0094 19.6362 42.0057 19.7562 41.9963 19.8762V19.8594C41.5744 24.3012 39.7444 35.0731 38.8144 40.0456C38.4207 42.1512 37.6463 42.8562 36.8963 42.9237C35.2669 43.0756 34.0294 41.8475 32.4507 40.8125C29.9794 39.1906 28.5825 38.1819 26.1844 36.6012C23.4113 34.7769 25.2094 33.77 26.7882 32.1312C27.2025 31.7 34.3857 25.1656 34.5263 24.5731C34.5338 24.5375 34.5375 24.4981 34.5375 24.4569C34.5375 24.3106 34.4832 24.1775 34.395 24.0762C34.2975 24.0125 34.1757 23.9769 34.0482 23.9769C33.9638 23.9769 33.8832 23.9937 33.8082 24.0219L33.8119 24.02C33.5644 24.0762 29.6169 26.685 21.9694 31.8462C21.135 32.5044 20.0813 32.9206 18.9338 32.9694H18.9225C17.2969 32.7725 15.8213 32.4106 14.4207 31.895L14.5594 31.94C12.8007 31.3662 11.4038 31.0644 11.5238 30.0931C11.5875 29.5881 12.2838 29.0712 13.6125 28.5425C21.7975 24.9762 27.2557 22.6256 29.9869 21.4906C33 19.8912 36.4932 18.575 40.1663 17.7219L40.4607 17.6637L40.4625 17.6656ZM28.8525 0.762497C13.2863 0.799997 0.680664 13.4281 0.680664 29C0.680664 44.5944 13.3219 57.2375 28.9182 57.2375C44.5144 57.2375 57.1557 44.5962 57.1557 29C57.1557 13.4281 44.55 0.799997 28.9875 0.762497H28.9838C28.94 0.762497 28.8963 0.762497 28.8525 0.762497Z"
        fill="white"
      />
    </motion.svg>
  );
};

const Tt = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(scope.current, { y: 8 }, { duration: 0.4 });
      await animate(scope.current, { y: 0 }, { duration: 0.4 });
    };
    animation();
  }, []);

  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      ref={scope}
      width="47"
      height="54"
      viewBox="0 0 47 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6684 9.836C34.8357 7.73485 33.7339 4.99513 33.7339 2H31.4374M36.6684 9.836C38.3387 11.7516 40.6002 13.1447 43.1754 13.6902C43.9757 13.8644 44.8107 13.9573 45.6807 13.9573V22.5477C41.2267 22.5477 37.0972 21.12 33.7334 18.7053V36.1768C33.7334 44.9068 26.6347 52 17.9238 52C13.3652 52 9.24751 50.0495 6.35931 46.95C3.72631 44.1175 2.11401 40.3328 2.11401 36.1768C2.11401 27.5745 9.00396 20.5627 17.541 20.377M36.6684 9.836C36.6239 9.8069 36.5794 9.77753 36.5352 9.74785M12.0779 40.3792C11.2196 39.1952 10.7092 37.7442 10.7092 36.1652C10.7092 32.1835 13.9454 28.9445 17.924 28.9445C18.6663 28.9445 19.3854 29.072 20.0582 29.281V20.5048C19.3622 20.4118 18.6547 20.3537 17.924 20.3537C17.7963 20.3537 16.7686 20.4221 16.641 20.4221M31.4252 2H25.1384L25.1269 36.4438C24.9877 40.298 21.8094 43.3977 17.9238 43.3977C15.5111 43.3977 13.3884 42.202 12.0661 40.391"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

const Diamond = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 2, stiffness: 300 }}
      width="126"
      height="108"
      viewBox="0 0 126 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.19572 35.1767L60.9086 107.581L36.962 35.1767H1.19572ZM43.4511 35.1767L64.5989 107.729L82.7962 35.1767H43.4511ZM67.8168 107.581L125.301 35.1767H89.8113L67.8168 107.581ZM125.435 30.4394L108.2 1.6502L90.9567 30.4394H125.435ZM102.781 0H68.3026L85.5372 29.7776L102.781 0ZM80.238 30.4394L63.0034 1.6502L45.7642 30.4394H80.238ZM57.9582 0H23.4844L40.7235 29.7776L57.9582 0ZM18.0694 1.6502L0.834717 30.4394H35.3085L18.0694 1.6502Z"
        fill="#3DC5FF"
      />
    </motion.svg>
  );
};

export const Svg = {
  Ig,
  Tg,
  Tt,
  Diamond,
};
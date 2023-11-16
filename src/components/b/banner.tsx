import React from "react";
import styles from "./banner.module.scss";
import { GoArrowUpRight } from "react-icons/go";

const Banner: React.FC = () => {
  return (
    <div>
      <div className={styles.bg}>
        <img className={styles.bg_img} src="img/IMG_4105.jpg" />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            фитнес - школа <br />
            тренера и нутрициолога <br />
            Анны Шмуневcкой
          </h1>
          <div className={styles.title_desc}>
            <p>Вход в личный кабинет</p>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

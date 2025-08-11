import React from "react";
import styles from "./style.module.css";
export default () => {
  return (
    <div
      style={{
        margin: "70px 0 0 0",
        background: "#FCFCFC",
        paddingBottom: "60px",
        height: "100vh",
      }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h1 className={styles.bannerTitle}>Your Trusted Local LA Movers</h1>
            <p className={styles.bannerText}>
              As your top-rated LA movers, we’re committed to providing reliable
              and professional moving services tailored to meet all your moving
              needs in Los Angeles. Our expert team guarantees a smooth,
              stress-free move every time.
            </p>
            <button className={styles.navBtn}>Get A Free Moving Quote</button>
          </div>
          <div className={styles.col2}>
            <img
              src="https://jfkmoving.com/wp-content/uploads/2024/09/JFK-MOVING-original.png"
              alt="herro img"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

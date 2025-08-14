import React from "react";
import styles from "./style.module.css";
export default () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Book Your LA Move Today</h1>
        <p>
          JFK Moving: The most experienced and trusted movers in LA and
          surrounding areas. We deliver excellence in every relocation job,
          ensuring a hassle-free experience from start to finish
        </p>
      </div>
      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.formBox}>
            <label>
              Type of move
              <input type="text" name="" id="" />
            </label>
            <label>
              Move Size
              <input type="text" placeholder="How many medrooms" />
            </label>
            <label>
              Move date
              <input type="date" />
            </label>
            <label>
              Type of move
              <input type="text" name="" id="" />
            </label>
            <label>
              Move Size
              <input type="text" placeholder="How many medrooms" />
            </label>
            <label>
              Move date
              <input type="date" />
            </label>{" "}
            <label>
              Type of move
              <input type="text" name="" id="" />
            </label>
            <label>
              Move Size
              <input type="text" placeholder="How many medrooms" />
            </label>
            <label>
              Move date
              <input type="date" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

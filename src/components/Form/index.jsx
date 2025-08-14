import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import styles from "./style.module.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default () => {
  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles.bookTitle}>Book Your LA Move Today</h1>
        <p>
          JFK Moving: The most experienced and trusted movers in LA and
          surrounding areas. We deliver excellence in every relocation job,
          ensuring a hassle-free experience from start to finish
        </p>
      </div>
      <div className={styles.container}>
        <section id="form">
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
                Pickup address
                <input type="text" placeholder="Zip code " />
              </label>
              <label>
                Destination
                <input type="text" placeholder="Zip code" />
              </label>
              <label>
                Name
                <input type="text" placeholder="Your Name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="Your Email" />
              </label>
              <label>
                Phone
                <input type="text" placeholder="Your Phone" />
              </label>
              <label className={styles.grow}>
                How did you find us?
                <input type="text" placeholder="Write how did you  find us" />
              </label>
            </div>
            <label style={{ marginTop: "20px" }}>
              Message
              <textarea
                className={styles.formTextArea}
                placeholder="Your Message"
              ></textarea>
            </label>
          </form>
        </section>

        <div className={styles.contain}>
          <label className={styles.checkboxLabel}>
            <Checkbox {...label} sx={{ width: "35px", height: "45px" }} />
            <Accordion
              sx={{
                background: "none",
                boxShadow: "none",
                border: "none",
                color: "#fff",
              }}
            >
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  By clicking this box, you agree to allow JFK Moving LLC to
                  send you text or SMS messages pertaining to your quote....
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  request. These may include texted quotes, appointment
                  reminders, and billing inquiries. You can opt out anytime by
                  replying STOP to (877) 671-3535 or HELP for assistance. JFK
                  Moving will never text/message you anything that does not
                  pertain to your move and your phone number will never be
                  shared or added to marketing campaigns of any kind. Message
                  and data rates may apply. Frequency may vary.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </label>

          <p className={styles.link}>
            Visit our Privacy Policy for details on how we handle your data.
            Review our Terms of Service to understand the rules governing our
            services.
          </p>
        </div>
        <div className={styles.btn}>
          <a href="#form" style={{ textDecoration: "none", color: "#4e4e42" }}>
            <button className={styles.freeBtn}>Free estimate</button>
          </a>
        </div>
      </div>
    </div>
  );
};

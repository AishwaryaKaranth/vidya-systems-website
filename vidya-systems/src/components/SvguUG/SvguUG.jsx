import React from "react";
import styles from "./SvguUG.module.scss";
import Footer from "../Footer/Footer";

const SvguCourses = [
  {
    course: "1. Bachelor of Arts (BA)",
    link: "https://docs.google.com/document/d/1v2ifB_n_sBBINAxb7TOJAY9HCK1go-a5/edit?usp=sharing&ouid=115030633055998374817&rtpof=true&sd=true",
  },
  {
    course: "2. Bachelor of Business Administration (BBA)",
    link: "https://docs.google.com/document/d/1VGV0EdhTD5KenfCmUSoyDIHBes7fIWSm/edit?usp=sharing&ouid=115030633055998374817&rtpof=true&sd=true",
  },
  {
    course: "3. Bachelor of Computer Applications (BCA)",
    link: "https://drive.google.com/file/d/1-WACAb6z2sFbccXQKvnbx2oHwDzKMDkR/view?usp=sharing",
  },
  {
    course: "4. Bachelor of Commerce (BCom)",
    link: "https://docs.google.com/document/d/1RiutZ1R_bylqSwullsTKcObZFcI-tBxw/edit?usp=sharing&ouid=115030633055998374817&rtpof=true&sd=true",
  },
];

const SvguUG = () => {
  return (
    <>
      <div className={styles["container"]}>
        <h2 className={styles["heading"]}>
          Suresh Gyan Vihar University - Distance Education (SGVU-DE)
        </h2>
        <div className={styles["about-container"]}>
          <br />
          <p>
            The Suresh Gyan Vihar University - Distance Education (SGVU-DE) is
            established in the year 2012 to serve the aspirant students who
            could not enter the regular colleges for higher education. SGVU-DE
            offers 4 programmes in UG & PG stream viz.,{" "}
            BBA, BCA, MBA, and MCA. SGVU is recognized by
            UGC-AICTE-DEB, Govt. of India. SGVU distance programs have been
            vetted by EMAS Business School, Russia and students who have
            completed / pursuing distance MBA from SGVU can seek higher
            educational programs with EMAS Russia.
          </p>

          <br />
        </div>
        <div className={styles["course-details"]}>
          {SvguCourses.map((_) => {
            return (
              <>
                <a
                  href={_.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles["course-titles"]}
                >
                  {_.course}
                </a>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SvguUG;

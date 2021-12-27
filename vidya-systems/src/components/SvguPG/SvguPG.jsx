import React from "react";
import styles from "./SvguPG.module.scss";
import { NavDropdown } from "react-bootstrap";

const SvguCourses = [
    {
        course: "Master of Arts (MA)",
        link: "https://docs.google.com/document/d/1TGX1kmhTBRfSJzQ7BegNjK3w_UCfYs_1/edit?usp=sharing&ouid=115030633055998374817&rtpof=true&sd=true"
    },
    {
        course: "Master of Computer Applications (MCA)",
        link: "https://drive.google.com/file/d/1nh1pduNw9PKmMs6qxi-1m-oVYwD4lfxO/view?usp=sharing"
    },
    {
        course: "Master of Business Administration (MBA)",
        link: "https://drive.google.com/file/d/11zG84idwpE5r9faWHdqlNw-HGhsd8fCH/view?usp=sharing"
    }
]

const SvguPG=()=>{
    return(
        <>
        <div className={styles['container']}>
            <h2 className={styles['heading']}>Suresh Gyan Vihar University - Distance Education (SGVU-DE)</h2>
            <div className={styles['about-container']}>
                <br/>
            <p>The Suresh Gyan Vihar University - Distance Education (SGVU-DE) is established 
                in the year 2012 to serve the aspirant students 
                who could not enter the regular colleges for higher education.
                SGVU-DE offers 4 programmes in UG & PG stream viz., <span>BBA, BCA, MBA, and MCA</span>.
                SGVU is recognized by UGC-AICTE-DEB, Govt. of India. SGVU distance programs have been vetted by EMAS 
                Business School, Russia and students who have completed / 
                pursuing distance MBA from SGVU can seek higher educational 
                programs with EMAS Russia.</p>
                <br/>    
            </div>
            <div className={styles["course-details"]}>
                    {SvguCourses.map(_=>{
                        return(
                            <>
                                <a href={_.link} target="_blank" className={styles['course-titles']}>{_.course}</a>
                                <br/>
                            </>
                        ) 
                    })}
                </div> 
        </div>
        
        </>
    )
}

export default SvguPG;
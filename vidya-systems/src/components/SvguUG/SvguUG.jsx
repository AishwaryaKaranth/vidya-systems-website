import React from "react";
import styles from "./SvguUG.module.scss";
import { NavDropdown } from "react-bootstrap";


const SVGUUGData=[
    {
        semester:"Semester 1",
        syllabus:[  "1. Business Communication Skills",
                    "2. Business Mathematics",
                    "3. Introduction to Computers",
                    "4. Principle of Management"]
    },
    {
        semester:"Semester 2",
        syllabus:[  "1. Business Environment",
                    "2. Business Economics",
                    "3. Introduction to Financial Accounts",
                    "4. Organisational Behaviour"]
    },
    {
        semester:"Semester 3",
        syllabus:[  "1. Cost Accounting I",
                    "2. Foundation of Human Skills",
                    "3. Human Resource Management",
                    "4. Principles of Marketing"]
    },
    {
        semester:"Semester 4",
        syllabus:[  "1. Business Statistics",
                    "2. Financial Management",
                    "3. Management Information Systems",
                    "4. Production & Operation Management"]
    },
    {
        semester:"Semester 5",
        syllabus:[  "1. Enterprise Resource Planning",
                    "2. Elements of Company Law",
                    "3. Business Entrepreneurship",
                    "4. International Economics"]
    },
    {
        semester:"Semester 6",
        syllabus:[  "1.Business Regulatory Framework (Mercantile Law)",
                    "2. Business Administration",
                    "3. E-Commerce",
                    "4. Project Work"]
    }
]

const SvugData2=[
    {
        semester:"Semester 1",
        syllabus:["1. Principle of Management",
        "2. Business Communication",
        "3. Principles of Prog. & Algorithm",
        "4. Modern Operating Environment & M.S. Office",
        "5. Lab - Principles of Prog. & Algorithm"]
    },
    {
        semester:"Semester 2",
        syllabus:["1. Computer Applications in Statistics",
        "2. Introduction to Database Management System",
        "3. E-commerce Concepts",
        "4. C-programing",
        "5. Lab - C Programming"]
    },
    {
        semester:"Semester 3",
        syllabus:["1. Data Structure Using C",
        "2. Discrete Mathematics",
        "3. Introduction to Operating Systems",
        "4. RDBMS (Oracle)",
        "5. Lab- Data Structure Using C"]
    },
    {
        semester:"Semester 4",
        syllabus:["1. Object Oriented Programming using C++",
        "2. Computer Networks",
        "3. Programming In Visual Basics",
        "4. Enterprise Resource Planning",
        "5. Lab- Programming In Visual Basics"]
    },
    {
        semester:"Semester 5",
        syllabus:["1. Software Engineering",
        "2. Dot Net Programming",
        "3. Java Programming",
        "4. Web Technologies",
        "5. Lab - Java Programming"]
    },
    {
        semester:"Semester 6",
        syllabus:["1. Object Oriented Software Engineering",
        "2. Software Testing",
        "3. Advanced Java",
        "4. Lab- Advanced Java",
        "5. Project Work"]
    }
]

const SvguUG=()=>{
    return(
        <div className={styles['container']}>
            <h3 className={styles['heading']}>Suresh Gyan Vihar University - Distance Education (SGVU-DE)</h3>
            <div className={styles['about-container']}>
            <p>The Suresh Gyan Vihar University - Distance Education (SGVU-DE) is established 
                in the year 2012 to serve the aspirant students 
                who could not enter the regular colleges for higher education.
                SGVU-DE offers 4 programmes in UG & PG stream viz., BBA, BCA, MBA, and MCA.
                SGVU is recognized by UGC-AICTE-DEB, Govt. of India. SGVU distance programs have been vetted by EMAS 
                Business School, Russia and students who have completed / 
                pursuing distance MBA from SGVU can seek higher educational 
                programs with EMAS Russia.</p>
                <br/>
                <p><span className={styles['title-heading']}>UG Course’s offered</span>:
1.	BBA- Bachelor of Business Administration
Bachelor of Business Administration (BBA) is an interdisciplinary three years graduate degree programme offered by SGVU-DE. With BBA, graduates can either launch their professional career in top corporates or progress to pursue a PG programme. BBA offers students a core of mandatory courses in Computer Applications, General Business Law, Economics, Finance, Marketing and Management. On successful completion of the programme students will acquire adequate knowledge and skills in Communication Skills, Logical Reasoning, Business Management, Presentation Skills and Computer Applications besides achieving a remarkable improvement in their overall personality.

•	Duration : Minimum 3 years, 6 Semester Program & Max 6 years 
•	Medium : English
•	Eligibility : 10+2 or its equivalent
•	Curriculum /Syllabus
</p>
            </div>
            <div className={styles['course-container']}>
                {SVGUUGData.map((data)=>
                <div className={styles['course-flex-container']}>
                <h3>{data.semester}</h3>
                {data.syllabus.map((d)=><li className={styles['syllabus-list']}>{d}</li>)}
                </div>
                )}
            </div>
        </div>
    )
}

export default SvguUG;
import React from "react";
import styles from "./SvguPG.module.scss";
import { NavDropdown } from "react-bootstrap";

const SvugPGData1=[
    {
        semester:"Semester 1",
        syllabus:["1. Business Communication Skills",
        "2. C-Programing",
        "3. Lab - C Programming",
        "4. Software Engineering",
        "5. Fundamentals Of Computers",
        "6. Discrete Mathematics"]
    },
    {
        semester:"Semester 2",
        syllabus:["1. Database Management System",
        "2. M.I.S. & BUSINESS Intelligence",
        "3. Operating System Concepts",
        "4. Object Oriented Prog With C++",
        "5. Lab - Object Oriented Prog With C++",
        "6. Enterprise Resource Planning"]
    },
    {
        semester:"Semester 3",
        syllabus:["1. Advance Database Management System",
        "2. Data Communication & Computer Network",
        "3. Data Structure Using C++",
        "4. Lab - Data Structure Using C++",
        "5. Object Oriented Analysis & Design",
        "6. Web Technologies"]
    },
    {
        semester:"Semester 4",
        syllabus:["1. Design & Analysis Of Algorithm",
        "2. Information Security & Audit",
        "3. Java Programming",
        "4. Lab - Java Programming",
        "5. Mobile Computing",
        "6. Optimization Technique"]
    },
    {
        semester:"Semester 5",
        syllabus:["1. Software Project Management",
        "2. Advance Development Technology",
        "3. Advanced Internet Technologies",
        "4. Software Testing & Quality Assurance",
        "5. Current/Emerging Trends in Information Technology",
        "6. Lab-Advanced Internet Technologies"]
    },
    {
        semester:"Semester 6",
        syllabus:["Project Work"]
    }
]

const SvguPGData2=[
    {
        semester:"Semester 1",
        syllabus:["1. Modern Business Organization and Management",
        "2. Global Business Environment & Economics",
        "3. Accounting & Financial Management",
        "4. HR & OB",
        "5. Business & Corporate Law"]
    },
    {
        semester:"Semester 2",
        syllabus:["1. Business Research Methodology",
        "2. Modern Marketing Management",
        "3. Information Technology for Business",
        "4. Production Operations & SCM",
        "5. Business Communication Skills"]
    }
]

const MBAElectives=[
    {
        semester:"Semester III & IV Specialization",
        syllabus:[  "1. Digital Marketing"  ,   
                    "2. Ecommerce Marketing & Management",
                    "3. International Marketing ",
                    "4. Investment Banking and Wealth Management",
                    "5. Strategic Management ",
                    "6. Business Leadership",
                    "7. Entrepreneurship",
        	        "8. Foreign Trade and Global Business Management ",
     	            "9. Operation & Production Management ",
                    "10. Financial Planning & Analysis ",
                    "11. Insurance and Risk Management"	,
                    "12. Banking Management ",
                    "13. Branding & Advertising",
                    "14. Project Leadership and Management",
    	            "15. Business Analytics and Intelligence",
                    "16. Media and Entertainment Management",
                    "17. Mass Communication ",
                    "18. Healthcare Management",
                    "19. Marketing Management ",
        	        "20. Information Technology"]
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
                <p><span className={styles['title-heading']}>PG Course’s offered</span>:
                <br/>
                <h4>1. MCA – Masters of Computer Application </h4>
                MCA programme of SGVU-DE is designed to help students meet the increasing demand of qualified professionals in the field of Computer Science and Information Technology. It emphasizes on the application of software’s to solve scientific as well as commercial problems. The programme provides thorough and sound background in theoretical and practical application including latest trends in software development. MCA is the dynamic course designed to provide foundation for research in the core and emerging areas of the discipline.
<br/>
<ul className={styles['course-duration']}>
    <li><span className={styles['duration-title']}>Duration</span> : Minimum 3 years, 6 Semester Program & Max 6 years  </li>
    <li><span className={styles['duration-title']}>Medium</span> : English</li>
    <li><span className={styles['duration-title']}>Eligibility</span> : 10+2 or its equivalent, & Passed with min 45% in B.Sc. with Mathematics or possessing technical degree e.g. B.Tech/ BE./ BCA/ Any Master Degree in any Subject.
<br/>Person who has completed Graduate and PGDCA / BCA graduate are eligible for MCA-Lateral - ( II Year).
</li>
    <li><span className={styles['duration-title']}>Curriculum /Syllabus</span></li>
</ul>

</p>
            </div>
            <div className={styles['course-container']}>
                {SvugPGData1.map((data)=>
                <div className={styles['course-flex-container']}>
                <h3>{data.semester}</h3>
                {data.syllabus.map((d)=><li className={styles['syllabus-list']}>{d}</li>)}
                </div>
                )}
                <br/>
                <h4>2. MBA – Masters of Business Administration</h4>
                <p>The MBA programme is to provide highly skilled, well trained and employable professionals to the industry equipped with latest knowledge and technology as per the requirement of niche industry. The curriculum has been so designed to help the learners to become not only employable but also encourage them to become dynamic entrepreneur. MBA Electives provides in-depth understanding and covers national as well as global issues
                <ul className={styles['course-duration']}>
    <li><span className={styles['duration-title']}>Duration</span> : 2 years, 4 Semester Program Maximum- 4 years </li>
    <li><span className={styles['duration-title']}>Medium</span> : English</li>
    <li><span className={styles['duration-title']}>Eligibility</span> : Minimum 50% marks in Graduation or Graduation less than 50 % with 2 year of minimum experience is required

</li>
    <li><span className={styles['duration-title']}>Curriculum /Syllabus</span></li>
</ul>
</p>
                {SvguPGData2.map((data)=>
                <div className={styles['course-flex-container']}>
                <h3>{data.semester}</h3>
                {data.syllabus.map((d)=><li className={styles['syllabus-list']}>{d}</li>)}
                </div>
                )}
                {MBAElectives.map((data)=>
                <div className={styles['course-flex-container']}>
                    <h3>{data.semester}</h3>
                    {data.syllabus.map((d)=><li className={styles['syllabus-list-specialisation']}>{d}</li>)}
                </div>
                )}
            </div>
            
            

        </div>
        
        </>
    )
}

export default SvguPG;
import React,{useState} from 'react'
import './Qualification.css'

const Qualifiaction = () => {
    const [toggleState, setTogglestate] = useState(1);
    const toggleTab = (index)=>{
        setTogglestate(index);
    }
  return (
    <div className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div className={ toggleState===1? 
                "qualification__button qualificaton__active button--flex":
                 "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification-icon"></i>
                    Education
                </div>

                <div className={ toggleState===2? 
                "qualification__button qualificaton__active button--flex":
                 "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification-icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__section">
                <div className={ toggleState === 1 ? 
                "qualification__content qualification__content-active" :
                "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">
                                M.P. Memorial School Varansi
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2014-2016
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">
                                St. George's Prep School Varansi
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2016-2018
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Engineering</h3>
                            <h3 className="qualification__title">Computer Science Engineering</h3>
                            <span className="qualification__subtitle">
                                Dr.Bhim Rao Ambedkar University Agra
                            </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                2018-2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    
                </div>


                <div className={ toggleState === 2 ? 
                "qualification__content qualification__content-active" :
                "qualification__content"}>
                    <div className="qualification__data">
                        
                        
                        <div>
                            <h3 className="qualification__title">Advanced Java</h3>
                            <span className="qualification__subtitle">Softpro India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                Apirl 2020 - May 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Python with Data Science</h3>
                            <span className="qualification__subtitle">Softpro India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                March 2021 - March 2021
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        
                        
                        <div>
                            <h3 className="qualification__title">Full stack web-dev</h3>
                            <span className="qualification__subtitle">Skill-lync</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>
                                May 2023 - July 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualifiaction


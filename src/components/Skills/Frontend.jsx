import React from 'react'
import './Skills.css'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Front End Technology</h3>
        <hr/>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-html5'></i>
                </div>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                <div className="skills__data">
                    <i class='bx bxl-javascript'></i>
                </div>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                <div className="skills__data">
                    <i class='bx bxl-react' ></i>
                </div>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-css3"></i>
                </div>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                
                <div className="skills__data">
                    <i class='bx bxl-bootstrap' ></i>
                </div>
                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                <div className="skills__data">
                    <i className="bx bxl-git"></i>
                </div>
                <div>
                    <h3 className="skills__name">Git/Github</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Frontend
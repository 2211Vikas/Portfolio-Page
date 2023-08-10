import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Back End Technology</h3>
        <hr/>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bxl-java"></i>
                </div>
                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                </div>
                <div>
                    <h3 className="skills__name">MySql</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Backend
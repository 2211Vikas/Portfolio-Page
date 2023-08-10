import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about--box">
        <i className='bx bxs-award about-icon' ></i>
            <h3 className="about__title">Experiance</h3>
            <span className="about__subtitle">3 Internship</span>
        </div>
        <div className="about--box">
        <i className='bx bxs-award about-icon' ></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">Some Projects</span>
        </div>
        <div className="about--box">
        <i className='bx bx-support about-icon' ></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24*7</span>
        </div>
    </div>
  )
}

export default Info
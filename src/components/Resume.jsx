import React from 'react'
import resume from './pdf/Tanmay_Bhunia_Resume.pdf'

export default function Resume() {
  return (
    <div className="container " id="resume" data-aos="fade-up" data-aos-duration="1000" >
      <div className='heading text-center'>
        <span className="heading-1">Resume</span>
        <span className="heading-2 head-2">Resume</span>
      </div>
      <div className="row resume p-3 m-0 mt-5  ">
        <div className="col-md-6 col-12 mt-3 p-3" data-aos="fade-up" data-aos-duration="1000"  >
          <div className="resume-section">
            <span className="resume-section-head d-block mb-2 ">OBJECTIVE</span>
            <p className="resume-section-body">To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. </p>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3" data-aos="fade-up" data-aos-duration="1000" >
          <div className="resume-section">
            <span className="resume-section-head d-block mb-2 ">EDUCATION</span>
            <h2 className="resume-section-subhead">Ganpat University</h2>
            <span className="resume-text mb-3">Bachelor of technolody</span>
            <h2 className="resume-section-subhead"> Om Shanti English Medium School</h2>
            <span className="resume-text">Higher Secondary</span>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3" data-aos="fade-up" data-aos-duration="1000" >
          <div className="resume-section">
            <span className="resume-section-head d-block mb-2 ">HOOBIES</span>
            <h2 className="resume-section-subhead mb-1 mt-2">Gaming</h2>
            <span className="resume-text">Strategy,fps</span>
            <h2 className="resume-section-subhead mb-1 mt-2">Traveling</h2>
            <span className="resume-text">Group-tour</span>
            <h2 className="resume-section-subhead mb-1 mt-2">Socializing</h2>
            <span className="resume-text">Enjoy intrecting</span>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3" data-aos="fade-up" data-aos-duration="1000" >
          <div className="resume-section">
            <span className="resume-section-head d-block mb-2 ">PROFILE HIGHLIGHT</span>
            <ul>
              <li className='pb-3'><span className="resume-text">1.3+ Years Frontend Experience</span></li>
              <li className='pb-3'><span className="resume-text">React + Tailwind Developer</span></li>
              <li className='pb-3'><span className="resume-text">Performance-Focused UI Development</span></li>
              <li className='pb-3'><span className="resume-text">Figma to Code Conversion</span></li>
              <li className='pb-3'><span className="resume-text">Responsive, Mobile-First Designs</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-md-center pt-5"  data-aos="zoom-in"
     data-aos-duration="1000">
        <a href={resume}  className="btn btn-download py-3 px-3 " download>DOWNLOAD CV</a>
      </div>
    </div>
  )
}

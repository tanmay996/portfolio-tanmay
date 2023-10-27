import React from 'react'
// import svgicon from "./svgicon"
export default function Resume() {
  return (
    <div className="container" id="resume">
      <div className='heading text-center'>
        <span className="heading-1">Resume</span>
        <span className="heading-2 head-2">Resume</span>
      </div>
      <div className="row resume p-3 mt-5">
        <div className="col-md-6 col-12 mt-3 p-3">
          <div className="resume-section">
            <span className="resume-section-head">OBJECTIVE</span>
            <p className="resume-section-body">To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. </p>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3">
          <div className="resume-section">
            <span className="resume-section-head">EDUCATION</span>
            <h2 className="resume-section-subhead">Ganpat University</h2>
            <span className="resume-text">Bachelor of technolody</span>
            <h2 className="resume-section-subhead"> Om Shanti English Medium School</h2>
            <span className="resume-text">Higher Secondary</span>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3">
          <div className="resume-section">
            <span className="resume-section-head">HOOBIES</span>
            <h2 className="resume-section-subhead">Gaming</h2>
            <span className="resume-text">Strategy,fps</span>
            <h2 className="resume-section-subhead">Traveling</h2>
            <span className="resume-text">Group-tour</span>
            <h2 className="resume-section-subhead">Socializing</h2>
            <span className="resume-text">Enjoy intrecting</span>
          </div>
        </div>
        <div className="col-md-6 col-12 mt-3 p-3">
          <div className="resume-section">
            <span className="resume-section-head">PROFILE HIGHLIGHT</span>
            <ul>
              <li className='pb-3'><span className="resume-text">Making responsive website</span></li>
              <li className='pb-3'><span className="resume-text">knowledge of sql</span></li>
              <li className='pb-3'><span className="resume-text">Conversion psd to html css</span></li>
              <li className='pb-3'><span className="resume-text">Conversion psd to html css</span></li>
              <li className='pb-3'><span className="resume-text">Good uderstanding in oops concept</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-md-center p-5">
        <a href="../pdf/TanmayBhunia_Resume.pdf" className="btn btn-download py-3 px-3 " download>DOWNLOAD CV</a>
      </div>
    </div>
  )
}

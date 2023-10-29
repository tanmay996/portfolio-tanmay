import React from 'react'
export default function Footer() {
    return (
        <div className='container mt-5'>
            <div className="footer">
                <div className="row">
                    <div className="col-md">
                        <h2>About</h2>
                        <p>
                        "Frontend developer proficient in HTML, CSS, JavaScript, Bootstrap, and React JS. Committed to creating attractive, user-friendly web interfaces."
                        </p>
                    </div>
                    <div className="col-md">
                        <h2>Links</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-arrow-right me-2"></i>Home</li>
                            <li><i className="bi bi-arrow-right me-2"></i>About</li>
                            <li><i className="bi bi-arrow-right me-2"></i>Service</li>
                            <li><i className="bi bi-arrow-right me-2"></i>Projects</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h2>Services</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-arrow-right me-2"></i>Web Design</li>
                            <li><i className="bi bi-arrow-right me-2"></i>Web Development</li>
                            <li><i className="bi bi-arrow-right me-2"></i>Frontend Development</li>
                            <li><i className="bi bi-arrow-right me-2"></i>SEO</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h2>Have a Question</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-fill me-3"></i>Gujarat,India</li>
                            <li><i className="bi bi-telephone-fill me-3"></i>+91 9327283868</li>
                            <li className="d-flex"><i className="bi bi-envelope-fill me-3 "></i><span>tanmaybhunia996@gmail.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className="social mt-5">
                   <ul className="list-unstyled">
                        <li><a href='https://twitter.com/tanmay_bhunia16' target="_blank" ><span><i className="bi bi-twitter fs-4"></i></span></a></li>
                        <li><a href='https://www.facebook.com/tanmaybhuniatb' target="_blank" ><span><i className="bi bi-facebook fs-4"></i></span></a></li>
                        <li><a href='https://www.instagram.com/_tanmay.t/' target="_blank" ><span><i className="bi bi-instagram fs-4"></i></span></a></li>
                   </ul>
                </div>
                <p className='text-center'>Copyright ©2023 All rights reserved | This template is made by Tanmay bhunia</p>
               
            </div>
        </div>
    )
}

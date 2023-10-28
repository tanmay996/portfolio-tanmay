import React from 'react'
export default function Footer() {
    return (
        <div className='container mt-5'>
            <div className="footer">
                <div className="row">
                    <div className="col-md">
                        <h2>About</h2>
                        <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
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
                            <li><i className="bi bi-arrow-right me-2"></i>Frontend Developmeny</li>
                            <li><i className="bi bi-arrow-right me-2"></i>SEO</li>
                        </ul>
                    </div>
                    <div className="col-md">
                        <h2>Have a Question</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-fill me-3"></i>203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li><i className="bi bi-telephone-fill me-3"></i>+91 9327283868</li>
                            <li><i className="bi bi-envelope-fill "></i>tanmaybhunia996@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="social mt-5">
                   <ul className="list-unstyled">
                        <li><a href='#'><span><i className="bi bi-twitter fs-4"></i></span></a></li>
                        <li><a href='#'><span><i className="bi bi-facebook fs-4"></i></span></a></li>
                        <li><a href='#'><span><i className="bi bi-instagram fs-4"></i></span></a></li>
                   </ul>
                </div>
                <p className='text-center'>Copyright ©2023 All rights reserved | This template is made with  by Tanmay bhunia</p>
               
            </div>
        </div>
    )
}

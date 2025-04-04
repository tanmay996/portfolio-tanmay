import React from 'react'
import resume from './pdf/Tanmay_Bhunia_Resume.pdf'


export default function About() {
    return (

        <div className="container about" id="about" data-aos="fade-up" data-aos-duration="1000" >
            <div className="row  mx-auto">
            <div className="col-lg-5 col-md-6 d-none d-md-block">
                <div className="about-img"></div>
            </div>
            <div className="col-lg-7 col-md-6 pb-5">
                <div className='about-description '>
                    <div className='heading'>
                        <span className="heading-1">About Me</span>
                        <span className="heading-2">About</span>
                    </div>
                    <p className='heading-description'>"As a Frontend Developer with 1.3+ years of experience in building responsive and scalable web applications using React.js, Tailwind CSS, JavaScript, and Bootstrap. Adept at UI/UX design, component reusability, API integration, and performance optimization. Passionate about crafting seamless user experiences and collaborating in agile development environments."</p>
                    <table className="about-detail mb-lg-5 mb-md-2 mx-auto mx-md-0">
                        <tbody>
                            <tr>
                                <th>Name:</th>
                                <td>Tanmay Bhunia</td>
                            </tr>
                            <tr>
                                <th>Date of birth:</th>
                                <td>November 29,1999</td>
                            </tr>
                            <tr>
                                <th>Address:</th>
                                <td>Morbi,Gujarat,India</td>
                            </tr>
                            <tr>
                                <th>Zip code:</th>
                                <td>363641</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>Tanmaybhunia996@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone:</th>
                                <td>9327283868</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <a href={resume} className="btn btn-download py-3 px-3" download >DOWNLOAD CV</a>
                </div>
            </div>
        </div>
        </div>
        

    )
}

import React from 'react'


export default function About() {
    return (

        <div className="container about p-0 py-5" id="about">
            <div className="row  mx-auto mt-5">
            <div className="col-lg-5 col-md-6 d-none d-md-block">
                <div className="about-img"></div>
            </div>
            <div className="col-lg-7 col-md-6 pb-5">
                <div className='about-description '>
                    <div className='heading'>
                        <span className="heading-1">About Me</span>
                        <span className="heading-2">About</span>
                    </div>
                    <p className='heading-description'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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
                    
                    <button className="btn btn-download py-3 px-3 ">DOWNLOAD CV</button>
                </div>
            </div>
        </div>
        </div>
        

    )
}
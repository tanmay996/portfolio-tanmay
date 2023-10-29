import React from 'react'
export default function Project() {
    return (
        <>
        <div className="container" id='project'>

            <div className='heading text-center pb-3'>
                <span className="heading-1">My Projects</span>
                <span className="heading-2 head-2">Projects</span>
            </div>
        </div>
        <div className="container">
            <div className="row mt-5 ">
                <div className="col-lg-4 project-section ">
                    <div className="project project-1 d-flex justify-content-center align-items-center position-relative">
                        <h3 className="text-center position-absolute">Educational Website - <br /> 
                         EDU Meeting   </h3>
                       
                    </div>
                </div>
                <div className="col-lg-8 project-section ">
                    <a href="https://tanmay996.github.io/migration-to-canada.github.io/#1"target='_blank' className="project project-2 d-flex justify-content-center align-items-center position-relative">
                        <h3 className="text-center position-absolute">Educational Website <br /> Migration to Canada</h3>
                        <span className="live position-absolute">Live demo</span>
                    </a>
                </div>
                <div className="col-lg-8 project-section ">
                    <a href="https://tanmay996.github.io/krutionella.github.io/" target='_blank'  className="project project-3 d-flex justify-content-center align-items-center position-relative">

                        <h3 className="text-center position-absolute">Residential Project <br /> Krutionela</h3>
                        <span className="live position-absolute">Live demo</span>
                    </a>
                </div>
                <div className="col-lg-4 project-section ">
                    <div className="project project-1 d-flex justify-content-center align-items-center position-relative">

                        <h3 className="text-center position-absolute">Cattle Management</h3>
                        <span className="live position-absolute">Comming Soon</span>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

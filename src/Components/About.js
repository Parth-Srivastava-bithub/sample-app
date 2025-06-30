import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white',


        transition: '0.5s',
        borderRadius: '10px',
        padding: '10px'
    }

    return (
        <div className='container my-4' style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Our Mission
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>We strive to deliver high-quality software solutions.</strong> Our mission is to empower businesses and individuals by providing reliable, efficient, and user-friendly applications that solve real-world problems.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Our Team
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>Our team consists of passionate developers and designers.</strong> We value collaboration, creativity, and continuous learning to ensure we stay ahead in the ever-evolving tech landscape.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" style={myStyle}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Contact Us
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>We would love to hear from you!</strong> For any inquiries, feedback, or support, please reach out to us at <code>support@example.com</code> or use the contact form on our website.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

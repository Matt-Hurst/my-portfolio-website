import React from "react"
import "./certificates.css"
import certificates from "../certificates"

const Certificates = ()=> {
    return (
        <div className="certificate-page">
            <div className="title-row">
                <h1 className="title">Certificates</h1>
            </div>
                <div className="certificates"> {certificates.map( (certificate, index) => {
                    return (
                        <div className="cert" key={index}>
                            <div className="cert__img">
                                <a href={certificate.website} target="blank">
                                    <img src={certificate.img} alt={certificate.alt}/>
                                </a>
                            </div>
                            <div className="cert__text">
                                <h3 className="cert__title">{certificate.title}</h3>
                                <p className="cert__duration"><em>Content length: {certificate.length} hours</em></p>
                                <p className="cert__desc">{certificate.desc}</p>
                            </div>
                        </div>
                    )
                }
                )}

                </div>
        </div>
    )
}

export default Certificates;
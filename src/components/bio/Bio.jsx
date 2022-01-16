import React from 'react';
import './bio.css';

const Bio = ({title, text, img}) => {
    return (
        <div className="tuonela__features-container__feature">
            <div className="tuonela__features-container__feature-title">
                <div />
                <img>{img}</img>
                <h1>{title}</h1>
                </div>
                <div className="tuonela__features-container_feature-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Bio
import React from 'react'

function AnomalyMedia({ title, imgAnomali1, imgAnomali2}) {
    const styles = {
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const playerStyles = {
        backgroundImage: `url('/assets/img/media-player.png')`,
        height: '33px',
        width: '226px',
    };

    const anomalyStyles1 = {
        backgroundImage: `url('/assets/img/${imgAnomali1}')`,
        height: '144px',
        width: '391px',
    };

    const anomalyStyles2 = {
        backgroundImage: `url('/assets/img/${imgAnomali2}')`,
        height: '300px',
        width: '378px',
    };

    return (
        <div className='anomally media-output'>
            <div className='media-title'>{title} Machine Output</div>
            <div className='media-player' style={{...playerStyles, ...styles}}></div>
            <div className='anomaly-image' style={{...anomalyStyles1, ...styles}}></div>
            <div className='anomaly-image' style={{...anomalyStyles2, ...styles}}></div>
        </div>
    )
}

export default AnomalyMedia
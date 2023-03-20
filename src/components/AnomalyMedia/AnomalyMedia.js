import React from 'react'
import { AnomalyChart } from '..';


function AnomalyMedia({ title, wavUrl, type, imgAnomali1, imgAnomali2}) {
    const styles = {
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const playerStyles = {
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
        <div className='anomaly media-output'>
            <div className='media-title'>{title} Machine Output</div>
            <audio controls controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar" src={wavUrl} className='media-player' style={playerStyles}>
                Your browser does not support the audio element.
            </audio>
            {
                type === "normal" ? (
                    <div style={{marginTop: 20}}>
                        <div className='anomaly-image' style={{...anomalyStyles1, ...styles}}></div>
                        <div className='anomaly-image' style={{...anomalyStyles2, ...styles}}></div>
                    </div>
                ) : (
                    <AnomalyChart src={wavUrl} />
                )
            }
        </div>
    )
}

export default AnomalyMedia
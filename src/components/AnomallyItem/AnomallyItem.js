import React from 'react'

function AnomallyItem() {
    return (
        <div className='anomaly-item' style={{ borderColor: '#3478FC', borderWidth: '2px'}}>
            <div className='anomaly-id-container'>
                <div className='anomaly-status'>
                    <div className='anomaly-status-bullet'></div>
                </div>
                <div className='anomaly-id'>ID #00011123</div>
                <div className='anomaly-level'>Moderate</div>
            </div>
            <div className='anomaly-time'>
                <div className='anomaly-reason'>Unknown Anomally</div>
                <div className='anomaly-reason-date'>Detected at 2021-01-01 20:10:09</div>
            </div>
            <div className='anomaly-type'>CNC Machine</div>
        </div>
    )
}

export default AnomallyItem
import React from 'react'

import DateFormat from '../../helpers/DateFormat'

function AnomalyItem({anomaly, anomalySelected, setAnomalySelected, anomalyLevelList, typeList}) {
    const selected = anomalySelected?.id === anomaly.id
    const anomalyLevel = val => anomalyLevelList?.find(list => list.id === val)
    const anomalyColorLevel = val => {
        const selected = anomalyLevelList?.find(list => list.id === val)
        if(selected?.name === "Mild") return {backgroundColor: "#64fc1c"}
        if(selected?.name === "Moderate") return {backgroundColor: "#FCA034"}
        return {backgroundColor: "#fc1c1c"}
    }
    
    // green #64fc1c
    // red #fc1c1c
    return (
        <div className='anomaly-item' style={selected ? { borderColor: '#3478FC', borderWidth: '2px'} : {}} onClick={() => setAnomalySelected(anomaly)}>
            <div className='anomaly-id-container'>
                <div className='anomaly-status'>
                {   !anomaly?.seenStatus &&
                    <div className='anomaly-status-bullet'></div>
                }
                </div>
                <div className='anomaly-id'>ID #{anomaly?.id}</div>
                <div className='anomaly-level' style={anomalyColorLevel(anomaly?.anomalyLevel)}>{anomalyLevel(anomaly?.anomalyLevel)?.name}</div>
            </div>
            <div className='anomaly-time'>
                <div className='anomaly-reason'>{anomaly?.anomalyReason || "Unknown Anomaly"}</div>
                <div className='anomaly-reason-date'>Detected at {DateFormat(anomaly?.timestamp)}</div>
            </div>
            <div className='anomaly-type'>{typeList.find(type => type.id === anomaly?.machineType)?.name}</div>
        </div>
    )
}

export default AnomalyItem
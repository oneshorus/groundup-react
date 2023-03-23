import React from 'react'

import DateFormat from '../../helpers/DateFormat'
import {Color} from '../../helpers/Config'

function AnomalyItem({anomaly, anomalySelected, setAnomalySelected, anomalyReasonList, anomalyLevelList, typeList}) {
    const selected = anomalySelected?.id === anomaly.id
    const anomalyReason = val => anomalyReasonList?.find(list => list.id === val)
    const anomalyLevel = val => anomalyLevelList?.find(list => list.id === val)
    const anomalyColorLevel = val => {
        const selected = anomalyLevelList?.find(list => list.id === val)
        if(selected?.name === "Mild") return {backgroundColor: Color.Mild}
        if(selected?.name === "Moderate") return {backgroundColor: Color.Moderate}
        return {backgroundColor: Color.Severe}
    }
    
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
                <div className='anomaly-reason'>{anomalyReason(anomaly?.anomalyReason)?.reason || "Unknown Anomaly"}</div>
                <div className='anomaly-reason-date'>Detected at {DateFormat(anomaly?.timestamp)}</div>
            </div>
            <div className='anomaly-type'>{typeList.find(type => type.id === anomaly?.machineType)?.name}</div>
        </div>
    )
}

export default AnomalyItem
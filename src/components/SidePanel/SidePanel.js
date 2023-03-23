import React from 'react'

import { ArrowLeft } from '@mui/icons-material';
import LinearProgress from '@mui/material/LinearProgress';

import {AnomalyItem} from "../index";

function SidePanel(props) {
    const dataToShow = () => {
        if (props?.filterType) return props?.anomalyList.filter(anomaly => anomaly.machineType === props?.filterType)
        return props?.anomalyList
    }
    const totalAnomaly = dataToShow().length
    const unSeenAnomaly = dataToShow().filter(anomaly => !anomaly.seenStatus).length

    return (
        <div className='side-panel' style={props?.borderStyle}>
            <div className='back'>
                <ArrowLeft /> Back
            </div>
            <div className='button-filter'>
                <div>{totalAnomaly} Alerts</div>
                <div className='alert-new'>{unSeenAnomaly} New</div>
            </div>
            <div className='data-list'>
                {
                    props?.listLoading ? (
                        <div className='side-panel' style={props?.borderStyle}>
                            <LinearProgress />
                        </div>
                    ) :
                    dataToShow().map((anomaly, idx) => (
                        <AnomalyItem 
                            key={idx} 
                            anomaly={anomaly} 
                            anomalySelected={props?.anomalySelected} 
                            setAnomalySelected={props?.setAnomalySelected} 
                            anomalyReasonList={props?.reasonList} 
                            anomalyLevelList={props?.anomalyLevelList} 
                            typeList={props?.typeList} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default SidePanel


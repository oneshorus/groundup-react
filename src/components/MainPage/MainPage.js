import React from 'react'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {AnomalyMedia} from "../index";
import DateFormat from '../../helpers/DateFormat'

function MainPage(props) {
    const date = new Date(props.anomalySelected?.timestamp);
    const timestamp = date.getTime() / 1000;

    const defaultWavUrl = 'http://localhost:8080/media/default/' + props.anomalySelected?.machineTypeId;
    const currentWavUrl = 'http://localhost:8080/media/' + props.anomalySelected?.sensorId + '/' + timestamp;

    return (
        <div className='main-page'>
            <div className='title-page'>
                <div className='title-id'>Alert ID #{props.anomalySelected?.id}</div>
                <div className='title-date'>Detected at {DateFormat(props.anomalySelected?.timestamp)}</div>
            </div>
            <div className='media-page'>
                <AnomalyMedia title = "Anomaly" wavUrl={currentWavUrl} imgAnomali1 = "anomaly-1.png" imgAnomali2 = "anomaly-2.png" />
                <AnomalyMedia title = "Normal" wavUrl={defaultWavUrl} imgAnomali1 = "normal-1.png" imgAnomali2 = "normal-2.png" />
            </div>
            <div className='form-page'>
                <div className='row-title'>Equipment</div>
                <div className='row-input'>{props?.anomalySelected?.machineType}</div>

                <div className='row-title'>Suspected Reason</div>
                <Select
                    value={props.reason}
                    defaultValue={0}
                    style={{ height: 30, minWidth: 250}}
                    onChange={e => console.log(e)}
                    >
                    <MenuItem value={0}>Unknown Anomaly</MenuItem>
                    { 
                        props?.reasonList.filter(dt => props?.anomalySelected?.machineTypeId === dt.machineType)
                            .map(dt => <MenuItem value={dt?.id} key={dt?.id}>{dt?.reason}</MenuItem>)
                    }
                </Select>

                <div className='row-title'>Action Required</div>
                <Select
                    value={props.action}
                    defaultValue={0}
                    style={{ height: 30, minWidth: 250}}
                    onChange={e => console.log(e)}
                    >
                    <MenuItem value={0}>Select Action</MenuItem>
                    {props.actionList.map(dt => <MenuItem value={dt?.id} key={dt?.id}>{dt?.name}</MenuItem>)}
                </Select>

                <div className='row-title'>Comments</div>
                <TextField multiline rows={3} fullWidth={true} />
                
                <Button variant="contained" style={{ marginTop: '35px' }}>UPDATE</Button>
            </div>
        </div>
    )
}

export default MainPage
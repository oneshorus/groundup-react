import React from 'react'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {AnomalyMedia} from "../index";
import DateFormat from '../../helpers/DateFormat'
import { API_BASE_URL } from '../../helpers/Config';

function MainPage(props) {
    const date = new Date(props?.anomalySelected?.timestamp);
    const timestamp = date.getTime() / 1000;

    const defaultWavUrl = API_BASE_URL + '/media/default/' + props?.anomalySelected?.machineTypeId;
    const currentWavUrl = API_BASE_URL + '/media/' + props?.anomalySelected?.sensorId + '/' + timestamp;

    return (
        <div className='main-page'>
            <div className='title-page'>
                <div className='title-id'>Alert ID #{props?.anomalySelected?.id}</div>
                <div className='title-date'>Detected at {DateFormat(props?.anomalySelected?.timestamp)}</div>
            </div>
            <div className='media-page'>
                <AnomalyMedia title = "Anomaly" wavUrl={currentWavUrl} type="anomaly" />
                <AnomalyMedia title = "Normal" wavUrl={defaultWavUrl} type="normal" imgAnomali1 = "normal-1.png" imgAnomali2 = "normal-2.png" />
            </div>
            <div className='form-page'>
                <div className='row-title'>Equipment</div>
                <div className='row-input'>{props?.anomalySelected?.machineType}</div>

                <div className='row-title'>Suspected Reason</div>
                <Select
                    value={props?.reason}
                    defaultValue={0}
                    style={{ height: 30, minWidth: 250}}
                    onChange={e => props?.setReason(e.target.value)}
                    >
                    <MenuItem value={0}>Unknown Anomaly</MenuItem>
                    { 
                        props?.reasonList.filter(dt => props?.anomalySelected?.machineTypeId === dt.machineType)
                            .map(dt => <MenuItem value={dt?.id} key={dt?.id}>{dt?.reason}</MenuItem>)
                    }
                </Select>

                <div className='row-title'>Action Required</div>
                <Select
                    value={props?.action}
                    defaultValue={0}
                    style={{ height: 30, minWidth: 250}}
                    onChange={e => props?.setAction(e.target.value)}
                    >
                    <MenuItem value={0}>Select Action</MenuItem>
                    {props?.actionList.map(dt => <MenuItem value={dt?.id} key={dt?.id}>{dt?.name}</MenuItem>)}
                </Select>

                <div className='row-title'>Comments</div>
                <TextField multiline rows={3} value={props?.comment} fullWidth={true} onChange={e => props?.setComment(e.target.value)} />
                
                <Button variant="contained" style={{ marginTop: '35px' }} onClick={props?.updateHandler}>UPDATE</Button>
            </div>
        </div>
    )
}

export default MainPage
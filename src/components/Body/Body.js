import React from 'react'

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { ArrowLeft } from '@mui/icons-material';

import {AnomallyItem, AnomalyMedia} from "../index";

import "./Body.css"

function Body() {
    const [type, setType] = React.useState(1);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div className='body'>
            <div className='container'>
                <div className='filter'>
                <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={type}
                        style={{ height: 30, marginLeft: 7}}
                        onChange={handleChange}
                        >
                        <MenuItem value={1}>CNC Machine</MenuItem>
                        <MenuItem value={2}>Milling Machine</MenuItem>
                    </Select>
                </FormControl>
                </div>
                <div className='main-content'>
                    <div className='side-panel'>
                        <div className='back'>
                            <ArrowLeft /> Back
                        </div>
                        <div className='button-filter'>
                            <div>6 Alerts</div>
                            <div className='alert-new'>2 New</div>
                        </div>
                        <div className='data-list'>
                            <AnomallyItem />
                            <AnomallyItem />
                            <AnomallyItem />
                        </div>
                    </div>
                    <div className='main-page'>
                        <div className='title-page'>
                            <div className='title-id'>Alert ID #00013211</div>
                            <div className='title-date'>Detected at 2021-04-22 20:10:04</div>
                        </div>
                        <div className='media-page'>
                            <AnomalyMedia title = "Anomaly" imgAnomali1 = "anomaly-1.png" imgAnomali2 = "anomaly-2.png" />
                            <AnomalyMedia title = "Normal" imgAnomali1 = "normal-1.png" imgAnomali2 = "normal-2.png" />
                        </div>
                        <div className='form-page'>
                            <div className='row-title'>Equipment</div>
                            <div className='row-input'>CNC Machine</div>

                            <div className='row-title'>Suspected Reason</div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={type}
                                    style={{ height: 30}}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={1}>CNC Machine</MenuItem>
                                    <MenuItem value={2}>Milling Machine</MenuItem>
                                </Select>
                            </FormControl>

                            <div className='row-title'>Action Required</div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={type}
                                    style={{ height: 30}}
                                    onChange={handleChange}
                                    >
                                    <MenuItem value={1}>CNC Machine</MenuItem>
                                    <MenuItem value={2}>Milling Machine</MenuItem>
                                </Select>
                            </FormControl>

                            <div className='row-title'>Comments</div>
                            <TextField multiline rows={3} fullWidth={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
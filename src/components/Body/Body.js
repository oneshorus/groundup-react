import React, { useState, useEffect } from 'react'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {MainPage, SidePanel} from "../index";
import { getListAction, getListAnomalyReason, getListMachineType, getListAnomaly, getListAnomalyLevel, getAnomalyDetail} from "../../helpers/Api"
import AlertMessage from "../../helpers/AlertMessage"

import "./Body.css"

function Body() {
    const [filterType, setFilterType] = useState();
    const [typeList, setTypeList] = useState([]);

    const [reason, setReason] = useState();
    const [reasonList, setReasonList] = useState([]);

    const [action, setAction] = useState();
    const [actionList, setActionList] = useState([]);

    const [anomalyLevelList, setAnomalyLevelList] = useState([]);
    const [anomalyList, setAnomalyList] = useState([]);
    const [anomalySelected, setAnomalySelected] = useState({});

    const [error, setError] = useState({status: false, message: ''});

    const throwError = () => setError({status: true, message: 'Failed to fetch some data! Please refresh the page!'})

    const borderStyle = !anomalySelected?.id ? {borderRight: '1px solid #A2AEBC'} : {}

    const getAnomalySelected = anomaly => {
        // get anomali detail
        getAnomalyDetail(anomaly?.id)
          .then(response => {
            if(response?.data?.status === "success"){
                console.log(response?.data?.data)
                setAnomalySelected(response?.data?.data)
            } else throwError()
          })
          .catch(error => throwError());
    }

    useEffect(() => {
        // get drowpdown machine type
        getListMachineType()
          .then(response => {
            if(response?.data?.status === "success"){
                setTypeList(response?.data?.data)
            } else throwError()
          })
          .catch(error => throwError());

        // get drowpdown reason
        getListAnomalyReason()
        .then(response => {
          if(response?.data?.status === "success"){
                setReasonList(response?.data?.data)
          } else throwError()
        })
        .catch(error => throwError());

        // get drowpdown action
        getListAction()
          .then(response => {
            if(response?.data?.status === "success"){
                setActionList(response?.data?.data)
            } else throwError()
          })
          .catch(error => throwError());

        // get list anomaly level
        getListAnomalyLevel()
        .then(response => {
            if(response?.data?.status === "success"){
                setAnomalyLevelList(response?.data?.data)
            } else throwError()
        })
        .catch(error => throwError());

        // get list anomaly
        getListAnomaly()
        .then(response => {
            if(response?.data?.status === "success"){
                setAnomalyList(response?.data?.data)
            } else throwError()
        })
        .catch(error => throwError());
      }, []);

    return (
        <div className='body'>
            {/* Error Handler */}
            { error?.status && <AlertMessage message={error?.message}/> }

            <div className='container'>
                <div className='filter'>
                    <Select
                        // value={filterType}
                        defaultValue={0}
                        style={{ height: 30, marginLeft: 16, minWidth: 170}}
                        onChange={e => setFilterType(e.target.value)}
                    >
                        <MenuItem value={0}>All Machine</MenuItem>
                        {typeList.map(dt => <MenuItem value={dt?.id} key={dt?.id}>{dt?.name}</MenuItem>)}
                    </Select>
                </div>
                <div className='main-content'>
                    <SidePanel filterType={filterType} anomalyLevelList={anomalyLevelList} anomalyList={anomalyList} typeList={typeList} anomalySelected={anomalySelected} setAnomalySelected={getAnomalySelected} borderStyle={borderStyle} />
                    {   anomalySelected?.id &&
                        <MainPage anomalySelected={anomalySelected} reason={reason} setReason={setReason} reasonList={reasonList} action={action} setAction={setAction} actionList={actionList} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;
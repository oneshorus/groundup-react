import React, { useState, useEffect } from 'react'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {MainPage, SidePanel} from "../index";
import { getListAction, getListAnomalyReason, getListMachineType, getListAnomaly, getListAnomalyLevel, getAnomalyDetail, updateAnomaly} from "../../helpers/Api"
import AlertMessage from "../../helpers/AlertMessage"

import "./Body.css"

function Body() {
    const [filterType, setFilterType] = useState();
    const [typeList, setTypeList] = useState([]);
    
    const [comment, setComment] = useState('');

    const [reason, setReason] = useState();
    const [reasonList, setReasonList] = useState([]);

    const [action, setAction] = useState();
    const [actionList, setActionList] = useState([]);

    const [anomalyLevelList, setAnomalyLevelList] = useState([]);
    const [anomalyList, setAnomalyList] = useState([]);
    const [anomalySelected, setAnomalySelected] = useState({});

    const [error, setError] = useState({status: false, message: ''});
    const [idTimeout, setIdTimeout] = useState();

    const throwError = () => {
        setError({status: true, message: 'Failed to fetch some data! Please refresh the page!'})
        resetError()
    }
    const throwUpdateError = () => {
        setError({status: true, message: 'Failed save data!'})
        resetError()
    }

    const borderStyle = !anomalySelected?.id ? {borderRight: '1px solid #A2AEBC'} : {}

    const resetError = () => {
        if(idTimeout) clearTimeout(idTimeout)
        
        const id = setTimeout(() => {
            setError({status: false, message: ''})
        }, 5000);
        setIdTimeout(id)
    }

    const updateHandler = () => {
        const dataUpdate = {
            ...anomalySelected,
            action: action,
            anomalyReason: reason,
            comment: comment
        }

        // update anomaly
        updateAnomaly(anomalySelected?.id, dataUpdate)
          .then(response => {

            if(response?.data?.status === "success"){
                // re-load loadListAnomaly
                loadListAnomaly();
                // re-fetch anomaly detail
                getAnomalySelected(response?.data);
            } else throwUpdateError()
          })
          .catch(error => throwUpdateError())
    }

    const getAnomalySelected = anomaly => {
        // get anomali detail
        getAnomalyDetail(anomaly?.id)
          .then(response => {
            if(response?.data?.status === "success"){
                const dataSelected = response?.data?.data
                setAnomalySelected(dataSelected)

                setComment(dataSelected?.comment || '')
                setReason(dataSelected?.anomalyReason || 0)
                setAction(dataSelected?.action || 0)
            } else throwError()
          })
          .catch(error => throwError());
    }

    const loadListAnomaly = () => {
        // get list anomaly
        getListAnomaly()
        .then(response => {
            if(response?.data?.status === "success"){
                setAnomalyList(response?.data?.data)
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

        loadListAnomaly();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className='body'>
            {/* Error Handler */}
            { error?.status && <AlertMessage message={error?.message} status={error?.status} /> }

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
                    <SidePanel filterType={filterType} anomalyLevelList={anomalyLevelList} anomalyList={anomalyList} reasonList={reasonList} typeList={typeList} anomalySelected={anomalySelected} setAnomalySelected={getAnomalySelected} borderStyle={borderStyle} />
                    {   anomalySelected?.id &&
                        <MainPage anomalySelected={anomalySelected} reason={reason} setReason={setReason} reasonList={reasonList} action={action} setAction={setAction} actionList={actionList} comment={comment} setComment={setComment} updateHandler={updateHandler} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;
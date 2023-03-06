import React, { useState } from 'react'
import { CatererComp } from './components/CatererComp/CatererComp'
import Box from "@mui/material/Box";
import { CatererDetails } from './components/CatererDetails/CatererDetails';
import { NewCatererRequest } from './components/NewCatererRequest/NewCatererRequest';
import { CatererRequestDetail } from './components/CatererRequestDetail/CatererRequestDetail';
import CatererContext from '../../contexts/CatererContext/CatererContext';

export const Caterer = () => {
  const [catererContextState, setCatererContextState] = useState({
    isShownCatererDetial:false,
    isShownNewCatererRequest:false,
    isShownCatererRequestDetail:false,
  })
  
  const [selectedRowData, setSelectedRowData] = useState('')
  const [selectedRequestData, setSelectedRequestData] = useState('')

  const openCatererDetail = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:true})
  const closeCatererDetail = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:false})

  const openNewCatererRequest = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:false,isShownNewCatererRequest:true})
  const closeNewCatererRequest = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:false,isShownNewCatererRequest:false})

  const openCatererRequestDetail = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:false,isShownCatererRequestDetail:true,isShownNewCatererRequest:false})
  const closeCatererRequestDetail = ()=> setCatererContextState({...catererContextState,isShownCatererDetial:false,isShownNewCatererRequest:true,isShownCatererRequestDetail:false})

  const selectRow = (newdata)=> setSelectedRowData(newdata)

  const selectRequest = (newdata)=> setSelectedRequestData(newdata)
  
  return (
    <div>
      <CatererContext.Provider value={{state:{...catererContextState,selectedRowData,selectedRequestData},openCatererDetail,closeCatererDetail,openNewCatererRequest,closeNewCatererRequest,openCatererRequestDetail,closeCatererRequestDetail,selectRow,selectRequest}}>
        <Box>
            <CatererComp/>
        </Box>
      </CatererContext.Provider>
        {/* <Box>
            <CatererDetails/>
        </Box> */}

        {/* <Box>
          <NewCatererRequest/>
        </Box> */}

        {/* <Box>
          <CatererRequestDetail/>
        </Box> */}
    </div>
  )
}

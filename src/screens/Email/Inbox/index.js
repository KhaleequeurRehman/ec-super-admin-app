import React, { useEffect, useMemo, useRef, useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import MessageUserInfoCard from '../MessageUserInfoCard';
import TextInputField from '../../../components/TextInputField';
import CustomTextarea from '../../../components/CustomTextarea';
import { useGetAllInboxEmailsMutation, useGetInboxEmailsQuery, useGetUpdateEmailstatusMutation } from '../../../api/email';
import { CircularProgress } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AlarmIcon from '@mui/icons-material/Alarm';
import moment from 'moment';
// import JoditEditor from 'jodit-react';

const Inbox = () => {

    const [updateEmailStatus, respdata] = useGetUpdateEmailstatusMutation()

    // const {data,isLoading,refetch,isSuccess} = useGetInboxEmailsQuery()

    const [showTextarea, setShowTextarea] = useState(false);
    const [email, setEmail] = useState("");
    // const [allInboxEmailListData, setAllInboxEmailListData] = useState(data || []);
    const [allInboxEmailListData, setAllInboxEmailListData] = useState([]);

    //  const [getInboxEmails, respdata] = useGetInboxEmailsQuery()
     const [getInboxEmails, resdata] = useGetAllInboxEmailsMutation()
   
    //  const editor = useRef(null);
    //  const [content, setContent] = useState('');

    //  const config = {
    //     readonly: false, // all options from https://xdsoft.net/jodit/doc/,
    //     placeholder: 'Start typings...'
    // }


    const MessageUserInfoCardArr = [
        {
            imageSrc:"assets/images/userWithiMacIconOrange.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"Yesterday", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconPurple.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconBlue.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconGray.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconGreen.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconYellow.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
        {
            imageSrc:"assets/images/userWithiMacIconOrange.png", 
            name:"Bank Syaiba", 
            email:"<Bank@Syaiba.com>", 
            duartion:"2 Day ago", 
            description:"I don’t know the function of this page, can you help ..."
        },
    ]

    const moreEditTextIconsArr = [
        {
            imageSrc:"assets/moreEditTextIcons/textAlignLeft.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textAlignCenter.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textItalicIcon.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textAlignRight.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textIcon.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textBoldIcon.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/textUnderlineIcon.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/pharagraphSpacingIcon.png",
          },
          {
            imageSrc:"assets/moreEditTextIcons/linkIcon.png",
          },
    ]


    
//   useEffect(() => {
//     if(isSuccess === true){
//         setAllInboxEmailListData(data || [])
//     }
//     if(refetchFlag === true){
//       refetch()
//       setAllInboxEmailListData(data || [])
//     }
//   }, [refetchFlag,isSuccess])

//   useEffect(() => {
//     if(isSuccess === true){
//         setAllInboxEmailListData(data?.data || [])
//     }
//   }, [isSuccess])

const getInboxEmailsList = ()=> {
    getInboxEmails({ page:1, size:10 }).then((res) => {
      if (res.data){
        console.log("res.data getCustomersList ", res?.data);
        setAllInboxEmailListData(res?.data)
      }
    });
  }


  const updateEmailStatusFunc = (id,status)=> {
    updateEmailStatus({ id:id, status:status }).then((res) => {
      if (res.data){
        console.log("res.data updateEmailStatusFunc ", res?.data);
        getInboxEmailsList()
      }
    });
  }


  useEffect(() => {
    getInboxEmailsList()
  }, [])

    // console.log("getInboxEmailsResponseData => ",data)
    // console.log("allInboxEmailListData => ",allInboxEmailListData?.data)
    console.log("allInboxEmailListData => ",allInboxEmailListData)

  return (
    <>
     {
        resdata?.isLoading ? (
        <Box sx={{minHeight:"30vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress color="greenclr"/>
        </Box>
        ) 
        : 
        <>
        <Grid container gap={1} sx={{justifyContent:"space-between",minHeight:"85vh"}}>
            {/* <Grid item xs={5} sm={5}>
                {
                    MessageUserInfoCardArr && MessageUserInfoCardArr.map((currItem,index)=> (
                            index===0? (
                                <Box sx={{mb:"15px"}} key={index}>
                                    <MessageUserInfoCard 
                                    imageSrc={currItem?.imageSrc} 
                                    name={currItem?.name} 
                                    email={currItem?.email} 
                                    duartion={currItem?.duartion} 
                                    description={currItem?.description}
                                    durationSx={{color:"#9EA3AE"}}
                                    />
                                </Box>
                            ): 
                            (
                                <Box sx={{mb:"15px"}} key={index}>
                                    <MessageUserInfoCard 
                                    imageSrc={currItem?.imageSrc} 
                                    name={currItem?.name} 
                                    email={currItem?.email} 
                                    duartion={currItem?.duartion} 
                                    description={currItem?.description}
                                    cardSx={{borderColor:"#559A95"}}
                                    />
                                </Box>
                            )
                    ))
                }
            </Grid> */}
            <Grid item xs={5} sm={5}>
                {
                    Array.isArray(allInboxEmailListData?.data) && allInboxEmailListData?.data?.length>0?  allInboxEmailListData?.data?.map((item,index)=> (
                        <Box sx={{mb:"15px"}} key={index}>
                            <MessageUserInfoCard 
                            imageSrc={`${item?.image !== undefined ? item?.image : "assets/images/userWithiMacIconOrange.png"}`} 
                            name={item?.from} 
                            email={item?.to} 
                            duartion={`${item?.createdAt? moment(item?.createdAt).format('ll'): 'no data'}`} 
                            description={item?.description}
                            durationSx={{color:"#9EA3AE"}}
                            // hasIconBox={false}
                            status={item?.status}
                            updateEmailStatusFunc={updateEmailStatusFunc}
                            data={item}
                            />
                            {/* <MessageUserInfoCard 
                            imageSrc={`${item?.image !== undefined ? item?.image : "assets/images/userWithiMacIconOrange.png"}`} 
                            name={item?.from} 
                            email={item?.to} 
                            duartion={`${item?.createdAt? moment(item?.createdAt).format('ll'): 'no data'}`} 
                            description={item?.description}
                            durationSx={{color:"#9EA3AE"}}
                            status={item?.status}
                            /> */}
                        </Box>
                    ))
                    : "no data"
                    
                    // resdata?.isSuccess ? (
                    // // MessageUserInfoCardArr.map((currItem,index)=> (
                    //     // !isLoading &&  data && data?.data.map((currItem,index)=> (
                    //         Array.isArray(allInboxEmailListData?.data) && allInboxEmailListData?.data?.length>0 && allInboxEmailListData?.data.map((currItem,index)=> (
                    //         index===0? (
                    //             <Box sx={{mb:"15px"}} key={index}>
                    //                 <MessageUserInfoCard 
                    //                 imageSrc={`${currItem?.image !== undefined ? currItem?.image : "assets/images/userWithiMacIconOrange.png"}`} 
                    //                 name={currItem?.from} 
                    //                 email={currItem?.to} 
                    //                 duartion={`${currItem?.createdAt? moment(data?.createdAt).format('ll'): 'no data'}`} 
                    //                 description={currItem?.description}
                    //                 durationSx={{color:"#9EA3AE"}}
                    //                 />
                    //             </Box>
                    //         ): 
                    //         (
                    //             <Box sx={{mb:"15px"}} key={index}>
                    //                 <MessageUserInfoCard 
                    //                 imageSrc={`${currItem?.image !== undefined ? currItem?.image : "assets/images/userWithiMacIconOrange.png"}`} 
                    //                 name={currItem?.from} 
                    //                 email={currItem?.to} 
                    //                 duartion={`${currItem?.createdAt? moment(data?.createdAt).format('ll'): 'no data'}`} 
                    //                 description={currItem?.description}
                    //                 durationSx={{color:"#9EA3AE"}}
                    //                 />
                    //                 {/* <MessageUserInfoCard 
                    //                 imageSrc={currItem?.imageSrc} 
                    //                 name={currItem?.name} 
                    //                 email={currItem?.email} 
                    //                 duartion={currItem?.duartion} 
                    //                 description={currItem?.description}
                    //                 cardSx={{borderColor:"#559A95"}}
                    //                 /> */}
                    //             </Box>
                    //         )
                    // ))

                    // )
                    // :
                    // "no data"
                }
            </Grid>
            <Grid item xs={6.3} sm={6.6} sx={{border:"1px solid #e1e1e6",borderRadius:"8px"}}>
                <Box sx={{mb:"15px",display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
                    <Box>
                        <MessageUserInfoCard 
                        imageSrc="assets/images/userWithiMacIconRed.png" 
                        name="Chef Juna Food" 
                        email="<Bank@Syaiba.com>" 
                        duartion="10 : 01 Am ( 4 hours ago )" 
                        durationSx={{color:"#9EA3AE"}}
                        // hasIconBox={false}
                        />
                    </Box>
                    <Box sx={{p:"3px 5px"}}>
                        {
                            showTextarea && (
                                <CustomTextarea
                                multiline
                                rows={4}
                                placeholder="Type some message"
                                />
                            )
                        }
                            {/* <JoditEditor
                                ref={editor}
                                value={content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => {}}
                            /> */}
                        
                        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}}>
                            {
                                showTextarea? <>
                                <Box sx={{display:"flex",alignItems:"center",mr:"20px",p:"10px",mb:"15px"}}>
                                    {
                                    moreEditTextIconsArr && moreEditTextIconsArr.map((item,index)=> (
                                        <Box sx={{width:"16px",height:"16px",mx:"5px",my:"3px"}} key={index}>
                                            <img src={item.imageSrc} alt="moreIcon"
                                            style={{width:"100%",height:"100%"}} 
                                            />
                                        </Box>
                                    ))
                                    }
                                </Box>
                                </> : <>
                                <Box sx={{width:"32px",height:"32px",border:"1px solid #F6F6F6",mr:"5px",borderRadius:"50%",p:"4px"}}>
                                    <AddIcon sx={{color:"#2B817B",fontSize:"24px"}} onClick={()=> setShowTextarea(true)}/>
                                </Box>
                                <Box sx={{flexGrow:1}}>
                                    <TextInputField 
                                    name='message' 
                                    value={email} 
                                    onChangeHandler={(e)=> setEmail(e.target.value)} 
                                    placeholder='Type some message'
                                    />
                                </Box>
                                </>
                            }
                            <Box sx={{ml:"10px"}}>
                                <Button variant="contained" disableRipple sx={{borderColor:"unset",bgcolor:"#2B817B",fontWeight:"500",fontSize:"14px",minWidth:"auto",'&:hover':{bgcolor:"#2B817B",borderColor:"unset"}}} endIcon={<img src="assets/images/messageSendIcon.svg" alt="messageSendIcon"  style={{width:"auto",height:"auto"}}/>}  onClick={()=> setShowTextarea(false)}>Send</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </>
        }
        {/* Inbox */}
    </>
  )
}

export default Inbox



import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import AlarmIcon from '@mui/icons-material/Alarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SyncIcon from '@mui/icons-material/Sync';
import { MdLabelImportant,MdLabelImportantOutline } from "react-icons/md";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const MessageUserInfoCard = ({imageSrc,name,email,duartion,description,nameSx,emailSx,durationSx,descriptionSx,cardSx,status,updateEmailStatusFunc,data,hasIconBox=true,hasIconBoxForTrash=false}) => {

    const [isShownStarredIcon, setIsShownStarredIcon] = useState(false);
    const [isShownImportantIcon, setIsShownImportantIcon] = useState(false);
    const [isShownTrashIcon, setIsShownTrashIcon] = useState(false);
    const [isShownSyncIcon, setIsShownSyncIcon] = useState(false);

    const switchStarredIconHandler = () => {
        // setIsShownStarredIcon(!isShownStarredIcon)
    }

    const switchImportantIconHandler = () => {
        // setIsShownImportantIcon(!isShownImportantIcon)
    }

    const switchTrashIconHandler = () => {
        // setIsShownTrashIcon(!isShownTrashIcon)
    }

    useEffect(() => {
      setIsShownImportantIcon(status)
      setIsShownStarredIcon(status)
      setIsShownTrashIcon(status)
      setIsShownSyncIcon(status)
    }, [])
    


  return (
    <>
        <Box sx={{border:"1px solid #E1E1E6",p:"16px",borderRadius:"6px",...cardSx}}>
            {/* {
            hasIconBox && 
                (
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"end"}}>

                    {
                        isShownImportantIcon ? 
                        <IconButton onClick={switchImportantIconHandler}>
                            <MdLabelImportant style={{fontSize:"18px"}}/>
                        </IconButton>
                        : 
                        <IconButton onClick={switchImportantIconHandler}>
                            <MdLabelImportantOutline style={{fontSize:"18px"}}/>
                        </IconButton>
                    }

                    {
                        isShownStarredIcon ? 
                        <IconButton onClick={switchStarredIconHandler}>
                            <FavoriteIcon sx={{fontSize:"18px"}} />
                        </IconButton>
                        : 
                        <IconButton onClick={switchStarredIconHandler}>
                            <FavoriteBorderIcon sx={{fontSize:"18px"}} />
                        </IconButton>
                    }
                </Box>
                )
            } */}
            <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                <Box sx={{display:"flex",flexWrap:"wrap",my:"5px"}}>
                    <Box sx={{width:"40px",height:"40px",borderRadius:"50%"}}>
                        <img src={imageSrc && imageSrc} alt="userIcon" style={{width:"100%",height:"100%"}} />
                    </Box>
                    <Box sx={{ml:{xs:"5px",sm:"15px"}}}>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"},fontWeight:"500",color:"#1A1824",...nameSx}}>{name && name}</Typography>
                        <Typography sx={{fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#9EA3AE",...emailSx}}>{email && email}</Typography>
                    </Box>
                </Box>
                <Box sx={{my:"5px"}}>
                    <Typography sx={{fontSize:{xs:"10px",md:"12px"},fontWeight:"400",color:"#2B817B",...durationSx}}>{duartion && duartion}</Typography>
                    {
                        hasIconBox && 
                        (
                        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}}>

                            {
                                // isShownImportantIcon ? 
                                (isShownImportantIcon !== "undefined" && isShownImportantIcon === "important") ?
                                // <IconButton onClick={switchImportantIconHandler}>
                                <IconButton  onClick={()=> updateEmailStatusFunc(data?._id,"inbox")}>
                                    <MdLabelImportant style={{fontSize:"18px"}}/>
                                </IconButton>
                                : 
                                // <IconButton onClick={switchImportantIconHandler}>
                                <IconButton  onClick={()=> updateEmailStatusFunc(data?._id,"important")}>
                                    <MdLabelImportantOutline style={{fontSize:"18px"}}/>
                                </IconButton>
                            }

                            {
                                // isShownStarredIcon ? 
                                (isShownStarredIcon !== "undefined" && isShownStarredIcon === "starred") ?
                                // <IconButton onClick={switchStarredIconHandler}>
                                <IconButton  onClick={()=> updateEmailStatusFunc(data?._id,"inbox")}>
                                    <StarIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                                : 
                                // <IconButton onClick={switchStarredIconHandler}>
                                <IconButton onClick={()=> updateEmailStatusFunc(data?._id,"starred")}>
                                    <StarBorderIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                            }

                            {
                                // isShownTrashIcon ? 
                                (isShownTrashIcon !== "undefined" && isShownTrashIcon === "trash") ?
                                // <IconButton onClick={switchTrashIconHandler}>
                                <IconButton onClick={()=> updateEmailStatusFunc(data?._id,"inbox")}>
                                    <DeleteIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                                : 
                                // <IconButton onClick={switchTrashIconHandler}>
                                <IconButton onClick={()=> updateEmailStatusFunc(data?._id,"trash")}>
                                    <DeleteOutlineIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                            }
                            {/* {
                                (status !== "undefined" && status === "important") ? 
                                <IconButton onClick={switchImportantIconHandler}>
                                    <MdLabelImportant style={{fontSize:"18px"}}/>
                                </IconButton>
                                : 
                                <IconButton onClick={switchImportantIconHandler}>
                                    <MdLabelImportantOutline style={{fontSize:"18px"}}/>
                                </IconButton>
                            }

                            {
                                (status !== "undefined" && status === "starred") ? 
                                <IconButton onClick={switchStarredIconHandler}>
                                    <StarIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                                : 
                                <IconButton onClick={switchStarredIconHandler}>
                                    <StarBorderIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                            }

                            {
                                (status !== "undefined" && status === "trash") ? 
                                <IconButton onClick={switchTrashIconHandler}>
                                    <DeleteIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                                : 
                                <IconButton onClick={switchTrashIconHandler}>
                                    <DeleteOutlineIcon sx={{fontSize:"18px"}} />
                                </IconButton>
                            } */}


                        </Box>
                        )
                    }

                    {
                        hasIconBoxForTrash && 
                        (
                        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"flex-end"}}>

                            {
                                (isShownSyncIcon !== "undefined" && isShownSyncIcon === "trash") ?
                                    <IconButton onClick={()=> updateEmailStatusFunc(data?._id,"inbox")}>
                                    <SyncIcon sx={{fontSize:"18px"}} />
                                    </IconButton>
                                : 
                                ""
                                
                            }

                        </Box>
                        )
                    }
                </Box>
            </Box>
            <Box sx={{mt:"20px",mb:"5px"}}>
                <Typography sx={{fontSize:{xs:"13px",md:"14px"},fontWeight:"400",color:"#9EA3AE",...descriptionSx}}>{description && description}</Typography>
            </Box>
            {/* {
            hasIconBox && 
                (
                <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"start"}}>

                    {
                        isShownImportantIcon ? 
                        <IconButton onClick={switchImportantIconHandler}>
                            <MdLabelImportant style={{fontSize:"18px"}}/>
                        </IconButton>
                        : 
                        <IconButton onClick={switchImportantIconHandler}>
                            <MdLabelImportantOutline style={{fontSize:"18px"}}/>
                        </IconButton>
                    }

                    {
                        isShownStarredIcon ? 
                        <IconButton onClick={switchStarredIconHandler}>
                            <StarIcon sx={{fontSize:"18px"}} />
                        </IconButton>
                        : 
                        <IconButton onClick={switchStarredIconHandler}>
                            <StarBorderIcon sx={{fontSize:"18px"}} />
                        </IconButton>
                    }
                </Box>
                )
            } */}
        </Box>
    </>
  )
}

export default MessageUserInfoCard
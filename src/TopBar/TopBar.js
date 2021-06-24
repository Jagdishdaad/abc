import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import "./TopBar.css"
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Avatar from '@material-ui/core/Avatar';
function TopBar() {

    const useStyles = makeStyles((theme) => ({
        inputInput: {
                color: "white",
        },
    }))
    const classes = useStyles();
    return (
        <div className="topdiv">
            <InputBase
              placeholder="Search A Vendor,Service,User,Product"
              inputProps={{ 'aria-label': 'search' }}
              className="searchbox"
              classes={{
                input: classes.inputInput,
              }}
              endAdornment={<SearchIcon style={{color:"white"}}/>}
            />
            <div className="toprightdiv">
                <NotificationsNoneOutlinedIcon style={{color:"#ffb600",fontSize:"24px",marginRight:"1px"}}/>
                <Avatar style={{marginTop:"3px"}}>H</Avatar>
            </div>
        </div>
    )
}

export default TopBar

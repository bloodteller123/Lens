import {React, useEffect, useState} from "react"

import "../css/home.scss"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

// import ToggleBtn from "./ToggleBtn"


const Home = () =>{
    const [dark, toggleDark] = useState(false)
    const [handle, setHandle] = useState("")
    const navigate = useNavigate();

    const toggle = () =>{
        toggleDark(dark => !dark)
    }
    useEffect(() =>{
        if(!dark) document.body.style.backgroundColor = '#e8fcbc'
        else document.body.style.backgroundColor = '#2e3643'
    }, [dark])

    const fetchProfile = async () =>{
        console.log("click")
        
        navigate(`/profile/${handle}`)
    }

    const ToggleBtn = ({ darkMode, handleToggle }) => {
        return (
          <div className="toggleBtn">
              <span style={{paddingTop: 8, marginTop: 15}}>Light</span>
              <div>
                {darkMode ? 
                  <IconButton >
                    <ToggleOnIcon sx={{fontSize:50}} onClick={handleToggle}/>
                  </IconButton>
                  : 
                  <IconButton >
                    <ToggleOffIcon sx={{fontSize:50}} onClick={handleToggle}/>
                  </IconButton>
                }
              </div>
              <span style={{paddingTop: 8, marginTop: 15}}>Dark</span>
          </div>
        )
      }


    return(
        <div className="home">
            <ToggleBtn handleToggle={toggle} darkMode={dark}/>
            <div class="container">
                <h1>Enter your lens profile name</h1>
                
                <div className="flexclass">
                    <div className="flexchild symbol">@</div>
                    <input className="flexchild" 
                            type="text" 
                            value={handle} 
                            onChange={e => setHandle(e.target.value)}/>
                </div>
                <Button size="large" variant="elevated" style={{marginTop:50}} onClick={fetchProfile}>
                    Generate your stats!
                </Button>
            </div>
        </div>
    )
}

export default Home
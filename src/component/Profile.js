import {React, useEffect, useState} from "react"
import { LensClient, development, production } from "@lens-protocol/client";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import {useNavigate, useParams} from "react-router-dom"
import Client from '../lens/Apollo';
import {profileQuery} from "../lens/Queries"
import { gql } from '@apollo/client'

import "../css/profile.scss"

const Profile = () =>{
    let { handle } = useParams();
    const navigate = useNavigate()
    const [loaded, setloaded] = useState(false)
    const [userProfile, setuserProfile] = useState({})

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    useEffect(()=>{
        (async () =>{
            console.log(handle)
            try {
                const profileByHandle = await Client.query({
                    query: gql(profileQuery),
                    variables: {
                      request: {
                         handle: `${handle}.lens`
                      },
                    },
                  })
                  console.log(profileByHandle)
                  if(!profileByHandle.data.profile){
                    console.log('error')
                    navigate("/error") 
                  }else{
                    setuserProfile(profileByHandle.data.profile)
                    setloaded(true)
                  }
            } catch (error) {
                console.log(error)
                navigate("/error")  
            }
        })()
    },[])


    //https://stackoverflow.com/a/40989121/13062745
    if(!loaded) return (
        <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
        </div>)

    return(
        <div>
            {loaded && 
                
                <div className='container' style={{margin:208}}>
                    <Grid sx={{ flexGrow: 1 }} container>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" rowSpacing={3} columnSpacing={{ xs: 0.1, sm: 0.2, md: 0.4 }}>
                                <Grid container >
                                    <Grid item xs={3}>
                                        <div className="gridClass" style={{backgroundColor: '#9B60C3'}}>
                                            <div>name</div><span>{userProfile.name}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} >
                                            <div className="gridClass" style={{backgroundColor: '#6CCE71'}}>
                                            <div>totalCollects</div><span>{userProfile.stats.totalCollects}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <div className="gridClass" style={{backgroundColor: '#EE6565'}}>
                                    <div>totalComments</div><span>{userProfile.stats.totalComments}</span>
                                            </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <div className="gridClass" style={{backgroundColor: '#65EEA1'}}>
                                    <div>totalPosts</div><span>{userProfile.stats.totalPosts}</span>
                                    </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <div className="gridClass" style={{backgroundColor: '#E0EE65'}}>
                                    <div>totalMirrors</div><span>{userProfile.stats.totalMirrors}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <div className="gridClass" style={{backgroundColor: '#E0EE65'}}>
                                    <div>totalFollowing</div><span>{userProfile.stats.totalFollowing}</span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div className="gridClass big" style={{backgroundColor: '#E0EE65'}}>
                                    <h3>placeholder</h3>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }
        </div>
    )
}

export default Profile
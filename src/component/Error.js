import {React, useEffect, useState} from "react"
import "../css/error.scss"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Error = () =>{
    const navigate = useNavigate()
    return(
        <div class="background">
            <div>
            <div className="starsec"></div>
            <div className="starthird"></div>
            <div className="starfourth"></div>
            <div className="starfifth"></div>
            </div>
            {/* <!--Dust particle end---> */}
            <div className="lamp__wrap">
            <div className="lamp">
                <div className="cable"></div>
                <div className="cover"></div>
                <div className="in-cover">
                <div className="bulb"></div>
                </div>
                <div className="light"></div>
            </div>
            </div>
            {/* <!-- END Lamp --> */}
            <section className="error">
            {/* <!-- Content --> */}
            <div className="error__content">
                <div className="error__message message">
                <h1 className="message__title">Account Not Found</h1>
                <Button onClick={()=>{navigate("/")}}>Go to Homepage</Button>
            </div>
            </div>
        </section>
    </div>
    )
}

export default Error
import React, { useEffect } from "react";
import classes from "./home.module.css";
// import Table from "../../components/Boxes"
// import Tab from "../../components/Tabs";
import Navbar from "../../components/NavBar"
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('lt_patner_token')
        console.log(token, 'token')
        if (!token) {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.map}>
                    <iframe width="1200" height="1000" src="https://datastudio.google.com/embed/reporting/8dc4ec31-1b51-49a3-b253-40d3c9749f9e/page/ebF5C" frameborder="0" style={{ border: "0" }} allowfullscreen />
                </div>
            </div>
        </>)
}

export default Home;
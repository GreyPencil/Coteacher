import './App.css';
import {UserList} from "./components/UserList"
import React, {useState, useEffect} from "react";
import {Details} from "./components/Details";
import {Header} from "./components/Header";
import axios from 'axios';

export const App = () => {
    const [persons, setPersons] = useState([]);
    // const [urlId, setUrlId] = useState('')
    const urlId = window.location.pathname.substring(1);
    console.log("id:",urlId);
    useEffect(()=> {
        axios
            .get("https://api.github.com/users")
            .then(res => {
                console.log(res)
                setPersons(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);

    const content = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        flexDirection: "row",
        justifyContent: "space-between",
    };
    const header = {
        height: "60px",
        width: "100%",
        backgroundColor: "#C7EDCC",
    };
    const page = {
        display: "flex",
        flexDirection: "column",
    };

    return (
        <div style={page}>
            <div style={header}>
                <Header />
            </div>
            <div style={content}>
                <div>
                    <UserList persons={persons}/>
                </div>
                <div>
                    <Details persons={persons} urlId = {urlId}/>
                </div>
            </div>
        </div>
    );
};
export default App;
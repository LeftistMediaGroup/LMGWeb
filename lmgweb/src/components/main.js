import React from "react";

import Home from "./home.js";


export default class Main extends React {
    constructor(props) {
        super(props)

        this.state = {
            "test": "1"
        }
    };
    
    render() {
        return (
            <>
            
            <Home></Home>
            
            </>
        );
    };
};
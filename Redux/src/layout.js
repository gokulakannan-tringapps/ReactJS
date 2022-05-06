import React,{useState} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
import './App.css';

function Layout(){
    return(
        <div className="layout">
            <div className="header">
                <Header/>
                <div className="content">
                    <Sidebar/>
                    <Content/>
                </div>
                
                <Footer/>
            </div>
            
        </div>
       
    )
}

export default Layout;

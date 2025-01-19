import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import "../Home.css";

function Home() {
    return (
        <div className="home-container">
            <Sidebar />
            <main className="main-content">
                <Dashboard />
            </main>
        </div>
    );
}

export default Home;


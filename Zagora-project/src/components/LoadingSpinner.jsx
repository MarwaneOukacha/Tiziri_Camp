import "../LoadingModal.css";
import React from "react";
import {ClipLoader } from "react-spinners";


export const LoadingSpinner = () => {
    return (
        <div className="loader-overlay">
            <ClipLoader color="rgba(228, 109, 8, 1)" />
        </div>
    )
}
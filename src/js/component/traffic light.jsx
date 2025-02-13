import React, { useState } from "react";

const TrafficLight = () => {
    const [ color, setColor ]= useState ("yellow");
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="bg-dark" style={{ width: "30px", height: "130px" }}></div>
            <div className="bg-dark rounded-5 d-flex justify-content-evenly flex-column align-items-center"
                style={{ width: "150px", height: "350px" }}>
                <div onClick ={() => {
                    setColor ("red")
                }}
                className={"bg-danger rounded-circle " + (color == "red"? "onLightRed":"")} style={{ width: "100px", height: "100px" }}></div>
                <div  onClick ={() => {
                    setColor ("yellow")
                }} 
                className={"bg-warning rounded-circle "+ (color == "yellow"? "onLightYellow":"")} style={{ width:"100px", height: "100px" }}></div>
                <div  onClick ={() => {
                    setColor ("green")
                }}
                className={"bg-success rounded-circle " + (color == "green"? "onLightGreen":"")} style={{ width:"100px", height: "100px" }}></div>
            </div>
        </div>

    )

}






export default TrafficLight;


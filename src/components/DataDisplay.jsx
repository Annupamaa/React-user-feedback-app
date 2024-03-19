import { data } from "../atoms/data";
import { useRecoilState, useRecoilValue } from "recoil";
import { ComputeData } from "../selectors/ComputeData";
import "../App.css";
import { useState } from "react";

const DataDisplay = () => {
    const [data2, setData] = useRecoilState(data);

    const [use, setUse] = useState({
        username: "User",
        pendingAssignment: -1,
    });
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setData(use);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setUse({ ...use, [event.target.id]: event.target.value});
    };

    const result = useRecoilValue(ComputeData);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="box" >
            <h3>Hi ,{data2.username}</h3>
            <h3>Your feedback: {result}</h3>

            <input
                type="text"
                placeholder="Enter Your Username"
                id="username"
                onChange={handleChange}
            />
            <br /><br />
            <input
                type="number"
                placeholder="Enter number of pending assignments"
                id="pendingAssignment"
                onChange={handleChange}
            />
                <br /><br />
            <button>Get your feedback</button>
            </div>
        </form>
        </>
    );
};

export default DataDisplay;
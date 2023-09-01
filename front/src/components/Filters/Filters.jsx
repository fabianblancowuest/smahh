import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPriority, filterStatus } from "../../redux/actions/actions";

const Filters = () => {
    const dispatch = useDispatch()

    // FILTRO DE PRIORIDAD
    const [selectedPriority, setSelectedPriority] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All")

    const handlePriority = (event) => {
        const selectedPriority = event.target.value;
        setSelectedPriority(selectedPriority);
        dispatch(filterPriority(selectedPriority))
    };

    const handleStatus = (event) => {
        const selectedStatus = event.target.value;
        setSelectedStatus(selectedStatus);
        dispatch(filterStatus(selectedStatus))
    }

    return (
        <div>

            <select value={selectedStatus} onChange={handleStatus}>
                <option value="All">All Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Closed">Closed</option>
            </select>


            <select value={selectedPriority} onChange={handlePriority}>
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>


        </div>
    )
}

export default Filters
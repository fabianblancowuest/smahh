import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCombinedFilters } from "../../redux/actions/actions";
import styles from "./Filters.module.css"; 

const Filters = () => {
    const dispatch = useDispatch();

    // FILTRO DE PRIORIDAD
    const [selectedPriority, setSelectedPriority] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedOrder, setSelectedOrder] = useState("A")

    const handlePriority = (event) => {
        const selectedPriority = event.target.value;
        setSelectedPriority(selectedPriority);
       
        dispatch(applyCombinedFilters(selectedPriority, selectedStatus, selectedOrder));
    };

    const handleStatus = (event) => {
        const selectedStatus = event.target.value;
        setSelectedStatus(selectedStatus);
        
        dispatch(applyCombinedFilters(selectedPriority, selectedStatus, selectedOrder));
    };

    const handleOrder = (event) => {
        const selectedOrder = event.target.value;
        setSelectedOrder(selectedOrder);
       
        dispatch(applyCombinedFilters(selectedPriority, selectedStatus, selectedOrder));
    }

    return (
        <div className={styles.container}>
            <select className={styles.select} value={selectedStatus} onChange={handleStatus}>
                <option value="All">All Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Closed">Closed</option>
            </select>

            <select className={styles.select} value={selectedPriority} onChange={handlePriority}>
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select className={styles.select} value={selectedOrder} onChange={handleOrder} >
                <option value="D">Recent</option>
                <option value="A">Last</option>
            </select>

        </div>
    );
};

export default Filters;
import { useState } from "react";
import styles from "./Filters.module.css";


const Filters = ({ handlePriority, handleStatus, handleOrder }) => {

    // const [selectedStatus, setSelectedStatus] = useState("All");
    // const [selectedPriority, setSelectedPriority] = useState("All");
    // const [selectedOrder, setSelectedOrder] = useState("asc"); // Valor por defecto "asc"

    return (
        <div className={styles.container}>
            <select
                className={styles.select}
                // value={selectedStatus}
                onChange={handleStatus}
            >
                <option value="All">All Status</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Closed">Closed</option>
            </select>

            <select
                className={styles.select}
                // value={selectedPriority}
                onChange={handlePriority}
            >
                <option value="All">All Priorities</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select className={styles.select}
                // value={selectedOrder}
                onChange={handleOrder}
            >
                <option value="asc">Last</option>
                <option value="desc">Recent</option>
            </select>

        </div>
    );
};

export default Filters;
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getTicketDetail } from "../../redux/actions/actions"

const Detail = ()=>{

    const {id}= useParams()
    const dispatch= useDispatch()
    const ticketDetail = useSelector(state=> state.ticketDetail)

    const {
        issueDescription,
		issueType,
		priority,
		issueTitle,
		status,
		createdAt,
        updatedAt,
        UserId,
		}= ticketDetail

    useEffect(()=>{
        dispatch(getTicketDetail(id))
    }, [id])

    return (
        <div>
            <h2>Ticket Detail</h2>

            <h3 >Type: {issueType} </h3>
			<h3 >Title: {issueTitle} </h3>
			<h3 >Description: {issueDescription} </h3>
			<h3 >Priority: {priority} </h3>
			<h3 >Status: {status} </h3>
			<h3 >Created At: {createdAt} </h3>
            <h3> Updated At: {updatedAt}</h3>
            
        </div>
    )
}

export default Detail
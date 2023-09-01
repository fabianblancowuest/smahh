import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTicketDetail } from "../../redux/actions/actions";
import "./Detail.css"; // Importa la hoja de estilos

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const ticketDetail = useSelector((state) => state.ticketDetail);

  const {
    issueDescription,
    issueType,
    priority,
    issueTitle,
    status,
    createdAt,
    updatedAt,
    UserId,
  } = ticketDetail;

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, [id]);

  return (
    <div className="detail-container">
      <h2 className="detail-title">Ticket Detail</h2>
      <div className="detail-info">
        <p className="detail-heading">Type:</p>
        <p>{issueType}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Title:</p>
        <p>{issueTitle}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Description:</p>
        <p>{issueDescription}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Priority:</p>
        <p>{priority}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Status:</p>
        <p>{status}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Created At:</p>
        <p>{createdAt}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Updated At:</p>
        <p>{updatedAt}</p>
      </div>
    </div>
  );
};

export default Detail;
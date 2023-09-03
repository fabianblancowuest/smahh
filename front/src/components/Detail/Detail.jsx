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
    userName,
  } = ticketDetail;

  useEffect(() => {
    dispatch(getTicketDetail(id));
  }, [id]);

  return (
    <div className="detail-container">
      <h2 className="detail-title">Ticket Detail</h2>
      <div className="detail-info">
        <p className="detail-heading">User Name:  </p>
        <p>{userName}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Ticket Id:  </p>
        <p>{id}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Type:</p>
        <p>{issueType}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Title:</p>
        <p>{
          issueTitle ? 
          issueTitle :
        "Sequi quidem atque aliquid facilis"}</p>
      </div>
      <div className="detail-info">
        <p className="detail-heading">Description:</p>
        <p>{issueDescription ?
         issueDescription 
         : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias facere alias esse autem id earum tempora, inventore, ut deleniti doloremque explicabo excepturi sunt fugit sequi voluptatibus voluptates. Possimus, eveniet dolor!"}</p>
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
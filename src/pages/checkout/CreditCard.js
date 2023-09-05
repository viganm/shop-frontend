import "./CreditCard.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";

const CreditCard = () => {
  const navigate = useNavigate();
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [CVS, setCVS] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      creditCardNumber,
      expirationDate,
      nameOnCard,
      CVS,
    };

    try {
      const response = await fetch(process.env.ENV + "/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        const personId = data.person_id;
        localStorage.setItem("token", token);
        localStorage.setItem("personId", personId);
        navigate("/shop");
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container_credit_card">
      <form onSubmit={handleSubmit} className="form_credit_card">
        <label>Credit Card Number:</label>
        <input
          type=""
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
        />
        <br />
        <label>Expiration Date:</label>
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <br />
        <label>Name on Card:</label>
        <input
          type="name"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
        />
        <br />
        <label>CVS:</label>
        <input
          type="password"
          value={CVS}
          onChange={(e) => setCVS(e.target.value)}
        />
        <br />
        <button type="submit">checkout</button>
      </form>
    </div>
  );
};

export default CreditCard;

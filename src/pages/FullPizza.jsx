import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const FullPizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pizza, setPizza] = useState();
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const { data } = await axios.get(
          `https://6331c181cff0e7bf70f5e9a0.mockapi.io/items/${id}`
        );

        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
        navigate("/");
      }
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h1>{pizza.title}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea at id,
        harum cum accusamus eos ab labore delectus optio sint cumque. Rem minus,
        quae consectetur a ipsum praesentium cupiditate aliquam!
      </p>
      <h4>{pizza.price} Р</h4>
    </div>
  );
};

export default FullPizza;

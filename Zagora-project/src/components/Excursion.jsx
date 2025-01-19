import React, { useEffect, useState } from 'react';
import '../Excursion.css';
import { useNavigate, useParams } from 'react-router-dom';

const Excursion = ({ data }) => {
  const { id } = useParams(); // Extract the dynamic ID from the URL
  const navigate = useNavigate();
  const excursion = data[id - 1];
  const [activeImage, setActiveImage] = useState(0);



  useEffect(() => {
    console.log(excursion.title);
  }, []);

  return (
    <div className="desert-card">
      <div className="desert-card-content">
        {/* Left side - Photo Gallery */}

        <div className="desert-gallery">
          <div className="main-image">
            <img
              src={excursion.desertImages[activeImage]}
              alt={`Desert view ${activeImage + 1}`}
            />
            <button className="like-button">❤</button>
          </div>
          <div className="thumbnail-grid">
            {excursion.desertImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
              >
                <img src={image} alt={`Desert thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Title, Description, and Pricing */}
        <div className="desert-info">
          <h1>{excursion.title}</h1>
          <div className="underline"></div>
          <p className="description">
            {excursion.description}
          </p>

          <div className="points-of-interest">
            <h2>Points of Interest</h2>
            <ul>
              {excursion.PointsInteret.map((point, index) => (
                <li>📍 {point}</li>))
              }
            </ul>
          </div>

          <div className="best-time-to-visit">
            <h3>🗓 Best Time to Visit</h3>
            <p>
              {excursion.details}
            </p>
          </div>

          {/* Added increment tool for number of persons */}
          <div className="pricing-info">
            <h3>Tarifs</h3>
            <div className="person-control">

              {excursion.price.map((prices, index) => (
                <p>Prix : <strong>{prices}</strong></p>
              ))
              }
            </div>

          </div>

          {/*<div className="rating">
            ⭐⭐⭐⭐⭐ <span>4.8 (120 avis)</span>
          </div>*/}

          <button className="book-button" onClick={() => (navigate(`/Reservation/${id}`))}>
            Réserver votre aventure dans le désert
          </button>
        </div>
      </div>
    </div>
  );
};

export default Excursion;

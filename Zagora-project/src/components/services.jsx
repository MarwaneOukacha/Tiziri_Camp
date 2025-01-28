import React from "react";
import { GiCampingTent } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Services offered by Tiziri camp: a range of tailor-made tours adaptable to your desires.
          </p>
        </div>
        <div className="row">
          <div key="service 01" className="col-md-4">
            <GiCampingTent className="GiCampingTent " />
            <div className="service-desc">
              <h3>Camping</h3>
              <p>Accommodation in two-person tents with 10 cm thick foam mattresses (single tent available on request).</p>
            </div>
          </div>
          <div key="service 02" className="col-md-4">
            <GiPartyPopper className="GiCampingTent " />
            <div className="service-desc">
              <h3>Party</h3>
              <p>Special evenings or themed trips can be organized in the heart of the Moroccan desert (New Year's Eve, birthdays, honeymoons, etc.).</p>
            </div>
          </div>
          <div key="service 03" className="col-md-4">
            <GiFullMotorcycleHelmet className="GiCampingTent " />
            <div className="service-desc">
              <h3>Unleashing the Thrill: The Adventure of Motorcycle Riding</h3>
              <p>Riding a motorcycle in the desert offers a thrilling combination of adventure and challenge. The vast, open landscapes, shifting dunes, and rugged terrain test both skill and endurance, making it an unforgettable experience. With the roar of the engine and the endless horizon ahead, every journey becomes a true escape into the wild</p>
            </div>
          </div>
          <div key="service 04" className="col-md-4">
            <IoIosRestaurant className="GiCampingTent " />
            <div className="service-desc">
              <h3>An Exquisite Journey Through Moroccan Cuisine</h3>
              <p>Moroccan cuisine is a delightful fusion of flavors, aromas, and traditions, offering a culinary journey like no other. From the iconic tagines and fluffy couscous to the rich harira soup and sweet pastilla, each dish reflects the country's vibrant culture. Infused with spices like saffron, cinnamon, and cumin, and paired with freshly baked bread and mint tea, Moroccan food is a feast for both the palate and the soul</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

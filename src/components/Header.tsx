import React from 'react';
import { Car } from '../interfaces/CarInterfaces';

interface HeaderProps {
  car: Car;
}

const Header = (props: HeaderProps) => {
  const { car } = props;
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

export default Header;

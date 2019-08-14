import React from 'react';
import { Car } from '../interfaces/CarInterfaces';

interface TotalProps {
  car: Car;
  additionalPrice: number;
}

const Total = (props: TotalProps): React.ReactElement => {
  const { car, additionalPrice } = props;
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;

import React from 'react';
import { connect } from 'react-redux';
import { Car } from '../interfaces/interfaces';

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

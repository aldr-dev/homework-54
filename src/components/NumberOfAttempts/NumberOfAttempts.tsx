import React from 'react';

interface Props {
  attempts: number;
}

const NumberOfAttempts: React.FC<Props> = ({attempts}) => {
  return (
    <div className="attempts">Tries: {attempts}</div>
  );
};

export default NumberOfAttempts;
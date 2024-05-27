import React from 'react';

interface Props {
  reset: () => void;
}
const ButtonReset: React.FC<Props> = ({reset}) => {
  return (
    <button className="button-reset" type="button" onClick={reset}>Reset</button>
  );
};

export default ButtonReset;
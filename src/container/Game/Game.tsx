import React, {useState} from 'react';

interface Props {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = () => {
  const array: Array<Props> = [];
  for (let i = 0; i < 36; i++) {
    array.push({hasItem: false, clicked: false});
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  array[randomIndex] = {hasItem: true, clicked: false};
  return array;
};

const Game: React.FC<Props> = () => {
  const [items, setItems] = useState(createItems());
  return (
    <div>
      
    </div>
  );
};

export default Game;
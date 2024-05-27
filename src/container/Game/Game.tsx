import React, {useState} from 'react';
import {Items} from '../../types';

const createItems = () => {
  const array: Array<Items> = [];
  for (let i = 0; i < 36; i++) {
    array.push({hasItem: false, clicked: false});
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  array[randomIndex] = {hasItem: true, clicked: false};
  return array;
};

const Game: React.FC<Items> = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);


  return (
    <div>

    </div>
  );
};

export default Game;
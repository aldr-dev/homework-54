import React, {useState} from 'react';
import {Items} from '../../types';
import Board from '../../components/Board/Board';
import NumberOfAttempts from '../../components/NumberOfAttempts/NumberOfAttempts';
import ButtonReset from '../../components/ButtonReset/ButtonReset';
import './Game.css';

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

  const cellClickEvent = (index: number) => {
    setItems((prevState) => {
      if (!prevState[index].clicked) {
        const newItems = [...prevState];
        newItems[index] = {
          ...newItems[index],
          clicked: true,
        };
        setAttempts((prevState) => prevState + 1);
        return newItems;
      }
      return prevState;
    });
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="game">
      <Board items={items} onClickCell={cellClickEvent}/>
      <NumberOfAttempts attempts={attempts}/>
      <ButtonReset reset={resetGame}/>
    </div>
  );
};

export default Game;
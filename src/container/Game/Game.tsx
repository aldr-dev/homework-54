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
  const [gameOver, setGameOver] = useState(false);

  const cellClickEvent = (index: number) => {
    setItems((prevState) => {
      if (!prevState[index].clicked) {
        const newItems = [...prevState];
        newItems[index] = {
          ...newItems[index],
          clicked: true,
        };

        if (newItems[index].hasItem) {
          setGameOver(true);
          return newItems.map(item => ({
            ...item,
            clicked: true,
          }));
        }

        setAttempts(attempts + 1);
        return newItems;
      }
      return prevState;
    });
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="game">
      <div className="title-result">
        {gameOver ? <h4>Game over. Item found!</h4> : null}
      </div>
      <Board items={items} onClickCell={cellClickEvent}/>
      <NumberOfAttempts attempts={attempts}/>
      <ButtonReset reset={resetGame}/>
    </div>
  );
};

export default Game;
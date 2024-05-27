import React from 'react';
import {Items} from '../../types';
import Cell from '../Cell/Cell';
import './Board.css';

interface BoardProps {
  items: Items[];
  onClickCell: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({items, onClickCell}) => {
  return (
    <div className="board">
      {items.map((cell, index) => (
        <Cell key={index} item={cell} onClick={() => onClickCell(index)} />
      ))}
    </div>
  );
};

export default Board;
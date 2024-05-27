import React from 'react';
import {Items} from '../../types';

interface CellProps {
  item: Items;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({item, onClick}) => {
  return (
    <div className={`cell ${item.clicked ? 'clicked' : ''}`} onClick={onClick}>
      {item.clicked && (item.hasItem ? 'О' : '')};
    </div>
  );
};

export default Cell;
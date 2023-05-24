import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  TODO: 'todo'
};

function TodoItem({ id, text, index, moveItem, listType }) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: ItemTypes.TODO, id, index, listType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: ItemTypes.TODO,
    hover(item, monitor) {
      if (!dropRef.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveItem(dragIndex, hoverIndex, item.listType);

      item.index = hoverIndex;
    }
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <li ref={dragRef} style={{ opacity }}>
      {text}
    </li>
  );
}


export default TodoItem;
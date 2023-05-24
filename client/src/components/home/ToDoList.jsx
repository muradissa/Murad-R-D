import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TodoItem from './TodoItem';
// const ItemTypes = {
//   TODO: 'todo'
// };

// function TodoItem({ id, text, index, moveItem, listType }) {
//   const [{ isDragging }, dragRef] = useDrag({
//     item: { type: ItemTypes.TODO, id, index, listType },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging()
//     })
//   });

//   const [, dropRef] = useDrop({
//     accept: ItemTypes.TODO,
//     hover(item, monitor) {
//       if (!dropRef.current) {
//         return;
//       }

//       const dragIndex = item.index;
//       const hoverIndex = index;

//       if (dragIndex === hoverIndex) {
//         return;
//       }

//       moveItem(dragIndex, hoverIndex, item.listType);

//       item.index = hoverIndex;
//     }
//   });

//   const opacity = isDragging ? 0.5 : 1;

//   return (
//     <li ref={dragRef} style={{ opacity }}>
//       {text}
//     </li>
//   );
// }

function TodoList() {
  const [todayItems, setTodayItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const updatedAllItems = [...allItems, newItem];

      setAllItems(updatedAllItems);
      setNewItem('');
    }
  };

  const moveItem = (dragIndex, hoverIndex, listType) => {
    const dragItem = listType === 'today' ? todayItems[dragIndex] : allItems[dragIndex];

    const updatedTodayItems = [...todayItems];
    const updatedAllItems = [...allItems];

    updatedTodayItems.splice(dragIndex, 1);
    updatedAllItems.splice(dragIndex, 1);

    updatedTodayItems.splice(hoverIndex, 0, dragItem);
    updatedAllItems.splice(hoverIndex, 0, dragItem);

    setTodayItems(updatedTodayItems);
    setAllItems(updatedAllItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>To-Do List</h1>

        <div>
          <h2>Today's To-Do List</h2>
          <ul>
            {todayItems.map((item, index) => (
              <TodoItem
                key={index}
                id={index}
                text={item}
                index={index}
                moveItem={moveItem}
                listType="today"
              />
            ))}
          </ul>
        </div>

        <div>
          <h2>All To-Do List</h2>
          <ul>
            {allItems.map((item, index) => (
              <TodoItem
                key={index}
                id={index}
                text={item}
                index={index}
                moveItem={moveItem}
                listType="all"
              />
            ))}
          </ul>
        </div>

        <div>
          <input type="text" value={newItem} onChange={handleInputChange} />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      </div>
    </DndProvider>
  );
}

export default TodoList;
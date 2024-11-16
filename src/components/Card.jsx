import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiEdit, FiTrash } from "react-icons/fi";

const priorityStyles = {
  high: "text-red-400",
  medium: "text-yellow-300",
  low: "text-green-300",
};

const Card = ({ title, id, column, priority, handleDragStart, setCards }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newPriority, setNewPriority] = useState(priority);

  const handleSave = () => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, title: newTitle, priority: newPriority } : card
      )
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  return (
    <motion.div
      layout
      layoutId={id}
      draggable={!isEditing}
      onDragStart={(e) => handleDragStart(e, { title, id, column })}
      className="relative cursor-grab mb-2 rounded border border-neutral-600 bg-neutral-800 p-3 active:cursor-grabbing group"
    >
      {!isEditing ? (
        <>
          <div className="pr-8">
            <p className="text-sm text-white">{title}</p>
            <p className="text-xs text-white">
              Priority:{" "}
              {priority ? (
                <span className={priorityStyles[priority]}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </span>
              ) : (
                "Unknown"
              )}
            </p>
          </div>
          <div className="absolute top-2 right-2 flex flex-col space-y-2 hidden group-hover:flex">
            <button
              onClick={() => setIsEditing(true)}
              className="text-gray-400 hover:text-white"
            >
              <FiEdit />
            </button>
            <button
              onClick={handleDelete}
              className="text-gray-400 hover:text-red-400"
            >
              <FiTrash />
            </button>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full rounded border border-gray-600 bg-gray-700 p-2 text-sm text-white"
          />
          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="mt-2 w-full rounded border border-gray-600 bg-gray-700 p-2 text-sm text-white"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <div className="mt-2 flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 hover:text-neutral-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1.5 text-xs text-white bg-green-600 hover:bg-green-500 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import Column from "./Column";
import BurnBarrel from "./BurnBarrel";

const LOCAL_STORAGE_KEY = "kanbanTasks";

const Board = () => {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedCards ? JSON.parse(savedCards) : DEFAULT_CARDS;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cards));
  }, [cards]);

  return (
    <div className="grid justify-center grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 h-full w-full overflow-y-auto">
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-300"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

export default Board;

const DEFAULT_CARDS = [
  {
    title: "Fix layout issue on the homepage",
    id: "1",
    column: "backlog",
    priority: "medium",
  },
  {
    title: "Create user authentication API",
    id: "2",
    column: "backlog",
    priority: "high",
  },
  {
    title: "Integrate payment gateway for checkout",
    id: "3",
    column: "backlog",
    priority: "high",
  },
  {
    title: "Document user permissions system",
    id: "4",
    column: "backlog",
    priority: "low",
  },
  {
    title: "Research new caching strategies",
    id: "5",
    column: "todo",
    priority: "medium",
  },
  {
    title: "Write API tests for the user profile endpoint",
    id: "6",
    column: "todo",
    priority: "low",
  },
  {
    title: "Implement dark mode for the app",
    id: "7",
    column: "todo",
    priority: "high",
  },
  {
    title: "Refactor the UI components for the dashboard",
    id: "8",
    column: "doing",
    priority: "medium",
  },
  {
    title: "Add unit tests for the login form",
    id: "9",
    column: "doing",
    priority: "low",
  },
  {
    title: "Optimize database queries for reports",
    id: "10",
    column: "done",
    priority: "medium",
  },
  {
    title: "Set up email notifications for system alerts",
    id: "11",
    column: "done",
    priority: "low",
  },
  {
    title: "Conduct code review for the new feature branch",
    id: "12",
    column: "done",
    priority: "high",
  },
  {
    title: "Deploy latest release to production",
    id: "13",
    column: "done",
    priority: "high",
  },
  {
    title: "Monitor app performance and optimize load times",
    id: "14",
    column: "doing",
    priority: "medium",
  },
  {
    title: "Set up logging for new API endpoints",
    id: "15",
    column: "todo",
    priority: "low",
  },
  {
    title: "Refactor API to support pagination",
    id: "16",
    column: "backlog",
    priority: "medium",
  },
];

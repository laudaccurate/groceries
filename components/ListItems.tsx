import React, { memo } from "react";
import type { NextPage } from "next";
import { GroceryList } from "@prisma/client";

interface CardProps {
  children: React.ReactNode;
}

export const List: NextPage<CardProps> = ({ children }) => {
  return <div className="overflow-y-auto h-72">{children}</div>;
};

interface ListItemProps {
  item: GroceryList;
  onUpdate?: (item: GroceryList) => void;
}

const ListItemComponent: NextPage<ListItemProps> = ({ item, onUpdate }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="w-4 h-4 border-gray-300 rounded mr-4"
        defaultChecked={item.checked as boolean}
        onChange={() => onUpdate?.(item)}
      />
      <h2 className="text-gray-600 tracking-wide text-sm">{item.title}</h2>
    </div>
  );
};

export const ListItem = memo(ListItemComponent);

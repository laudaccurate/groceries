import React, { memo } from "react";
import type { NextPage } from "next";
import { GroceryList } from "@prisma/client";

interface CardProps {
  children: React.ReactNode;
}

export const Card: NextPage<CardProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center bg-slate-100">
      {children}
    </div>
  );
};

export const CardContent: NextPage<CardProps> = ({ children }) => {
  return (
    <div className="bg-white w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 rounded-lg drop-shadow-md">
      {children}
    </div>
  );
};

interface CardHeaderProps {
  title: string;
  listLength: number;
  clearAllFn?: () => void;
}

export const CardHeader: NextPage<CardHeaderProps> = ({
  title,
  listLength,
  clearAllFn,
}) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b border-slate-200">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-base font-medium tracking-wide text-gray-900 mr-2">
          {title}
        </h1>
        <span className="h-5 w-5 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full text-xs">
          {listLength}
        </span>
      </div>
      <button
        className="text-sm font-medium text-gray-600 underline"
        type="button"
        onClick={clearAllFn}
      >
        Clear all
      </button>
    </div>
  );
};

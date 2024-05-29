'use client';

import { useContext } from "react";
import { dmSans } from "@/config/fonts"
import clsx from "clsx"
import { TabsContext } from "./Tabs";

interface Props {
  value: string;
  children: React.ReactNode;
}

export const TabItem = ({ value, children }: Props) => {
  const { activeTab, handleChange } = useContext(TabsContext);

  return (
    <button
      className={clsx(
        dmSans.className,
        'rounded-lg py-2 px-3 text-sm text-white font-medium',
        { 'bg-gray': activeTab === value }
      )}
      onClick={() => handleChange(value)}
    >
      {children}
    </button>
  )
}

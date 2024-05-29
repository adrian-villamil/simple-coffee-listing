'use client';

import { useContext } from "react";
import clsx from "clsx";
import { TabsContext } from "./Tabs";

interface Props {
  value: string;
  children: React.ReactNode;
}

export const TabContent = ({ value, children }: Props) => {
  const { activeTab } = useContext(TabsContext);

  return (
    <div className={clsx(
      { 'hidden': activeTab !== value }
    )}>
      {children}
    </div>
  )
}

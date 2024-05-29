'use client';

import { createContext, useState } from "react";

interface Props {
  defaultValue: string;
  children: React.ReactNode;
}

export const TabsContext = createContext<{
  activeTab: string,
  handleChange: (newValue: string) => void
}>({
  activeTab: '',
  handleChange: (newValue: string) => { }
});

export const Tabs = ({ defaultValue, children }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleChange = (newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <TabsContext.Provider value={{ activeTab, handleChange }}>
      <div className="flex flex-col gap-10">
        {children}
      </div>
    </TabsContext.Provider>
  )
}

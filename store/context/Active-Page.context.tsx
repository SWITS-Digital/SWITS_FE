import React, { createContext, useState } from "react";

import { RoutesListEnum } from "@/library/enum/routes.enum";

// Sidebar option type definition for better TypeScript support
type SidebarOption = {
  label: RoutesListEnum;
  isActive: boolean;
};

const INIT_SIDEBAR_OPTIONS: SidebarOption[] = [
  { label: RoutesListEnum.DASHBOARD, isActive: true },
  { label: RoutesListEnum.CHIEFADMIN, isActive: false },
  { label: RoutesListEnum.INTEGRATIONS, isActive: false },
  { label: RoutesListEnum.TRANSACTIONS, isActive: false },
  { label: RoutesListEnum.COMPANIES, isActive: false },
  { label: RoutesListEnum.CANDIDATES, isActive: false },
];

// Context type for providing type safety
type AsideBarContextType = {
  lists: SidebarOption[];
  addActivePage: (label: RoutesListEnum) => void;
};

// Creating context with an initial empty implementation for `addActivePage`
export const AsideBarContext = createContext<AsideBarContextType>({
  lists: INIT_SIDEBAR_OPTIONS,
  addActivePage: () => {},
});

function SideBarContextProvider({ children }: { children: React.ReactNode }) {
  const [lists, setLists] = useState(INIT_SIDEBAR_OPTIONS);

  function addActivePage(label: RoutesListEnum) {
    setLists((prev) =>
      prev.map((ele) => ({ ...ele, isActive: ele.label === label }))
    );
  }

  const value = {
    lists,
    addActivePage,
  };

  return (
    <AsideBarContext.Provider value={value}>
      {children}
    </AsideBarContext.Provider>
  );
}

export default SideBarContextProvider;

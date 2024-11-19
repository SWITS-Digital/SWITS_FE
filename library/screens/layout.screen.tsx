"use client";

import { NavBar } from "../components/navbar";
// import { SideBar } from "../components/sidebar";
import { NavigationTabs } from "../components/navigation-tabs";
import SideBarContextProvider from "@/store/context/Active-Page.context";
import PaginationContextProvider from "@/store/context/Pagination.context";

export const LayoutScreenWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SideBarContextProvider>
      <main className="flex flex-col items-center justify-start relative">
        <NavBar />
        <section className="flex items-center justify-center w-full">
          <NavigationTabs>
          <section className="w-[95vw] ml-auto h-full py-6 px-3">
            <PaginationContextProvider>{children}</PaginationContextProvider>
          </section>
          </NavigationTabs>
        </section>
      </main>
    </SideBarContextProvider>
  );
};

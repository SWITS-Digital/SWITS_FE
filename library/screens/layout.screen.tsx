"use client"

import { NavBar } from "../components/navbar";
import { SideBar } from "../components/sidebar";
import SideBarContextProvider from "@/store/context/Active-Page.context";

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
          <SideBar />
          <section className="w-[95vw] ml-auto h-full py-10 px-8">
            {children}
          </section>
        </section>
      </main>
    </SideBarContextProvider>
  );
};

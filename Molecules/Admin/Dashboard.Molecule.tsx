"use client"

import { useContext, useEffect } from "react";
import { AsideBarContext } from "@/store/context/Active-Page.context";
import { RoutesListEnum } from "@/library/enum/routes.enum";

import { PageLabel } from "@/library/components/page-label";

export const AdminDashboardComponent = () => {
  const routesContext = useContext(AsideBarContext);

  useEffect(() => {
    routesContext.addActivePage(RoutesListEnum.DASHBOARD);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start gap-3 w-full">
      <PageLabel text="Dashboard" />
    </section>
  );
};
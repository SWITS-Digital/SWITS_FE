"use client";

import { useState } from "react";
import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

import { useContext } from "react";
import { AsideBarContext } from "@/store/context/Active-Page.context";
import { RoutesListEnum } from "../enum/routes.enum";
import { cn } from "../utils";

export const NavigationTabs = ({ children }: { children: React.ReactNode }) => {
  const defaultView = "text-lightBlack text-sm cursor-pointer px-1 py-1.5 relative min-w-24 max-w-24 text-center";
  const highLightedView = "bg-primary rounded-lg text-white";

  const routesContext = useContext(AsideBarContext);
  const routesList = routesContext.lists;
  const activeTab = routesList.find((ele) => !!ele.isActive);

  const [selectedTabs, setSelectedTabs] = useState<string>(
    activeTab?.label || ""
  );

  const NavigateTabsOptionsArr = [
    {
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.DASHBOARD,
    },
    {
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.CHIEFADMIN,
    },
    {
      className: cn(defaultView),
      href: "/admin/integrations",
      label: RoutesListEnum.INTEGRATIONS,
    },
    {
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.TRANSACTIONS,
    },
    {
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.COMPANIES,
    },
    {
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.CANDIDATES,
    },
  ];

  const modifyRouteList = () => {
    return NavigateTabsOptionsArr.map((ele, index) => {
      const parseCondition = ele.label === routesList[index].label;
      if (parseCondition) {
        return {
          ...ele,
          className: routesList[index].isActive
            ? cn(defaultView, highLightedView)
            : cn(defaultView),
        };
      }
    });
  };

  return (
    <section className="flex flex-col items-center justify-start gap-5 w-full">
      <section className="flex items-center justify-start gap-5 self-start px-6 py-3">
        {modifyRouteList().map((ele) => {
          if (ele?.label) {
            return (
              <Link href={ele.href} key={ele.label} className={ele.className}>
                <span onClick={() => setSelectedTabs(ele.label)}>
                  {ele.label}
                </span>
              </Link>
            );
          }
        })}
      </section>
      <section>{children}</section>
    </section>
  );
};

"use client";

import Link from "next/link";
import { useContext } from "react";
import { AsideBarContext } from "@/store/context/Active-Page.context";
import { RoutesListEnum } from "../enum/routes.enum";

import { DashboardIcon } from "../icons/Dashboard.icon";
import { ChiefAdminIcon } from "../icons/ChiefAdmin.icon";
import { IntegrationsIcons } from "../icons/Integrations.icon";
import { TranscationIcon } from "../icons/Transactions.icon";
import { BuildingsIcon } from "../icons/Buildings.icon";
import { AccountsIcon } from "../icons/Accounts.icon";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

import { cn } from "../utils";

export const SideBar = () => {
  const defaultView = "text-white h-8 w-8 cursor-pointer p-1.5 relative";
  const highLightedView = "bg-secondary rounded-full";

  const routesContext = useContext(AsideBarContext);
  const routesList = routesContext.lists;

  const sideBarOptionsArr = [
    {
      component: DashboardIcon,
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.DASHBOARD,
    },
    {
      component: ChiefAdminIcon,
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.CHIEFADMIN,
    },
    {
      component: IntegrationsIcons,
      className: cn(defaultView),
      href: "/admin/integrations",
      label: RoutesListEnum.INTEGRATIONS,
    },
    {
      component: TranscationIcon,
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.TRANSACTIONS,
    },
    {
      component: BuildingsIcon,
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.COMPANIES,
    },
    {
      component: AccountsIcon,
      className: cn(defaultView),
      href: "/admin/dashboard",
      label: RoutesListEnum.CANDIDATES,
    },
  ];

  const modifyRouteList = () => {
    return sideBarOptionsArr.map((ele, index) => {
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
    <aside className="flex flex-col items-center justify-evenly bg-primary p-2 rounded-tr-lg rounded-br-lg min-h-[80vh] top-24 left-0 fixed z-10">
      {modifyRouteList().map((ele, index: number) => {
        return ele ? (
          <TooltipProvider key={index}>
            <Link key={index} href={ele.href} className="relative">
              <Tooltip>
                <TooltipTrigger asChild>
                  <ele.component className={ele.className} />
                </TooltipTrigger>
                <TooltipContent className="min-w-max">
                  <p>{ele.label}</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        ) : null;
      })}
    </aside>
  );
};

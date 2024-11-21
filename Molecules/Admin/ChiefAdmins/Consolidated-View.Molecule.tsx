"use client";

import { useContext, useEffect } from "react";
import { AsideBarContext } from "@/store/context/Active-Page.context";
import { RoutesListEnum } from "@/library/enum/routes.enum";

import { PageLabel } from "@/library/components/page-label";
import { AdminsChiefContent } from "@/library/content/admin/chief-admins.content";

import AdminsChiefMockJSON from "@/library/Iterator/admins-chiefs.iterator.json";

import { Button } from "@/library/components/buttons";
import { AdminChiefCardComponent } from "@/Molecules/Atoms/Admins-Chief-Card.Atom";

export const ConsolidatedChiefAdminViewComponent = () => {
  const routesContext = useContext(AsideBarContext);

  useEffect(() => {
    routesContext.addActivePage(RoutesListEnum.CHIEFADMIN);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start gap-3 w-full h-full">
      <PageLabel text="Chief Admin" goBack>
        <Button>{AdminsChiefContent.buttonText}</Button>
      </PageLabel>
      <section className="flex flex-wrap items-center justify-start w-full h-full gap-12">
        {AdminsChiefMockJSON.map((ele) => {
          return <AdminChiefCardComponent data={ele} />;
        })}
      </section>
    </section>
  );
};

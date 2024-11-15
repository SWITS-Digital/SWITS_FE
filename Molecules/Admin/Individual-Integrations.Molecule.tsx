"use client";

import { useContext, useEffect } from "react";

import { PageLabel } from "@/library/components/page-label";
import { RoutesListEnum } from "@/library/enum/routes.enum";

import { AsideBarContext } from "@/store/context/Active-Page.context";

import MockIntegrationJSON from "@/library/Iterator/integration.iterator.json";
import { IndividualIntegrationContent } from "@/library/content/admin/integration.content";
import { Button } from "@/library/components/button";

export const AdminIndividualIntegrationComponent = () => {
  const routesContext = useContext(AsideBarContext);
  const MOCK_DATA = MockIntegrationJSON.jobBoards;

  useEffect(() => {
    routesContext.addActivePage(RoutesListEnum.INTEGRATIONS);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start gap-12 w-full">
      <PageLabel text="Integrations" goBack>
        <Button className="h-8 w-32">{IndividualIntegrationContent.buttonText}</Button>
      </PageLabel>
    </section>
  )
};

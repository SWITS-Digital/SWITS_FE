"use client";

import { useContext, useEffect } from "react";

import { AsideBarContext } from "@/store/context/Active-Page.context";
import { RoutesListEnum } from "@/library/enum/routes.enum";
import { IntegrationContent } from "@/library/content/admin/integration.content";

import { PageLabel } from "@/library/components/page-label";
import { Button } from "@/library/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/library/components/card";
import { IntegrationCardComponent } from "@/Molecules/Atoms/Intergation-Card.Atom";

import MockIntegrationJSON from "@/library/Iterator/integration.iterator.json";

export const AdminIntegrationsComponent = () => {
  const routesContext = useContext(AsideBarContext);
  const MOCK_DATA = MockIntegrationJSON.jobBoards;

  const IteratecardContainers = () => {
    const { buttonText, ...rest } = IntegrationContent;
    const mutatedObjData = Object.values(rest);
    return mutatedObjData.map((str, index) => {
      return (
        <div key={`${str}-${index}`}>
          <CardHeader>
            <CardTitle className="text-secondary text-xl font-bold">
              {str}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <section className="flex flex-wrap items-center justify-start gap-12">
              {MOCK_DATA.find((ele) => ele.category === str)?.boards.map(
                (val, index: number) => {
                  return <IntegrationCardComponent key={index} data={val} />;
                }
              )}
            </section>
          </CardContent>
        </div>
      );
    });
  };

  useEffect(() => {
    routesContext.addActivePage(RoutesListEnum.INTEGRATIONS);
  }, []);

  return (
    <section className="flex flex-col items-center justify-start gap-12 w-full">
      <PageLabel text="Integrations" goBack>
        <Button className="h-8 w-20">{IntegrationContent.buttonText}</Button>
      </PageLabel>
      <Card className="shadow-primary border-primary w-full">
        {IteratecardContainers()}
      </Card>
    </section>
  );
};

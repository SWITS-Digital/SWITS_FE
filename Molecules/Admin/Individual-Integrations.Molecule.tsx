"use client";

import { useState, useContext, useEffect, useMemo, useLayoutEffect } from "react";

import { Show } from "@/library/hooks/Show";

import {
  companyListDataType,
  JobBoardType,
} from "@/library/interfaces/screens/integration.type";
import { RoutesListEnum } from "@/library/enum/routes.enum";
import { IndividualIntegrationEnum } from "@/library/enum/integration.enum";
import { inheritColumnDefType } from "@/library/interfaces/components/column-def.type";

import { PageLabel } from "@/library/components/page-label";
import { Button } from "@/library/components/buttons";
import { DataTable } from "@/library/components/data-table";

import { AsideBarContext } from "@/store/context/Active-Page.context";
import { PaginationContext } from "@/store/context/Pagination.context";

import MockIntegrationJSON from "@/library/Iterator/integration.iterator.json";
import { IndividualIntegrationContent } from "@/library/content/admin/integration.content";
import { timeLeft } from "@/library/utils";

import { IndividualIntegrtionCloumnDef } from "@/library/tables/Accessor-List/individual-integration.accessor";

import { CompanyNameCell, IntegrationDateCell, DueDateCell, IntegrationStatusCell, RemoveActionCell } from "@/library/tables/Cells/individual-integration.cells";
import { ColumnDef, Row } from "@tanstack/react-table";

export const AdminIndividualIntegrationComponent = ({
  integrationId,
}: {
  integrationId: string;
}) => {
  const routesContext = useContext(AsideBarContext);
  const { pagination, setTotalPages } = useContext(PaginationContext);
  const [integrationData, setIntegrationData] = useState<JobBoardType>();
  const MOCK_DATA = MockIntegrationJSON.jobBoards;

  const fetchIntegrationObj = () => {
    const FilterIntegrationBoardData = () => {
      const restructureData = MOCK_DATA.map((ele) => ele.boards)
        .flatMap((ele) => ele)
        .find((obj) => obj.id === integrationId);
      return restructureData;
    };
    setIntegrationData(FilterIntegrationBoardData);
  };

  useEffect(() => {
    fetchIntegrationObj();

    // Set the total pages dynamically based on the data length.
    if (integrationData?.data) {
      const totalPages = Math.ceil(
        integrationData.data.length / pagination.size
      );
      setTotalPages(totalPages);
    }
  }, [integrationData, pagination.size]);

  useLayoutEffect(() => {
    routesContext.addActivePage(RoutesListEnum.INTEGRATIONS);
  }, []);

  const currentPageData = integrationData?.data?.slice(
    (pagination.page - 1) * pagination.size,
    pagination.page * pagination.size
  );

  const MutatedColumnDef = useMemo(() => {
    const columnDef = IndividualIntegrtionCloumnDef.map((ele) => {
      if (ele.id === IndividualIntegrationEnum.COMPANY_NAME) {
        return {
          ...ele,
          cell: ({ row }: { row: Row<companyListDataType> }) => (
            <CompanyNameCell row={row} />
          ),
        };
      } else if (ele.id === IndividualIntegrationEnum.INTEGRATION_DATE) {
        return {
          ...ele,
          cell: ({ row }: { row: Row<companyListDataType> }) => (
            <IntegrationDateCell row={row} />
          ),
        };
      } else if (ele.id === IndividualIntegrationEnum.DUE_DATE) {
        return {
          ...ele,
          cell: ({ row }: { row: Row<companyListDataType> }) => (
            <DueDateCell row={row} />
          ),
        };
      } else if (ele.id === IndividualIntegrationEnum.STATUS) {
        return {
          ...ele,
          cell: ({ row }: { row: Row<companyListDataType> }) => (
            <IntegrationStatusCell row={row} />
          ),
        };
      } else if (ele.id === IndividualIntegrationEnum.ACTIONS) {
        return {
          ...ele,
          cell: ({ row }: { row: Row<companyListDataType> }) => (
            <RemoveActionCell row={row} />
          ),
        };
      }
      return ele;
    });
    return columnDef;
  }, [pagination, integrationData]) as ColumnDef<companyListDataType>[];

  return (
    <section className="flex flex-col items-center justify-start gap-12 w-full">
      <PageLabel text="Integrations" goBack>
        <Button className="h-8 w-32">
          {IndividualIntegrationContent.buttonText}
        </Button>
      </PageLabel>
      <section className="flex flex-col items-start justify-start gap-4 w-full">
        <section className="flex items-center justify-start w-full gap-6">
          <section className="p-16 rounded-xl shadow-neutralLightGray bg-gray-100"></section>
          <section className="flex flex-col items-start justify-start gap-3 h-full">
            <h1 className="text-3xl font-semibold">{integrationData?.name}</h1>
            <p className="text-linkAccent text-xl font-semibold mt-3">
              {integrationData?.id}
            </p>
            {integrationData?.dueDate ? (
              <p className="text-successAccent font-semibold">{`Due Date: After ${timeLeft(
                integrationData?.dueDate
              )}`}</p>
            ) : null}
          </section>
        </section>
        <p className="text-neutralDarkGray text-sm">
          {integrationData?.description}
        </p>
      </section>
      <section className="w-full">
        <Show>
          <Show.When isTrue={!!currentPageData}>
            <DataTable columns={MutatedColumnDef} data={currentPageData!} />
          </Show.When>
        </Show>
      </section>
    </section>
  );
};

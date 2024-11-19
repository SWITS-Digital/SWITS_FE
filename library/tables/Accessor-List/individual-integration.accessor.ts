"use client";

import { ColumnDef } from "@tanstack/react-table";

import { companyListDataType } from "../../interfaces/screens/integration.type";
import { IndividualIntegrationEnum } from "../../enum/integration.enum";

export const IndividualIntegrtionCloumnDef: ColumnDef<companyListDataType>[] = [
  {
    id: IndividualIntegrationEnum.COMPANY_NAME,
    accessorKey: IndividualIntegrationEnum.COMPANY_NAME,
    header: "Company Name",
  },
  {
    id: IndividualIntegrationEnum.NO_OF_USERS,
    accessorKey: IndividualIntegrationEnum.NO_OF_USERS,
    header: "Number of Users",
  },
  {
    id: IndividualIntegrationEnum.INTEGRATION_DATE,
    accessorKey: IndividualIntegrationEnum.INTEGRATION_DATE,
    header: "Date of Integration",
  },
  {
    id: IndividualIntegrationEnum.DUE_DATE,
    accessorKey: IndividualIntegrationEnum.DUE_DATE,
    header: "Due Date for Renewal",
  },
  {
    id: IndividualIntegrationEnum.STATUS,
    accessorKey: IndividualIntegrationEnum.STATUS,
    header: "Status",
  },
  {
    id: IndividualIntegrationEnum.ACTIONS,
    accessorKey: IndividualIntegrationEnum.ACTIONS,
    header: "Actions",
  },
];

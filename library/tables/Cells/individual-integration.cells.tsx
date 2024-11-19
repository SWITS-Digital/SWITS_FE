import { Row } from "@tanstack/react-table";

import { cn, formatDate } from "@/library/utils";

import { companyListDataType } from "@/library/interfaces/screens/integration.type";
import { IndividualIntegrationEnum } from "@/library/enum/integration.enum";
import { integrationStatusEnum } from "@/library/enum/status.enum";

import { Trash } from "lucide-react";

export const CompanyNameCell = ({ row }: { row: Row<companyListDataType> }) => {
  const companyName = row.getValue(
    IndividualIntegrationEnum.COMPANY_NAME
  ) as string;
  return (
    <section className="flex items-center justify-center w-full">
      <p>{companyName}</p>
    </section>
  );
};

export const IntegrationDateCell = ({
  row,
}: {
  row: Row<companyListDataType>;
}) => {
  const integrationDate = row.getValue(
    IndividualIntegrationEnum.INTEGRATION_DATE
  ) as string;
  return (
    <section className="flex items-center justify-center w-full">
      <p>{formatDate(integrationDate, "DD-MM-YYYY")}</p>
    </section>
  );
};

export const DueDateCell = ({ row }: { row: Row<companyListDataType> }) => {
  const dueDate = row.getValue(IndividualIntegrationEnum.DUE_DATE) as string;
  return (
    <section className="flex items-center justify-center w-full">
      <p>{formatDate(dueDate, "DD-MM-YYYY")}</p>
    </section>
  );
};

export const IntegrationStatusCell = ({
  row,
}: {
  row: Row<companyListDataType>;
}) => {
  const status = row.getValue(IndividualIntegrationEnum.STATUS) as string;
  const statusClassname =
    status === integrationStatusEnum.PENDING
      ? "bg-warningAccent/10 text-warningAccent border border-warningAccent"
      : status === integrationStatusEnum.OVERDUE
      ? "bg-errorAccent/30 text-errorAccent border border-errorAccent"
      : status === integrationStatusEnum.PAID
      ? "bg-successAccent/30 text-successAccent border border-successAccent"
      : "bg-successAccent/30 text-successAccent border border-successAccent";
  return (
    <section className="flex items-center justify-center w-full">
      <p
        className={cn(
          "px-2 py-1 rounded-sm text-xs text-center w-20",
          statusClassname
        )}
      >
        {status}
      </p>
    </section>
  );
};

export const RemoveActionCell = ({
  row,
}: {
  row: Row<companyListDataType>;
}) => {
  return (
    <section className="flex items-center justify-center w-full">
      <Trash className="text-errorAccent text-sm cursor-pointer" />
    </section>
  );
};

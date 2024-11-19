import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/library/components/card";

import { daysLeft, clippedText } from "@/library/utils";

import { JobBoardType } from "@/library/interfaces/screens/integration.type";

export const IntegrationCardComponent = ({ data }: { data: JobBoardType }) => {
  return (
    <Link href={`/admin/integrations/${data.id}`}>
      <Card className="max-w-[250px] shadow-neutralLightGray cursor-pointer">
        <CardHeader className="p-1">
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="p-2 h-40">
          <section className="flex flex-col items-center justify-center gap-3 w-full">
            <section className="flex items-center justify-start w-full gap-5">
              <section className="p-6 rounded-xl shadow-sm shadow-neutralLightGray"></section>
              <section className="flex flex-col items-start justify-between gap-1">
                <p className="font-semibold text-xl text-secondary">
                  {data.name}
                </p>
                {data.dueDate ? (
                  <p className="text-sm font-semibold">{`Due Date: ${daysLeft(
                    data.dueDate
                  )} Days Left`}</p>
                ) : null}
              </section>
            </section>
            <section className="text-sm text-neutralLightGray">
              <p>{clippedText(data.description, 130)}</p>
            </section>
          </section>
        </CardContent>
      </Card>
    </Link>
  );
};

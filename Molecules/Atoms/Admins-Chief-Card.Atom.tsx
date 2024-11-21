import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/library/components/card";

import { cn } from "@/library/utils";

import { AdminsChiefContent } from "@/library/content/admin/chief-admins.content";

import { AdminsChiefDataType } from "@/library/interfaces/screens/adminschief.type";

export const AdminChiefCardComponent = ({
  data,
}: {
  data: AdminsChiefDataType;
}) => {
  const commonLabelStyle = "text-secondary text-sm";
  const commonSectionStyle =
    "flex flex-col items-start justify-start gap-2 w-full";
  return (
    <Link href={"/"}>
      <Card className="min-w-[380px] max-w-[380px] shadow-neutralLightGray cursor-pointer">
        <CardHeader className="p-0">
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="p-2 h-52">
          <section className="flex items-center justify-center gap-1 w-full h-full">
            <section className="w-full h-full rounded-lg overflow-hidden bg-stone-400">
              <Image
                src={data.image}
                className="w-full h-full object-cover"
                alt={data.name}
                objectFit="cover"
                width={200}
                height={200}
              />
            </section>
            <section className="flex flex-col items-center justify-between w-full h-full px-1">
              <section className="flex items-center justify-between w-full">
                <section className={commonSectionStyle}>
                  <p className={commonLabelStyle}>
                    {AdminsChiefContent.nameLabel}
                  </p>
                  <p className="text-lightBlack font-bold">{data.name}</p>
                </section>
                <section className={commonSectionStyle}>
                  <p className={commonLabelStyle}>
                    {AdminsChiefContent.idLabel}
                  </p>
                  <p className="text-linkAccent font-bold">{data.switsId}</p>
                </section>
              </section>
              <section className={commonSectionStyle}>
                <p className={commonLabelStyle}>
                  {AdminsChiefContent.managingLabel}
                </p>
                <p className="text-lightBlack font-bold">{data.companiesManaging}</p>
              </section>
              <section className="flex items-center justify-between w-full gap-4">
                <section className={cn(commonSectionStyle, "border border-primary rounded-lg text-center flex flex-col items-center p-2")}>
                  <p className={cn(commonLabelStyle, 'text-center')}>
                    {AdminsChiefContent.totalUserLabel}
                  </p>
                  <p className="text-lightBlack font-bold">{data.totalUsers}</p>
                </section>
                <section className={cn(commonSectionStyle, "border border-primary rounded-lg text-center flex flex-col items-center p-2")}>
                  <p className={cn(commonLabelStyle, 'text-center')}>
                    {AdminsChiefContent.revenueLabel}
                  </p>
                  <p className="text-cen">{data.revenue}</p>
                </section>
              </section>
            </section>
          </section>
        </CardContent>
      </Card>
    </Link>
  );
};

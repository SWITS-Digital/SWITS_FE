"use client";

import { useContext, useEffect, useMemo, useRef } from "react";
import { AsideBarContext } from "@/store/context/Active-Page.context";
import { CurrencyHandleContext } from "@/store/context/Currency-Exchange.context";
import { RoutesListEnum } from "@/library/enum/routes.enum";

import { PageLabel } from "@/library/components/page-label";
import { AdminsChiefContent } from "@/library/content/admin/chief-admins.content";

import AdminsChiefMockJSON from "@/library/Iterator/admins-chiefs.iterator.json";

import { Button } from "@/library/components/buttons";
import { AdminChiefCardComponent } from "@/Molecules/Atoms/Admins-Chief-Card.Atom";

import { FetchCurrencyObj } from "@/library/hooks/CurrencyExchange";

export const ConsolidatedChiefAdminViewComponent = () => {
  const hasFetched = useRef<boolean>(false);

  const routesContext = useContext(AsideBarContext);
  const {
    data,
    HandleCurrencyConverter,
    HandleDefaultCurrencyChange,
    HandleExchangeRate,
  } = useContext(CurrencyHandleContext);

  const memoizedCurrency = useMemo(() => {
    return {
      base: data.convertCurrency.base,
      to: data.convertCurrency.to,
      amount: 1,
      apiKey: process.env.NEXT_PUBLIC_ANY_API_IO,
    };
  }, [data.convertCurrency]); // Depend on only relevant values

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true; // Mark as fetched
      const madeApiCall = async() => {
        const value = await FetchCurrencyObj(memoizedCurrency);
        HandleExchangeRate(value.rate);
      };
      madeApiCall();
    }
  }, [memoizedCurrency]);

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
          return <AdminChiefCardComponent key={ele.switsId} data={ele} />;
        })}
      </section>
    </section>
  );
};

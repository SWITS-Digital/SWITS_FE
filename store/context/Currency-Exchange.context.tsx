import React, { createContext, useState, useEffect } from "react";

import { currencyExchangeBodyType } from "@/library/interfaces/services/currency.type";

import { CurrencyListEnum } from "@/library/enum/currency.enum";

type excludeAmount = Omit<currencyExchangeBodyType, "amount">;

type CurrencySelectedType = {
  // ActiveCurrency: CurrencyListEnum;
  convertCurrency: excludeAmount;
  exchangeRate: number;
};

type CurrencySelectorHandlerType = {
  data: CurrencySelectedType;
  HandleDefaultCurrencyChange: (currency: CurrencyListEnum) => void;
  HandleCurrencyConverter: (obj: excludeAmount) => void;
  HandleExchangeRate: (rate: number) => void;
};

export const CurrencyHandleContext = createContext<CurrencySelectorHandlerType>(
  {
    data: {
      // ActiveCurrency: CurrencyListEnum.USD,
      convertCurrency: {
        base: CurrencyListEnum.USD,
        to: CurrencyListEnum.USD,
      },
      exchangeRate: 0,
    },
    HandleCurrencyConverter: () => {},
    HandleDefaultCurrencyChange: () => {},
    HandleExchangeRate: () => {},
  }
);

function HandleCurrencyProvider({ children }: { children: React.ReactNode }) {
  const [ActiveCurrency, setActiveCurrency] = useState<CurrencySelectedType>({
    // ActiveCurrency: CurrencyListEnum.USD,
    convertCurrency: {
      base: CurrencyListEnum.USD,
      to: CurrencyListEnum.USD,
    },
    exchangeRate: 0,
  });

  function HandleDefaultCurrencyChange(currency: CurrencyListEnum) {
    setActiveCurrency((prev) => ({
      ...prev,
      convertCurrency: {
        base: prev.convertCurrency.base,
        to: currency,
      },
    }));
  }

  function HandleCurrencyConverter(obj: excludeAmount) {
    setActiveCurrency((prev) => ({ ...prev, convertCurrency: obj }));
  }

  function HandleExchangeRate(rate: number) {
    setActiveCurrency((prev) => ({ ...prev, exchangeRate: rate }));
  }

  const value = {
    data: ActiveCurrency,
    HandleDefaultCurrencyChange,
    HandleCurrencyConverter,
    HandleExchangeRate,
  };

  return (
    <CurrencyHandleContext.Provider value={value}>
      {children}
    </CurrencyHandleContext.Provider>
  );
}

export default HandleCurrencyProvider;

import { CurrencyListEnum } from "@/library/enum/currency.enum";

export interface currencyExchangeBodyType {
  base: CurrencyListEnum;
  to: CurrencyListEnum;
  amount: number;
}

export interface currencyExchangeResponseType {
  base: CurrencyListEnum;
  to: CurrencyListEnum;
  amount: number;
  converted: number;
  rate: number;
  lastUpdate: number;
}

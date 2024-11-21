import dynamicApiCall from "."; //, { setBaseUrl }

import { currencyExchangeResponseType } from "@/library/interfaces/services/currency.type";

// setBaseUrl(process.env.NEXT_PUBLIC_ANY_API_BASE_URL);

class AnyApiService {
  /**
   * Get a value of conversion rate by comparing currencies exchange rate.
   * @param {Record<string, any>} params - Query parameters.
   */
  public async getCurrencyVal(
    params?: Record<string, any>
  ): Promise<{ data: currencyExchangeResponseType; status: number }> {
    return dynamicApiCall("/api/cors/anyApi", "GET", { params });
  }
}

export default AnyApiService;

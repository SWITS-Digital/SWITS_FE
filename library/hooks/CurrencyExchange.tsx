import AnyApiService from "@/services/generate/any-API.generate";

const anyApiResourceService = new AnyApiService();

export const FetchCurrencyObj = async (params?: Record<string, any>) => {
  const ApiResponse = await anyApiResourceService.getCurrencyVal(params);

  return ApiResponse.data;
};

export enum ERestMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

import { Api } from "./generate"; //FaultsAPIError
import { API_HOST } from "@/library/utils/constants";

export function createApi(token?: string, isProApp = false) {
  return new Api({
    baseUrl: API_HOST(),
    securityWorker: () =>
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {},
  });
}

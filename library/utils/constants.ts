import getConfig from "next/config";

function makeMandatoryVar(
  name: string,
  getter: (input: any) => string | undefined
): () => string {
  return () => {
    const config = getConfig();
    const publicConfig = config.publicRuntimeConfig;
    const value = getter(publicConfig);

    if (!value) {
      throw new Error(`${name} is a required ENV variable.`);
    }
    return value;
  };
}

export const API_HOST = makeMandatoryVar('NEXT_PUBLIC_HOST', ({ publicWebHost }) => publicWebHost);
export const API_URL = makeMandatoryVar('NEXT_PUBLIC_API_URL', ({ publicAPIURL }) => publicAPIURL);
export const ANY_API_IO = makeMandatoryVar('NEXT_PUBLIC_ANY_API_IO', ({ anyAPIIO }) => anyAPIIO);

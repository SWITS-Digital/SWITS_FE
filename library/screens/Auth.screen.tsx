import React, { useMemo } from "react";
import { AppLogoComponent } from "@/Molecules/Atoms/Logo.Atom";

export const AuthPageParent = ({ children }: { children: React.ReactNode }) => {
  const SwitsLogoBanner = useMemo(() => {
    return <AppLogoComponent />;
  }, []);

  return (
    <main className="flex items-center justify-between w-full overflow-x-hidden">
      <section className="bg-gray-400 h-full w-2/4"></section>
      <section className="flex flex-col items-center justify-start w-2/4 min-h-screen py-10">
        {SwitsLogoBanner}
        {children}
      </section>
    </main>
  );
};

"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const PageLabel = ({
  text,
  goBack = false,
  children,
}: {
  text: string;
  goBack?: boolean;
  children?: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <section
      className={`flex items-center w-full ${
        children ? "justify-between" : "justify-start"
      }`}
    >
      <section className="text-secondary font-bold flex items-center justify-start gap-1.5 text-xl">
        {goBack ? (
          <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        ) : null}
        <p>{text}</p>
      </section>
      {children ? children : null}
    </section>
  );
};

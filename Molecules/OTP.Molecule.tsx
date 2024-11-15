"use client";

import React, { useState, useMemo } from "react";

import { AuthPageParent } from "@/library/screens/Auth.screen";
import { AuthVerificationPageContent } from "@/library/content/auth.content";

import { OTPCollectionFields } from "./Atoms/OtpFields.Atom";
import { Button } from "@/library/components/button";

export function OneTimePwordComponent() {
  const [otpValue, setOtpValue] = useState<string>("");
  const memorizedOTPFields = useMemo(() => {
    return (
      <OTPCollectionFields otpValue={otpValue} setOtpValue={setOtpValue} />
    );
  }, [otpValue]);
  return (
    <AuthPageParent>
      <section className="flex flex-col items-center justify-center gap-10 pt-10 w-9/12 max-w-[500px]">
        <section className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-semibold text-lightBlack">
            {AuthVerificationPageContent.title}
          </h1>
          <p className="text-sm text-lightBlack/70 text-center w-full">
            {AuthVerificationPageContent.description}
          </p>
        </section>
        <section className="flex flex-col items-center justify-center gap-6">
          {memorizedOTPFields}
          <p className="text-sm">
            {AuthVerificationPageContent.resend}
            <strong className="ml-1.5 underline text-linkAccent cursor-pointer">
              Resend
            </strong>
          </p>
        </section>
        <Button
          className="w-10/12 mt-16"
          disabled={!(!!otpValue && otpValue.length === 6)}
        >
          Submit
        </Button>
      </section>
    </AuthPageParent>
  );
}

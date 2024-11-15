import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/library/components/input-otp";

export const OTPCollectionFields = ({
  otpValue,
  setOtpValue,
}: {
  otpValue: string;
  setOtpValue: (value: string) => void;
}) => {
  const TOTAL_SLOTS = 6;

  const onValidChange = (e: string) => {
    const regex = "^[0-9]+$";
    if (e === "" || e.match(regex)) {
      setOtpValue(e);
    }
  };
  

  return (
    <InputOTP
      maxLength={TOTAL_SLOTS}
      value={otpValue}
      onChange={onValidChange}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

const AuthIdentifier = "Username";
export const AuthThreshold = {
  min: 3,
  max: 30,
};
export const PasswordThreshold = {
  min: 6,
};

export const AuthPageContent = {
  companyName: "Smartwork IT services",
  productName: "Application Tracking System",
  authForm: {
    identifier: AuthIdentifier,
    password: "Password",
    errorMessages: {
      identifier: {
        required: `${AuthIdentifier} is required`,
        min: `${AuthIdentifier} must be at least ${AuthThreshold.min} characters or more.`,
        max: `${AuthIdentifier} must be ${AuthThreshold.max} characters or less`,
      },
      password: {
        required: `Password is required`,
        min: `Password must be at least ${PasswordThreshold.min} characters`,
        regex: `Password must be alphanumeric`,
      },
    },
  },
};

export const AuthVerificationPageContent = {
  title: "Verify with OTP",
  description:
    "To ensure your security, please enter the One- Time Password (OTP) sent your registered Email Below",
  resend: `Didn't receive the OTP`,
};

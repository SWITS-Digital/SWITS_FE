"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AuthPageParent } from "@/library/screens/Auth.screen";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  AuthPageContent,
  AuthThreshold,
  PasswordThreshold,
} from "@/library/content/auth.content";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/library/components/form";
import { Input, PasswordInput } from "@/library/components/input";
import { Button } from "@/library/components/buttons";

// Define the schema with Zod
const StaticContents = AuthPageContent.authForm;
const errorMessages = StaticContents.errorMessages;
const loginSchema = z.object({
  username: z
    .string()
    .min(1, errorMessages.identifier.required)
    .min(AuthThreshold.min, errorMessages.identifier.min)
    .max(AuthThreshold.max, errorMessages.identifier.max),
  password: z
    .string()
    .min(1, errorMessages.password.required)
    .min(PasswordThreshold.min, errorMessages.password.min)
    .regex(/[a-zA-Z0-9]/, { message: errorMessages.password.regex }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function AuthComponent() {
  // Only one instance of `useForm` with Zod validation
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    getValues,
  } = form;

  const onSubmit = (data: LoginFormValues) => {
    console.log("Form Submitted:", data);
    router.push("/auth/verification");
  };

  const isDisabled = !(
    !!getValues("password")?.length && !!getValues("username")?.length
  );

  return (
    <AuthPageParent>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-5 w-8/12 max-w-[500px] pt-10"
        >
          <p className="text-lightBlack text-xl font-bold text-start w-full">
            Sign In
          </p>

          {/* Username Field */}
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-neutralDarkGray/75">{StaticContents.identifier}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Enter your ${StaticContents.identifier.toLowerCase()}`}
                    {...field}
                  />
                </FormControl>
                {errors.username ? (
                  <FormMessage>{errors.username.message}</FormMessage>
                ) : null}
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-neutralDarkGray/75">{StaticContents.password}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={`Enter your ${StaticContents.password.toLowerCase()}`}
                    {...field}
                  />
                </FormControl>
                {errors.password ? (
                  <FormMessage>{errors.password.message}</FormMessage>
                ) : null}
              </FormItem>
            )}
          />

          <Button disabled={isDisabled} type="submit" className="w-full mt-16">
            Submit
          </Button>
        </form>
      </Form>
    </AuthPageParent>
  );
}

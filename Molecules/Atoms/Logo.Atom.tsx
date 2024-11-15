import Image from "next/image";

import { AuthPageContent } from "@/library/content/auth.content";

import LogoAsset from "@/public/Assets/swits-logo.svg";
import { sizeEnum } from "@/library/enum/common.enum";

export const AppLogoComponent = ({
  companyNameColor = "primary",
  size = sizeEnum.LARGE,
}: {
  companyNameColor?: "primary" | "lightBlack";
  size?: sizeEnum;
}) => {
  const imageRatio =
    size === sizeEnum.LARGE
      ? 80
      : size === sizeEnum.MEDIUM
      ? 60
      : size === sizeEnum.SMALL
      ? 40
      : 60;
  const headTextSize =
    size === sizeEnum.LARGE
      ? "text-3xl"
      : size === sizeEnum.MEDIUM
      ? "text-xl"
      : size === sizeEnum.SMALL
      ? "text-lg"
      : "text-lg";
  return (
    <section className="flex items-center justify-between gap-3">
      <Image
        src={LogoAsset}
        width={imageRatio}
        height={imageRatio}
        alt={AuthPageContent.companyName}
      />
      <section className="flex flex-col items-end justify-center gap-1.5">
        <h1 className={`${headTextSize} font-poppins font-bold text-${companyNameColor} uppercase`}>
          {AuthPageContent.companyName}
        </h1>
        <p className="text-sm font-semibold">{AuthPageContent.productName}</p>
      </section>
    </section>
  );
};

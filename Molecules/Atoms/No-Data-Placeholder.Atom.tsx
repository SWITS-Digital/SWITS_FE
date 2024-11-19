import Image from "next/image";
import PlaceholderImg from "@/public/Assets/No-data-illustration.svg";

export const NodataPlaceHolder = () => {
  return (
    <Image
      objectFit="cover"
      src={PlaceholderImg}
      alt="No data found"
      width={180}
      height={180}
    />
  );
};

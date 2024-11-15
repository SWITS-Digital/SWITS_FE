import { sizeEnum, buttonSignalEnum } from "@/library/enum/common.enum";

export type ButtonType = {
  label?: string;
  onClick?: () => void;
  size?: sizeEnum;
  styleState?: buttonSignalEnum;
  className?: string;
};

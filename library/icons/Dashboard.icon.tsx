import React from "react";

interface DashboardIconProps extends React.SVGProps<SVGSVGElement> {}

export const DashboardIcon: React.FC<DashboardIconProps> = (props) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread all other props onto the <svg> element
    >
      <g clipPath="url(#clip0_1684_5336)">
        <path
          d="M26.9167 7.08333V9.91667H21.25V7.08333H26.9167ZM12.75 7.08333V15.5833H7.08333V7.08333H12.75ZM26.9167 18.4167V26.9167H21.25V18.4167H26.9167ZM12.75 24.0833V26.9167H7.08333V24.0833H12.75ZM29.75 4.25H18.4167V12.75H29.75V4.25ZM15.5833 4.25H4.25V18.4167H15.5833V4.25ZM29.75 15.5833H18.4167V29.75H29.75V15.5833ZM15.5833 21.25H4.25V29.75H15.5833V21.25Z"
          fill="currentColor" // Allows the color to be controlled by CSS
        />
      </g>
      <defs>
        <clipPath id="clip0_1684_5336">
          <rect width="34" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

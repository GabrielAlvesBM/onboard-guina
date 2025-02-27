import { FC, memo, JSX } from "react";
import { SvgStyle } from "../shared/types";

interface ArrowSvgProps {
  direction: "left" | "right";
  variant?: SvgStyle;
}

const iconPaths: { [key: string]: JSX.Element } = {
  "bold-left": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.79999 2H16.18C19.82 2 21.99 4.17 21.99 7.81V16.18C21.99 19.83 19.82 22 16.18 22H7.80999C4.16999 22 1.99999 19.83 1.99999 16.19V7.81C1.98999 4.17 4.15999 2 7.79999 2ZM5.45999 12.53L9.74999 16.82C9.89999 16.97 10.09 17.04 10.28 17.04C10.47 17.04 10.66 16.97 10.81 16.82C10.9495 16.6789 11.0277 16.4884 11.0277 16.29C11.0277 16.0916 10.9495 15.9011 10.81 15.76L7.79999 12.75H17.99C18.4 12.75 18.74 12.41 18.74 12C18.74 11.59 18.4 11.25 17.99 11.25H7.79999L10.81 8.24C10.9495 8.09886 11.0277 7.90843 11.0277 7.71C11.0277 7.51157 10.9495 7.32114 10.81 7.18C10.52 6.89 10.04 6.89 9.74999 7.18L5.45999 11.47C5.31954 11.6106 5.24065 11.8012 5.24065 12C5.24065 12.1988 5.31954 12.3894 5.45999 12.53Z" />
    </svg>
  ),
  "bold-right": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.53 12.53L14.24 16.82C14.09 16.97 13.9 17.04 13.71 17.04C13.52 17.04 13.33 16.97 13.18 16.82C13.0405 16.6789 12.9623 16.4884 12.9623 16.29C12.9623 16.0916 13.0405 15.9011 13.18 15.76L16.19 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H16.19L13.18 8.24C13.0405 8.09886 12.9623 7.90843 12.9623 7.71C12.9623 7.51157 13.0405 7.32114 13.18 7.18C13.47 6.89 13.95 6.89 14.24 7.18L18.53 11.47C18.6705 11.6106 18.7493 11.8012 18.7493 12C18.7493 12.1988 18.6705 12.3894 18.53 12.53Z" />
    </svg>
  ),
  "outline-left": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57 5.92969L3.5 11.9997L9.57 18.0697M20.5 11.9997H3.67"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  "outline-right": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.43 5.92969L20.5 11.9997L14.43 18.0697M3.5 11.9997H20.33"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

const ArrowSvg: FC<ArrowSvgProps> = ({ direction, variant = "outline" }) => {
  const key = `${variant}-${direction}`;

  return <span className="fill-current stroke-current">{iconPaths[key]}</span>;
};

export default memo(ArrowSvg);

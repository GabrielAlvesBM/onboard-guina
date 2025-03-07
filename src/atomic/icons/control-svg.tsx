import { FC, memo, JSX } from "react";

interface ControlSvgProps {
  status?: "default" | "selected";
  variant?: "checkbox" | "radio";
}

const iconPaths: { [key: string]: JSX.Element } = {
  "checkbox-default": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 6C2.5 4.067 4.067 2.5 6 2.5H18C19.933 2.5 21.5 4.067 21.5 6V18C21.5 19.933 19.933 21.5 18 21.5H6C4.067 21.5 2.5 19.933 2.5 18V6Z" />
    </svg>
  ),
  "checkbox-selected": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 18C22 20.2091 20.2091 22 18 22L6.00001 22C3.79086 22 2 20.2092 2 18V11.6668V6.00028C2 3.7911 3.79092 2.00022 6.00009 2.00028L12 2.00042L17.9998 2.00017C20.209 2.00007 22 3.79096 22 6.00016L22 12V18ZM10.8955 15.1969L15.8418 10.2507C16.0097 10.0827 16.0097 9.81036 15.8418 9.6424L15.2335 9.03415C15.0656 8.86617 14.7932 8.86617 14.6252 9.03415L10.5914 13.068L8.7081 11.1847C8.54014 11.0167 8.2678 11.0167 8.09982 11.1847L7.49157 11.7929C7.32361 11.9609 7.32361 12.2332 7.49157 12.4012L10.2873 15.1969C10.4552 15.3648 10.7276 15.3649 10.8955 15.1969Z"
        fill="#0B6C54"
      />
    </svg>
  ),
  "radio-default": (
    <svg
      className="overflow-visible"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.5 12C2.5 6.7533 6.7533 2.5 12 2.5C17.2467 2.5 21.5 6.7533 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.7533 21.5 2.5 17.2467 2.5 12Z" />
    </svg>
  ),
  "radio-selected": (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 12C2.5 6.7533 6.7533 2.5 12 2.5C17.2467 2.5 21.5 6.7533 21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C6.7533 21.5 2.5 17.2467 2.5 12Z"
        stroke="#0B6C54"
      />
      <path
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
        fill="#0B6C54"
      />
    </svg>
  ),
};

const ControlSvg: FC<ControlSvgProps> = ({
  status = "default",
  variant = "checkbox",
}) => {
  const key = `${variant}-${status}`;

  return <span className="fill-current stroke-current">{iconPaths[key]}</span>;
};

export default memo(ControlSvg);

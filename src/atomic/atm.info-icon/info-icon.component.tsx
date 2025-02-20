import { FC, useState } from "react";
import Text from "../atm.typography";

interface InfoIconProps {
  info: string;
}

const InfoIcon: FC<InfoIconProps> = ({ info }) => {
  const [visible, setVisible] = useState(false);

  const infoSvg = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99998 0.333313C3.31665 0.333313 0.333313 3.31665 0.333313 6.99998C0.333313 10.6833 3.31665 13.6666 6.99998 13.6666C10.6833 13.6666 13.6666 10.6833 13.6666 6.99998C13.6666 3.31665 10.6833 0.333313 6.99998 0.333313ZM7.66665 10.3333H6.33331V6.33331H7.66665V10.3333ZM7.66665 4.99998H6.33331V3.66665H7.66665V4.99998Z"
        fill="#626262"
      />
    </svg>
  );

  return (
    <span
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {infoSvg}

      {visible && (
        <div className="absolute left-full px-2xs py-3xs rounded-xs bg-light z-10">
          <Text variant="body2">{info}</Text>
        </div>
      )}
    </span>
  );
};

export default InfoIcon;

import { FC, useState } from "react";
import Text from "../atm.typography";
import InfoSvg from "../icons/info-svg";

interface InfoIconProps {
  info: string;
}

const InfoIcon: FC<InfoIconProps> = ({ info }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative text-dark"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <InfoSvg />

      {visible && (
        <div className="absolute left-full px-2xs py-3xs rounded-xs bg-light z-10">
          <Text variant="body2">{info}</Text>
        </div>
      )}
    </span>
  );
};

export default InfoIcon;

import { FC, memo } from "react";

const DownPickerSvg: FC = () => {
  return (
    <span className="fill-current">
      <svg
        className="overflow-visible"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.919 0.179688H1.07902C0.119016 0.179688 -0.360984 1.33969 0.319016 2.01969L5.49902 7.19969C6.32902 8.02969 7.67902 8.02969 8.50902 7.19969L10.479 5.22969L13.689 2.01969C14.359 1.33969 13.879 0.179688 12.919 0.179688Z" />
      </svg>
    </span>
  );
};

export default memo(DownPickerSvg);

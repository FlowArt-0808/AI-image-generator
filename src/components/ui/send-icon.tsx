import * as React from "react";
const SendIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
    className={className}
  >
    <path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.833.5 6.5 7.833M13.833.5 9.167 13.833l-2.667-6M13.833.5.5 5.167l6 2.666"
    />
  </svg>
);
export default SendIcon;

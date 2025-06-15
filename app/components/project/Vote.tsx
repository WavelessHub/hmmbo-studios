import { NextPage } from "next";

import { cn } from "@/lib/utils";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

interface Props {
  isActive: boolean;
  onClick: () => void;
  color: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const Vote: NextPage<Props> = ({ isActive, onClick, color, Icon }) => {
  return (
    <Icon
      size={20}
      onClick={onClick}
      className={cn(
        `text-${color}-500 cursor-pointer`,
        isActive && `fill-${color}-500`
      )}
    />
  );
};

export default Vote;

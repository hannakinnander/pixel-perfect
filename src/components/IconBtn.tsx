import type { PropsWithChildren } from "react";

interface IProps {
  padding: string;
}
export const IconBtn = ({ padding, children }: PropsWithChildren<IProps>) => {
  return (
    <div
      className={`p-${padding} bg-zinc-100 rounded-full cursor-pointer hover:bg-zinc-200`}
    >
      {children}
    </div>
  );
};

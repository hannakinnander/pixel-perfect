import type { PropsWithChildren } from "react";

export const IconBtn = ({ children }: PropsWithChildren) => {
  return <div className={`p-3 bg-zinc-100 rounded-full`}>{children}</div>;
};

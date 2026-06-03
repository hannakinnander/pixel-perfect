import type { PropsWithChildren } from "react";

export const IconBtn = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        "p-3 bg-zinc-200 rounded-full cursor-pointer hover:bg-zinc-300"
      }
    >
      {children}
    </div>
  );
};

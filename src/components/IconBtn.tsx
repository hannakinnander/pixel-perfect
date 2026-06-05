import type { PropsWithChildren } from "react";

interface IProps {
  disabled: boolean;
}
export const IconBtn = ({ disabled, children }: PropsWithChildren<IProps>) => {
  return (
    <button
      className={
        "p-1  bg-grey-btn text-black inc-100 rounded-full enabled:cursor-pointer aspect-square hover:bg-zinc-200 disabled:bg-disabled-btn cursor-not-allowed disabled:text-disabled"
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

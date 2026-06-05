import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div
      className={`pt-3.5 pb-3 pr-2 cursor-pointer rounded-full hover:bg-neutral-200
    ${searchValue.id === "1" && `pl-8 w-70`}
    ${searchValue.id === "2" && `pl-6.5 w-72`}
    ${searchValue.id === "3" && `pl-6.5 w-69.5`}`}
    >
      <p className="text-[0.8em]/3.5  font-semibold text-gray-800 tracking-tight">
        {searchValue.title}
      </p>
      <input
        type="text"
        placeholder={searchValue.placeholder}
        className="placeholder-gray-500 text-[0.95em] tracking-tight"
      />
    </div>
  );
};
`
`;

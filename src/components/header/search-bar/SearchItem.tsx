import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="mr-15">
      <p className="text-sm font-semibold text-gray-600">{searchValue.title}</p>
      <input type="text" placeholder={searchValue.placeholder} className="" />
    </div>
  );
};

import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div className="w-70 pl-10 rounded-full">
      <p>{searchValue.title}</p>
      <input type="text" placeholder={searchValue.placeholder} />
    </div>
  );
};

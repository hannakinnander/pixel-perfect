import type { ISearchValue } from "../../../types";

interface IProps {
  searchValue: ISearchValue;
}

export const SearchItem = ({ searchValue }: IProps) => {
  return (
    <div>
      <p>{searchValue.title}</p>
      <input type="text" placeholder={searchValue.placeholder} />
    </div>
  );
};

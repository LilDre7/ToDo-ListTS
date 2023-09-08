import { FILTERS_BUTTONS, TODO_FILTERS } from "../consts/consts";
import { FilterValue } from "./types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

export const Filter: React.FC<Props> = ({ onFilterChange, filterSelected }) => {
  // const handleClick = (filter: FilterValue) => () => {};

  return (
    <ul>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        //* ****************************** //
        const isSelected = filterSelected === key;
        const className = isSelected ? "selected" : "";
        //* ****************************** //
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

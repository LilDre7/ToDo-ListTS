import { FILTERS_BUTTONS } from "../consts/consts";
import { FilterValue } from "./types";

interface Props {
  onFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Filter: React.FC<Props> = ({
  // onFilterChange,
  filterSelected,
  handleFilterChange,
}) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        //* ****************************** //
        const isSelected = filterSelected === key;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={handleClick(key as FilterValue)}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

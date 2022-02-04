import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        // name="filter"
        value={value}
        onChange={changeFilter}
      />
    </>
  );
};

export default Filter;

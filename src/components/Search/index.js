import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="searchBar">
      <form className="form-inline">
        <h5>Filter Employees</h5>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control mr-sm-2"
          name="search"
          type="text"
          placeholder="Search Employees"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={props.handleInputChange} //@audit-issue
        >
          Search
        </button>
        <div class="form-check">
          <button
            onClick={() => props.sortAge("age")}
            type="checkbox"
            className="btn btn-outline-primary"
            id="exampleCheck1"
          >
            <label className="form-check-label" for="exampleCheck1">
              Sort by Age
            </label>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;

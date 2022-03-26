import React from "react";

function CategoryFilter({currentFilt, onFilterChange, categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={category === currentFilt ? 'selected' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

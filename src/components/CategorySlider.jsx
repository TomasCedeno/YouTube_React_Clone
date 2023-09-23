import React from "react";

function CategorySlider({ categories }) {
  return (
    <div className="ml-28 mb-8">
      <div className="tabs tabs-boxed flex-row">
        {categories.map((category, index) => {
          return <a href="/#" className="btn-ghost tab ml-3" key={index}>{category}</a>;
        })}
      </div>
    </div>
  );
}

export default CategorySlider;

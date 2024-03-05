import React from "react";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MultiSelect = () => {
  return (
    <div className="">
      <CreatableSelect
        className="bg-slate-900 text-black "
        isClearable
        options={options}
      />
    </div>
  );
};

export { MultiSelect };

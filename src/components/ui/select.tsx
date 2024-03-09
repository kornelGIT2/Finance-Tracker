"use client";
import React from "react";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: "chocolate", label: "Chocolate", color: "amber" },
  { value: "strawberry", label: "Strawberry", color: "stone" },
  { value: "vanilla", label: "Vanilla", color: "lime" },
];

const MultiSelect = ({ getTag }: any) => {
  const selectedValue = React.useRef(null);

  return (
    <CreatableSelect
      className="text-black"
      styles={{
        control: (v, l) => ({
          ...v,
          background: " rgb(15 23 42)",
          borderColor: "rgb(2,2,2)",
          textColor: "rgb(255,255,255)",
        }),
      }}
      onChange={(tag) => {
        getTag({ tag: tag });
      }}
      isClearable
      options={options}
    />
  );
};

export { MultiSelect };

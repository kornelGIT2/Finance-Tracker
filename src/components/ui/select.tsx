"use client";
import { Tag } from "@/types/types";
import React from "react";
import CreatableSelect from "react-select/creatable";
import classNames from "classnames";
import { getTags } from "@/api/expenses/action";

const options = [
  { value: "chocolate", label: "Chocolate", color: "amber" },
  { value: "strawberry", label: "Strawberry", color: "stone" },
  { value: "vanilla", label: "Vanilla", color: "lime" },
];

const MultiSelect = ({
  onChange,
}: {
  onChange: (tag: typeof CreatableSelect) => void;
}) => {
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    const gett = async () => {
      const tags = await getTags().then((tags) => {
        setTags(tags);
      });
    };

    gett();
  }, []);

  return (
    <CreatableSelect
      unstyled // Remove all non-essential styles
      classNames={{
        clearIndicator: ({ isFocused }) =>
          classNames(
            isFocused ? "text-neutral-200" : "text-neutral-200",
            "p-2",
            isFocused ? "hover:text-neutral-200" : "hover:text-neutral-400"
          ),
        // container: () => classNames(),
        control: ({ isDisabled, isFocused }) =>
          classNames(
            isDisabled ? "bg-slate-500" : "bg-slate-900",
            isDisabled
              ? "border-slate-500"
              : isFocused
              ? "border-slate-700"
              : "border-slate-700",
            "rounded",
            "border-solid",
            "border",
            isFocused && "shadow-[0_0_0_1px] shadow-slate-900",
            isFocused ? "hover:border-slate-900" : "hover:border-slate-900"
          ),
        dropdownIndicator: ({ isFocused }) =>
          classNames(
            isFocused ? "text-neutral-200" : "text-white",
            "p-2",
            isFocused ? "hover:text-neutral-200" : "hover:text-neutral-400"
          ),
        group: () => classNames("py-2"),
        groupHeading: () =>
          classNames(
            "text-neutral-400",
            "text-xs",
            "font-medium",
            "mb-1",
            "px-3",
            "uppercase"
          ),
        // indicatorsContainer: () => classNames(),
        indicatorSeparator: ({ isDisabled }) =>
          classNames(isDisabled ? "bg-neutral-700" : "bg-neutral-700", "my-2"),
        input: () => classNames("m-0.5", "py-0.5", "text-neutral-800"),
        loadingIndicator: ({ isFocused }) =>
          classNames(
            isFocused ? "text-neutral-600" : "text-neutral-200",
            "p-2"
          ),
        loadingMessage: () => classNames("text-neutral-400", "py-2", "px-3"),
        menu: () =>
          classNames(
            "bg-slate-900",
            "rounded",
            "shadow-[0_0_0_1px_rgba(0,0,0,0.1)]",
            "my-1"
          ),
        menuList: () => classNames("py-1"),
        // menuPortal: () => classNames(),
        multiValue: () => classNames("bg-neutral-100", "rounded-sm", "m-0.5"),
        multiValueLabel: () =>
          classNames(
            "rounded-sm",
            "text-neutral-800",
            "text-sm",
            "p-[3]",
            "pl-[6]"
          ),
        multiValueRemove: ({ isFocused }) =>
          classNames(
            "rounded-sm",
            isFocused && "bg-red-500",
            "px-1",
            "hover:bg-red-500",
            "hover:text-red-800"
          ),
        noOptionsMessage: () => classNames("text-neutral-400", "py-2", "px-3"),
        option: ({ isDisabled, isFocused, isSelected }) =>
          classNames(
            isSelected
              ? "bg-slate-700"
              : isFocused
              ? "bg-slate-800"
              : "bg-transparent",
            isDisabled
              ? "text-neutral-200"
              : isSelected
              ? "text-white"
              : "text-inherit",
            "py-2",
            "px-3",
            !isDisabled &&
              (isSelected ? "active:bg-slate-300" : "active:bg-slate-700")
          ),
        placeholder: () => classNames("text-neutral-50", "mx-0.5"),
        singleValue: ({ isDisabled }) =>
          classNames(
            isDisabled ? "text-neutral-400" : "text-slate-500",
            "mx-0.5"
          ),
        valueContainer: () => classNames("py-0.5", "px-2"),
      }}
      onChange={(tag) => {
        onChange(tag);
      }}
      isClearable
      options={tags}
    />
  );
};

export { MultiSelect };

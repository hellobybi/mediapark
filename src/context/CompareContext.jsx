/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";

export const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("compare"));
  const [compare, setCompare] = useState(storage || []);

  const getCompareData = (data) => {
    const isixist = compare.some((item) => item.id === data.id);
    console.log(isixist);
    if (!isixist) {
      setCompare([...compare, data]);
    }else {
      const addCompare = compare.filter((item) =>
        item.id === data.id ? onFilter(item) : item
      );
      setCompare(addCompare);
    }
  };
  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compare));
  }, [compare]);

  const onFilter = (id) => {
    const newData = compare.filter((v) => v.id !== id);
    setCompare(newData);
  };
  const deleteData = () => {
    setCompare([]);
  };

  return (
    <CompareContext.Provider
      value={{ getCompareData, compare, onFilter, deleteData }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export default CompareProvider;


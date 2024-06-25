/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";

export const ChosenContext = createContext();

const ChosenProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("chosen"));
  const [chosen, setChosen] = useState(storage || []);

  const getChosenData = (data) => {
    const isixist = chosen.some((item) => item.id === data.id);
    console.log(isixist);
    if (!isixist) {
      setChosen([...chosen, data]);
    } else {
      const addChosen = chosen.filter((item) =>
        item.id === data.id ? onAdd(item) : item
      );
      setChosen(addChosen);
    }
  };
  useEffect(() => {
    localStorage.setItem("chosen", JSON.stringify(chosen));
  }, [chosen]);

  const onAdd = (id) => {
    const oldData = chosen.filter((v) => v.id !== id);
    setChosen(oldData);
  };

  return (
    <ChosenContext.Provider value={{ getChosenData, chosen, onAdd }}>
      {children}
    </ChosenContext.Provider>
  );
};

export default ChosenProvider;

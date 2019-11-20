import React, { useState, FC } from "react";

type AddCountryFormProps = {
  onAddCountry: (data: {
    code: string;
    name: string;
    capital: string;
    population: number;
  }) => void;
};

const AddCountryForm: FC<AddCountryFormProps> = props => {
  const [newCode, setNewCode] = useState("");
  const [newName, setNewName] = useState("");
  const [newCapital, setNewCapital] = useState("");
  const [newPopulation, setNewPopulation] = useState(0);
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.onAddCountry({
          code: newCode,
          name: newName,
          capital: newCapital,
          population: newPopulation
        });
        setNewCode("");
        setNewName("");
        setNewCapital("");
        setNewPopulation(0);
      }}
    >
      <div>
        <input
          value={newCode}
          onChange={event => setNewCode(event.target.value)}
        />
      </div>
      <div>
        <input
          value={newName}
          onChange={event => setNewName(event.target.value)}
        />
      </div>
      <div>
        <input
          value={newCapital}
          onChange={event => setNewCapital(event.target.value)}
        />
      </div>
      <div>
        <input
          type="Number"
          value={newPopulation}
          onChange={event => setNewPopulation(Number(event.target.value))}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default AddCountryForm;

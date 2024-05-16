



import React, { useState } from "react";

interface InputData {
  title: string;
}

const UserInputForm: React.FC<{ onSubmit: (data: InputData) => void }> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<InputData>({ title: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UserInputForm;

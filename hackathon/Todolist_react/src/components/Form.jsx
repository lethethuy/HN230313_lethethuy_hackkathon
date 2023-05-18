import React from "react";

function Form(props) {
  // console.log(props);
  const { input, todo, setInput, setTodo } = props;
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      content: input,
      complete: false,
      isEdit: false,
    };
    // setTodo([...todo, newTodo]);
    // console.log(newTodo);
    let addTodo = [...todo];
    setTodo([...addTodo, newTodo]);
    setInput("");
  };
  console.log(todo);

  return (
    <form input className="main-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={input}
        placeholder="Enter new todo..."
        onChange={handleChange}
      ></input>
      <button className="add">Add</button>
    </form>
  );
}

export default Form;

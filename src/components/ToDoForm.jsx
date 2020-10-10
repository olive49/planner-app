import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ToDoForm = ({ onNewItem, toDos, done }) => {
  const [newToDo, setNewToDo] = useState({});
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewItem(newToDo);
    setNewToDo({});
  };

  // handleSubmit(event) {
  //   const { onNewItem } = this.props;
  //   event.preventDefault();
  //   onNewItem(this.state);
  //   this.setState({
  //     newToDo: "",
  //   });
  // }

  const onChange = (event) => {
    setNewToDo({
      toDo: event.target.value,
      id: new Date(),
      isFavorite: false,
      isDone: false,
      isEditable: false,
    });
  };

  // onChange(event) {
  //   this.setState({
  //     newToDo: event.target.value,
  //     id: new Date(),
  //     isFavorite: false,
  //     isDone: false,
  //     isEditable: false,
  //   });
  // }

  return (
    <div>
      <h2>{t("To Do List")}</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="to_do_list" />
        <input
          id="newToDo"
          favorite="false"
          name="newToDo"
          type="text"
          placeholder={t("add item to")}
          value={newToDo.toDo}
          onChange={(event) => onChange(event)}
          required
        />
        <button type="submit">{t("Submit")}</button>
        <button
          type="submit"
          style={{
            display:
              toDos.length > 1 || done.length > 1 ? "inline-block" : "none",
          }}
          onClick={() => this.props.onReset()}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;

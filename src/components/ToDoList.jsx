import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import { useTranslation } from "react-i18next";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onEditClick(event) {
    event.preventDefault();
  }

  onMove(toDoItem) {
    this.props.onMove(toDoItem);
  }

  onMoveBack(toDoItem) {
    this.props.onMoveBack(toDoItem);
  }

  onFavorite(toDoItem) {
    this.props.onFavorite(toDoItem);
  }

  onDoneFavorite(doneItem) {
    this.props.onDoneFavorite(doneItem);
  }

  onDelete(toDoItem) {
    this.props.onDelete(toDoItem);
  }

  onEditClick(toDoItem, e) {
    this.props.onEditClick(toDoItem, e);
  }

  onChange(toDoItem, e) {
    this.props.onChange(toDoItem, e);
  }

  onEnter(toDo, e) {
    this.props.onEnter(toDo, e);
  }

  render() {
    return (
      <div>
        <h2>TO DO :</h2>
        <ul>
          {this.props.toDos.map((toDo, index) => (
            <ToDoItem
              key={`${this.props.toDos.newToDo}_${index}`}
              toDo={toDo}
              onMove={(toDoItem) => this.onMove(toDoItem)}
              onMoveBack={(toDoItem) => this.onMoveBack(toDoItem)}
              onFavorite={(toDoItem) => this.onFavorite(toDoItem)}
              onDoneFavorite={(doneItem) => this.onDoneFavorite(doneItem)}
              onDelete={(toDoItem) => this.onDelete(toDoItem)}
              onEditClick={(toDoItem, e) => this.onEditClick(toDoItem, e)}
              onChange={(toDoItem, e) => this.onChange(toDoItem, e)}
              onEnter={(toDo, e) => this.onEnter(toDo, e)}
            />
          ))}
        </ul>
        <h2>DONE:</h2>
        <ul>
          {this.props.done.map((doneItem, index) => (
            <ToDoItem
              key={`${this.props.done.newToDo}_${index}`}
              toDo={doneItem}
              onMove={(toDoItem) => this.onMove(toDoItem)}
              onMoveBack={(toDoItem) => this.onMoveBack(toDoItem)}
              onFavorite={(toDoItem) => this.onFavorite(toDoItem)}
              onDoneFavorite={(doneItem) => this.onDoneFavorite(doneItem)}
              onDelete={(toDoItem) => this.onDelete(toDoItem)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

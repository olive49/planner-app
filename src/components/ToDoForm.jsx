import React, { Component } from "react";

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDo: "",
    };
  }

  handleSubmit(event) {
    const { onNewItem } = this.props;
    event.preventDefault();
    onNewItem(this.state);
    this.setState({
      newToDo: "",
    });
  }

  onChange(event) {
    this.setState({
      newToDo: event.target.value,
      id: new Date(),
      isFavorite: false,
      isDone: false,
      isEditable: false,
    });
  }

  render() {
    const { toDos } = this.props;
    const { done } = this.props;
    return (
      <div>
        <h2>To Do List</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="to_do_list" />
          <input
            id="newToDo"
            favorite="false"
            name="newToDo"
            type="text"
            placeholder="add item to list"
            value={this.state.newToDo}
            onChange={(event) => this.onChange(event)}
            required
          />
          <button type="submit">Submit</button>
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
  }
}

export default ToDoForm;

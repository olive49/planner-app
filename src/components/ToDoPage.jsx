import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

class ToDoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos:
      [
        {
          newToDo: "",
          id: "",
          isFavorite: false,
          isDone: false,
          isEditable: false,
        }
      ],
      done:
      [
        {
          newToDo: "",
          id: "",
          isFavorite: false,
          isDone: true,
        }
      ],
    }
  }

  handleDelete(itemId) {
    const newToDos = this.state.toDos.filter((a) => a != itemId);
    this.setState({ toDos: newToDos });
  }

  handleEditClick(item, e) {
    e.preventDefault()
    item.isEditable = !item.isEditable
  }

  handleUpdate(item, e){
    e.preventDefault()
    if (item.isEditable){
      let newToDosEdit = this.state.toDos.map((task) => {
        if (task.id === item.id) {
          task.newToDo = e.target.value;
        }})
        this.setState((state) => {
          return ({ toDoList : newToDosEdit })
        })
        if (e.charcode === 13) {
          return 
    }
  }
}

  handleEnter(toDo, e){
    if (e.keyCode === 13) {
      console.log(toDo)
    }  
  }

  handleMove(toDoItem) {
    this.handleDelete(toDoItem)
    toDoItem.isDone = !toDoItem.isDone
    const newDone = [toDoItem, ...this.state.done];
    this.setState(() => {
      return { done: newDone };
    });
  }

  handleMoveBack(doneItem){
    const newDones = this.state.done.filter((a) => a != doneItem);
    this.setState({ done: newDones });
    doneItem.isDone = !doneItem.isDone
    const newToDos = [doneItem, ...this.state.toDos];
    this.setState(() => {
      return { toDos : newToDos }
    })
  }

  handleOnFavorite(item) {
    let newToDosRemove = this.state.toDos.filter((a) => a != item)
    item.isFavorite = !item.isFavorite;
    {item.isFavorite ? newToDosRemove.unshift(item) : newToDosRemove.push(item)}
    let favoriteList = []
    let notFavoriteList = []
    newToDosRemove.forEach(item => {
      if (item.favorite === true) {
        favoriteList.push(item)
      } else {
        notFavoriteList.push(item)
      }
    })
    favoriteList.sort((x, y) => {
      return x.id - y.id
    })
    const orderedList = [...favoriteList, ...notFavoriteList]
    this.setState({ toDos: orderedList})
  }

  handleOnDoneFavorite(item){
    let newDoneRemove = this.state.done.filter((a) => a !=item)
    item.isFavorite = !item.isFavorite;
    {item.isFavorite ? newDoneRemove.unshift(item) : newDoneRemove.push(item)}
    let favoriteList = []
    let notFavoriteList = []
    newDoneRemove.forEach(item => {
      if (item.favorite) {
        favoriteList.push(item)
      } else {
        notFavoriteList.push(item)
      }
    })
    favoriteList.sort((x, y) => {
      return x.id - y.id
    })
    const orderedList = [...favoriteList, ...notFavoriteList]
    this.setState({ done: orderedList})
  }

  handleOnNewItem(newToDo) {
    this.setState((state) => {
        return {
        toDos: [newToDo, ...state.toDos],
      }
    });
  }

  handleOnReset(){
    this.setState({
      toDos: [],
      done: []
    })
  }

  render() {
    return (
      <div>
        <ToDoForm onNewItem={(newToDo) => this.handleOnNewItem(newToDo)}
        toDos = {this.state.toDos}
        done = {this.state.done}
        onReset={() => this.handleOnReset()}
        />
        <ToDoList
          toDos={this.state.toDos}
          done={this.state.done}
          onFavorite={(item) => this.handleOnFavorite(item)}
          onDoneFavorite={(item) => this.handleOnDoneFavorite(item)}
          onDelete={(itemId) => this.handleDelete(itemId)}
          onEditClick={(item, e) => this.handleEditClick(item, e)}
          onChange={(item, e) => this.handleUpdate(item, e)}
          onEnter={(item, e) => this.handleEnter(item, e)}
          onMove={(toDoItem) => this.handleMove(toDoItem)}
          onMoveBack={(item) => this.handleMoveBack(item)}
        />
      </div>
    );
  }
}

export default ToDoPage;

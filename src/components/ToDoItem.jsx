import React, { Component } from "react";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineDelete,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

class ToDoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toDo } = this.props;
    
    let moveButton;
    {toDo.isDone? moveButton = <button onClick={() => this.props.onMoveBack(toDo)}><AiOutlineArrowUp /></button> :
      moveButton = <button onClick={() => this.props.onMove(toDo)}><AiOutlineArrowDown /></button>}

    let favButton;
    {toDo.isDone? favButton = <button onClick={() => this.props.onDoneFavorite(toDo)}>{toDo.isFavorite ? <AiFillStar /> : <AiOutlineStar />}</button> : favButton = <button onClick={() => this.props.onFavorite(toDo)}>{toDo.isFavorite ? <AiFillStar /> : <AiOutlineStar />}</button>}

    return (
      <div style={{display: toDo.newToDo==="" ? 'none' : 'block' }}>
      <li>
        {moveButton}
        <input
          type="text"
          id={toDo.newToDo}
          value={toDo.newToDo}
          onChange={(e) => this.props.onChange(toDo, e)}
          onKeyDown={(e) => this.props.onEnter(toDo, e)}
        />
        {favButton}
        <button style={{display: toDo.isDone ? 'none' : 'inline-block' }} onClick={(e) => this.props.onEditClick(toDo, e)}>
          <FiEdit2 />
        </button>
        <button style={{display: toDo.isDone ? 'none' : 'inline-block' }} onClick={() => this.props.onDelete(toDo)}>
          <AiOutlineDelete />
        </button>
      </li>
      </div>
    );
  }
}


export default ToDoItem;

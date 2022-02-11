import React, { useState } from 'react';
import { removeCatByName, updateCatByName } from '../../services/api/cat';
import { removeUserByName, updateUserByName } from '../../services/api/user';
import { ApiError, CatDTO, UserDTO } from '../../services/openapi';


type TodoItemProps = {
    deleteTodo: (name: string) => void;
    error?: ApiError;
    todo: CatDTO;
    updateTodo: (name: string, todo: CatDTO) => void;
};

const TodoItem = ({ todo, updateTodo, deleteTodo }: TodoItemProps) => {
    return (
        <div className='Card'>
            <div className='Card--text'>
                <h3>Cat name - {todo.name}</h3>
                <h5>Tail Length - {todo.tailLength}</h5>
            </div>
            <div className='Card--button'>
                <button
                    onClick={() => {
                        window.location.reload();
                        removeCatByName(todo.name)
                    }}
                    className='Card--button__delete'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
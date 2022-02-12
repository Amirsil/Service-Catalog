import React from 'react';
import { removeUserByName, updateUserByName } from '../../services/api/user';
import { ApiError, CreateUserDTO, UserDTO } from '../../services/openapi';


type TodoItemProps = {
    deleteTodo: (name: string) => void;
    error?: ApiError;
    todo: UserDTO;
    updateTodo: (name: string, todo: CreateUserDTO) => void;
};

const TodoItem = ({ todo, updateTodo, deleteTodo }: TodoItemProps) => {
    return (
        <div className='Card'>
            <div className='Card--text'>
                <h1>{todo.name}</h1>
                <span>{todo.cats}</span>
            </div>
            <div className='Card--button'>

                <button
                    onClick={() => removeUserByName(todo.name)}
                    className='Card--button__delete'
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
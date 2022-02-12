import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { ApiError, CatDTO, CreateCatDTO, CreateUserDTO, UserDTO } from './services/openapi';
import { createUser, getUsers, removeUserByName, updateUserByName } from './services/api/user';
import AddUser from './features/user/AddUser';
import { UserItem } from './features/user';
import { createCat, getCats, removeCatByName, updateCatByName } from './services/api/cat';
import { AddCat, CatItem } from './features/cat';

function App() {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [cats, setCats] = useState<CatDTO[]>([]);
  const [error, setError] = useState<ApiError | null>();


  const handleSaveUser = useCallback((e: React.FormEvent, formData: CreateUserDTO) => {
    e.preventDefault();
    createUser(formData)
      .then((user) => user)
      .catch((err) => setError(err))
  }, [])

  const handleUpdateTodo = useCallback((name: string, todo: CreateUserDTO) => {
    updateUserByName(name, todo)
      .then((updatedTodo) => updatedTodo)
      .catch((err) => setError(err));
  }, []);

  const handleDeleteTodo = useCallback((name: string) => {
    removeUserByName(name)
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    getUsers()
      .then((allTodos) => {
        console.log(allTodos)
        setUsers(allTodos)
      })
      .catch((error) => setError(error));
  }, []);



  const handleSaveCat = useCallback((e: React.FormEvent, formData: CreateCatDTO) => {
    e.preventDefault();
    createCat(formData)
      .then((user) => user)
      .catch((err) => setError(err))
  }, [])

  const handleUpdateCat = useCallback((name: string, todo: CreateCatDTO) => {
    updateCatByName(name, todo)
      .then((updatedTodo) => updatedTodo)
      .catch((err) => setError(err));
  }, []);

  const handleDeleteCat = useCallback((name: string) => {
    removeCatByName(name)
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    getCats()
      .then((allTodos) => {
        console.log(allTodos)
        setCats(allTodos)
      })
      .catch((error) => setError(error));
  }, []);


  return (
    <main className='App'>
      <h1>My Cats</h1>
      <AddCat saveTodo={handleSaveCat} />
      {cats.map((todo: CatDTO) => (
        <CatItem
          key={todo.name}
          updateTodo={handleUpdateCat}
          deleteTodo={handleDeleteCat}
          todo={todo}
        />
      ))}
    </main>
  );
};


export default App;

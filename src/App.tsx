import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/todos'}>Todos</NavLink>
            </div>
            <Routes>
                <Route element={<UserPage/>} path={'/users'}/>
                <Route element={<UserItemPage/>} path={'/user/:id'}/>
                <Route element={<TodosPage/>} path={'/todos'}/>
                <Route element={<TodoItemPage/>} path={'/todo/:id'}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
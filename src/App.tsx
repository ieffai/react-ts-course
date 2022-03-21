import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import TodosPage from "./components/TodosPage";
import UserPage from "./components/UserPage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Routes>
          <Route element={<UsersPage />} path="/users" />
          <Route element={<TodosPage />} path="/todos" />
          <Route element={<UserPage />} path="/users/:id" />
          <Route element={<TodoPage />} path="/todos/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

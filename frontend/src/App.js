// 


import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import User from './Components/User';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import "./App.css"

export const config = {
  endpoint: 'https://users-database-task.onrender.com/users',
};

function App() {
  console.log('hello world', config.endpoint);
  return (
    <SnackbarProvider>
      <Router>
        <Routes>
          {/* Redirect root ("/") to "/users" */}
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          {/* Fallback route for unmatched paths */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

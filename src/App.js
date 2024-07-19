import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/user/actions';

// Pages
import LoginPage from './pages/Login';

const App = () => {
  const testSelector = useSelector((state) => state.testSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;

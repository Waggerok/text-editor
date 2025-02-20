import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;

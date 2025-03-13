import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import RootRouter from './Routes/RootRouter';
import './App.css';

// import Button from './Components/Buttons/Button'
import Footer from './Components/Footer/Footer.tsx'
import Header from './Components/Header/Header.tsx'
import Signup from './Signup.tsx';

const baseName = import.meta.env.VITE_BASE_NAME;

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<RootRouter />} />),
  { basename: baseName }
);

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <Provider store={store}>
      {/* <Button name="Subscribe" handleClick={ ()=> console.log("working") }/> */}
      <Header />
      <Signup/>


      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </PersistGate>

      <h2> working</h2>
      <Footer />

    </Provider>
  );
}

export default App;

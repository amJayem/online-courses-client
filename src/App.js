import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/Routes';

function App() {
  
  return (
    <div className="container bg-orange-50">
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
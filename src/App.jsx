import { AppProvider } from './AppContext';
import AppUI from './AppUI';

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;

import Routes from "Routes";
import { SnackbarProvider } from 'notistack';

function App() {

  if (!localStorage.getItem('user')) {
    localStorage.setItem('user', "{}");
  }
  
  return (
    <SnackbarProvider maxSnack={3}>
      <Routes />
    </SnackbarProvider>
  );
}

export default App;

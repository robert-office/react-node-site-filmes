import Routes from "Routes";

function App() {

  if ( !localStorage.getItem('user')) {
    localStorage.setItem('user', "{}");
  }

  return (
    <Routes/>
  );
}

export default App;

import QueryProvider from "./components/QueryProvider";
import Router from "./components/Router";

function App() {
  return (
    <QueryProvider>
      <Router />
    </QueryProvider>
  );
}

export default App;

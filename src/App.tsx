import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen max-w-screen-sm mx-auto">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;

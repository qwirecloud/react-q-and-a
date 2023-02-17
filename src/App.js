import { QueryClientProvider, QueryClient } from "react-query";
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import { AddTask } from "./AddTask";
import { ListTasks } from "./ListTasks";
import { Header } from "./Header";
import { BulkActionsPage } from "./bulk-actions/BulkActionsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div className="bg-gray-400 h-full">
                <div className="container mx-auto py-5 flex flex-col gap-5">
                  <Header />
                  <AddTask />
                  <ListTasks />
                </div>
              </div>
            )}
          />
          <Route path="/actions" component={() => <BulkActionsPage />} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

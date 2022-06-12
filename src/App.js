import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import HomePage from "./components/HomePage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import "./App.css";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;

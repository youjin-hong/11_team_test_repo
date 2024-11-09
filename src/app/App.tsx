import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/detail/:portfolio_id" element={<DetailPage />} />
          <Route path="/edit_portfolio" element={<EditPortfolioPage />} />
          <Route
            path="/edit_portfolio/:portfolioId"
            element={<EditPortfolioPage />}
          />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/edit_profile" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

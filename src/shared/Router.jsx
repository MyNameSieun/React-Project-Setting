import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Rtk from 'pages/Rtk/Rtk';
import ReactQuery from 'pages/ReactQuery/ReactQuery';
import PropsDrilling from 'pages/PropsDrilling/PropsDrilling';
import CreateAsyncThunk from 'pages/CreateAsyncThunk/CreateAsyncThunk';
import JsonServer from 'pages/JsonServer/JsonServer';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/props-drilling" element={<PropsDrilling />} />
        <Route path="/rtk" element={<Rtk />} />
        <Route path="/json-server" element={<JsonServer />} />
        <Route path="/create-async-thunk" element={<CreateAsyncThunk />} />
        <Route path="/react-query" element={<ReactQuery />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

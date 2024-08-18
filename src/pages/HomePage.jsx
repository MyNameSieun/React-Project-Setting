import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <div>
        <Link to="/props-drilling">PropsDrilling</Link>
      </div>
      <div>
        <Link to="/rtk">Rtk</Link>
      </div>
      <div>
        <Link to="/json-server">JsonServer</Link>
      </div>
      <div>
        <Link to="/create-async-thunk">CreateAsyncThunk</Link>
      </div>
      <div>
        <Link to="/react-query">ReactQuery</Link>
      </div>
    </main>
  );
};

export default HomePage;

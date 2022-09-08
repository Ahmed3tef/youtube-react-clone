import { VideoCard } from '../components';
import './_home.scss';

const Home = () => (
  <div className='container'>
    {[...new Array(20)].map(() => (
      <VideoCard />
    ))}
  </div>
);

export default Home;

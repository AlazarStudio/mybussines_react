import { useLocation, useParams } from 'react-router-dom';

function OneNewsPage() {
  const { title } = useParams();
  const location = useLocation();
  const news = location.state;

  return (
    <div>
      <h1>{decodeURIComponent(desc)}</h1>
      <p>{news?.title}123123</p>
    </div>
  );
}

export default OneNewsPage;

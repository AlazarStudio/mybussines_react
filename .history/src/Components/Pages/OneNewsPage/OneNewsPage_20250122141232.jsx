import { useParams } from 'react-router-dom';

function OneNewsPage() {
  const { title } = useParams();
  const location = useLocation();
  const news = location.state;

  return (
    <div>
      <h1>{decodeURIComponent(title)}</h1>
      {/* Логика отображения подробностей новости */}
{news.}
    </div>
  );
}

export default OneNewsPage;

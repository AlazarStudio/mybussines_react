import { useParams } from 'react-router-dom';

function OneNewsPage() {
  const { title } = useParams();

  return (
    <div>
      <h1>{decodeURIComponent(title)}</h1>
      {/* Логика отображения подробностей новости */}
      
    </div>
  );
}

export default OneNewsPage;

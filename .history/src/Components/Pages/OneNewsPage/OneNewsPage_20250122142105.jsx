import { useParams } from 'react-router-dom';
import { news } from '../../../../bd';

function OneNewsPage() {
  const { id } = useParams(); // Получаем id из URL
  const currentNews = news.find((item) => item.id === parseInt(id)); // Поиск новости по id

  if (!currentNews) {
    return <h1>Новость не найдена</h1>;
  }

  return (
    <div>
      <h1>{currentNews.title}</h1>
      <img src={currentNews.img} alt={currentNews.title} />
      <p>{currentNews.description}</p>
      <span>{currentNews.date}</span>
    </div>
  );
}

export default one

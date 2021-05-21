import "./BookItem.css";
import Button from "./Button";
import Rating from "./Rating";

export default function BookItem({
  src,
  title,
  author,
  rating,
  index = 0,
  onChangeRating,
  onBookmark,
  children,
}) {
  return (
    <li className="book-item" style={{ "--index": index }}>
      <img className="book-item__cover" src={src} alt="book cover" />
      <div className="book-item__content">
        <h2 className="book-item__title">{title}</h2>
        <p className="book-item__author">{author}</p>
        <Rating value={rating} onChange={onChangeRating}></Rating>
      </div>
      {onBookmark && (
        <div>
          <Button variant="transparent" onClick={onBookmark}>
            <i className="bi bi-bookmark"></i>
          </Button>
        </div>
      )}
    </li>
  );
}

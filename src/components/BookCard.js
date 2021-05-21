import "./BookCard.css";

export default function BookCard({ src, index = 0, title, author, children }) {
  return (
    <div className="book-card" style={{ "--index": index }}>
      <img className="book-card__cover" src={src} alt="book cover" />
      <h2 className="book-card__title">{title}</h2>
      <p className="book-card__author">{author}</p>
    </div>
  );
}

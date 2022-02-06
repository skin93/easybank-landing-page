import "./Article.css";

const Article = ({ title, excerpt, src, author }) => {
  return (
    <div className="article">
      <img className="article__img" src={src} alt={title} />
      <div className="article__content">
        <small className="article__author">{author}</small>
        <h4 className="article__title">{title}</h4>
        <p className="article__excerpt">{excerpt}</p>
      </div>
    </div>
  );
};

export default Article;

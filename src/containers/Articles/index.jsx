import "./Articles.css";
import { articles } from "./imports.js";
import { Article } from "../../components";

const Articles = () => {
  return (
    <section className="articles section-padding">
      <h1 className="articles__title">Latest Articles</h1>
      <div className="articles__list">
        {articles.map((article) => (
          <Article
            key={article.title}
            title={article.title}
            excerpt={article.excerpt}
            src={article.src}
            author={article.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;

import { Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface ArticleComponentProps {
  article: IArticle;
}

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.summary}</Card.Text>

        <Link to={`/ArticleDetails/${article.id}`}>button</Link>
      </Card.Body>
    </Card>
  );
};

export default ArticleComponent;

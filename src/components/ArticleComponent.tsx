import { Card, Button } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";

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

        <Button variant="primary" onClick={() => article.title}>
          {article.updatedAt}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleComponent;

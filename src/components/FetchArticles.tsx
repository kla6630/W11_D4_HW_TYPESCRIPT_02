import { useState, useEffect } from "react";
import ArticleComponent from "./ArticleComponent";
import { IArticle } from "../interfaces/IArticle";
import { Container, Row, Col } from "react-bootstrap";

const FetchComponent = () => {
  const URL = "https://api.spaceflightnewsapi.net/v3/articles";

  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const articlesFromApi = await response.json();
          console.log(articlesFromApi);
          setArticles(articlesFromApi);
        } else {
          console.log("Error...");
        }
      } catch (error) {
        console.log("FATAL ERROR!", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {articles.map((article, i) => {
            return <ArticleComponent key={i} article={article} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FetchComponent;

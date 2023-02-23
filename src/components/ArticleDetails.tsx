import { useEffect, useState } from "react";
import { Container, Card, } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IArticle } from "../interfaces/IArticle";

const ArticleDetails = () => {
  let params = useParams();
  console.log(params);

  const URL = "https://api.spaceflightnewsapi.net/v3/articles/";

  const [details, setDetails] = useState<IArticle>();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(URL+params.articleId);
       
        if (response.ok) {
          const detailsFromApi = await response.json();
          console.log(detailsFromApi);
          setDetails(detailsFromApi);
        } else {
          console.log("Error...");
        }
      } catch (error) {
        console.log("FATAL ERROR!", error);
      }
    };

    fetchDetails();
  }, []);

  return <Container>
  <Card className="m-5">
    <Card.Img variant="top" src={details?.imageUrl} style={{ height: "400px" }} />
    <Card.Body className="m-3 text-center">
      <Card.Title>{details?.title}</Card.Title>
      <Card.Text>{details?.summary}</Card.Text>
    </Card.Body>
  </Card>
</Container>;
};

export default ArticleDetails;

import { IAboutFilm } from "../../models/models.ts";

import { BackToHome } from "../BackToHome";
import { Card, Container, ListGroup, Placeholder } from "react-bootstrap";
import classes from "./aboutCard.module.scss";

interface IAboutCardProps {
  film: IAboutFilm;
  isLoading: boolean;
}

export const AboutCard = (props: IAboutCardProps) => {
  const { film, isLoading } = props;

  return (
    <>
      <Container bsPrefix={classes["container"]}>
        {isLoading && (
          <Placeholder as={Card} animation="wave" className={classes["placeholder"]}>
            <Placeholder xs={4} />
          </Placeholder>
        )}

        {!isLoading && (
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={film.Poster} />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <Card.Text>{film.Plot}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {film.Genre} / {film.Year}
              </ListGroup.Item>
              <ListGroup.Item>
                {film.Runtime} / {film.Rated}
              </ListGroup.Item>
              <ListGroup.Item>Director: {film.Director}</ListGroup.Item>
              <ListGroup.Item>Actors: {film.Actors}</ListGroup.Item>
            </ListGroup>
          </Card>
        )}
      </Container>

      <BackToHome />
    </>
  );
};

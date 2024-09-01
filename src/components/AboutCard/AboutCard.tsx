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
          <Card className={"flex-row"}>
            <Card.Img variant="top" src={film.Poster} style={{ width: "25rem" }} />
            <Card.Body>
              <Card.Title>{film.Title}</Card.Title>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {film.Genre} / {film.Year}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text>{film.Plot}</Card.Text>
                </ListGroup.Item>
              </ListGroup>

              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {film.Runtime} / {film.Rated}
                </ListGroup.Item>
                <ListGroup.Item>Director: {film.Director}</ListGroup.Item>
                <ListGroup.Item>Actors: {film.Actors}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        )}
      </Container>

      <BackToHome />
    </>
  );
};

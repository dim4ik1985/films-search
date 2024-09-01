import { useAppSelector, useAppDispatch } from "../../hooks";

import { Button, Form } from "react-bootstrap";

import { queryState, validationState } from "../../store/slices/changeSlice.ts";
import { fetchFilms, searchState } from "../../store/slices/searchSlice.ts";

// import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { ModalError } from "../../components/ModalError";
import { SearchResult } from "../../components/SearchResult";

export const Search = () => {
  const { input, validation } = useAppSelector((state) => state.change);
  const { films, isLoading, error } = useAppSelector(searchState);

  const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(validationState(e.target.value.length <= 0));
    dispatch(queryState(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchFilms(input));
  };

  return (
    <>
      <Form
        className={"d-flex flex-column align-items-center "}
        autoComplete={"off"}
        onSubmit={handleSubmit}
      >
        <Form.Group className={"mb-5 d-flex flex-column align-items-center"} controlId="formSearch">
          <Form.Label className={"text-uppercase fs-5"}>Search films</Form.Label>
          <Form.Control
            className={"fs-5"}
            type="text"
            placeholder="Enter movie title"
            value={input}
            ref={inputRef}
            onChange={handleChange}
          />
        </Form.Group>

        {error !== "" && <ModalError title={"Error"} error={error} />}

        <Button
          className={"px-5 fs-5"}
          variant="primary"
          name={input}
          value={input}
          type="submit"
          disabled={validation || isLoading}
        >
          {isLoading ? "Loading…" : "Поиск"}
        </Button>
      </Form>

      {films.length > 0 && <SearchResult films={films} />}
    </>
  );
};

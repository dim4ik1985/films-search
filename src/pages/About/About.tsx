import { aboutState, fetchAboutFilm } from "../../store/slices/aboutSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AboutCard } from "../../components/AboutCard";

export const About = () => {
  const { film, isLoading } = useAppSelector(aboutState);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAboutFilm(id ?? ""));
  }, [dispatch, id]);

  return <>{film && <AboutCard film={film} isLoading={isLoading} />}</>;
};

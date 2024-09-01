import { useAppSelector } from "../../hooks";

import { SearchResult } from "../../components/SearchResult";

export const Favorites = () => {
  const { filmsFavorites } = useAppSelector((state) => state.favorites);

  return (
    <>
      <SearchResult films={filmsFavorites} />
    </>
  );
};

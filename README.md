Домашнее задание к занятию «Redux Toolkit»
===

### Задание: Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"

### Цель задания

1. Научиться работать с пакетом Redux Toolkit.

Оформление на Ваш вкус. Допускает использование UI фреймворков, например React-Bootstrap, Ant Design, Prime

### Инструкция к заданию

1. Изучить стороннее [API](https://www.omdbapi.com/).
2. Создать роуты для поиска фильма (главный роут), просмотра карточки фильма, избранного.
3. Реализовать компоненты для поиска, отображения найденных фильмов, карточку одного фильма с его описанием.
4. При вводе фильма в строку поиска отправить запрос к API. Во время запроса показать прелодер.
   После успешного получения ответа убрать прелодер, показать фильмы, если таковы были найдены. Если результат
   отрицательный, показать плашку, что фильмы не найдены.
5. Любой из найденный фильмов можно добавить в "Избранное". При переключении на вкладку "Избранное" показывать фильмы,
   которые были туда добавлены. Любой фильм можно удалить из "Избранного".

Пример ответа при поиске фильма:

```json
{
  "Search": [
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      "Title": "The Terminator",
      "Year": "1984",
      "imdbID": "tt0088247",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      "Title": "Lady Terminator",
      "Year": "1989",
      "imdbID": "tt0095483",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }
  ],
  "totalResults": "124",
  "Response": "True"
}
```

Пример ответа при запросе фильма по идентификатору:

```json
{
  "Title": "Terminator 2: Judgment Day",
  "Year": "1991",
  "Rated": "R",
  "Released": "03 Jul 1991",
  "Runtime": "137 min",
  "Genre": "Action, Sci-Fi",
  "Director": "James Cameron",
  "Writer": "James Cameron, William Wisher",
  "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
  "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her 10-year old son John from an even more advanced and powerful cyborg.",
  "Language": "English, Spanish",
  "Country": "United States",
  "Awards": "Won 4 Oscars. 37 wins & 33 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "8.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "92%"
    },
    {
      "Source": "Metacritic",
      "Value": "75/100"
    }
  ],
  "Metascore": "75",
  "imdbRating": "8.6",
  "imdbVotes": "1,114,693",
  "imdbID": "tt0103064",
  "Type": "movie",
  "DVD": "13 Feb 2007",
  "BoxOffice": "$205,881,154",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```

6. Поля которые необходимо вывести в карточке товара:

+ постер фильма(Poster)
+ название фильма(Title)
+ год выпуска(Year)
+ жанр(Genre)
+ продолжительность(Runtime)
+ режиссер(Director)
+ актеры(Actors)
+ рейтинг фильма(imdbRating)

### Повышенный уровень сложности (не обязательно)

Реализовать задачу на TypeScript.



---



[![Deploy static content to Pages](https://github.com/dim4ik1985/films-search/actions/workflows/deploy.yml/badge.svg)](https://github.com/dim4ik1985/films-search/actions/workflows/deploy.yml)

---

## [Переход на сайт](https://dim4ik1985.github.io/films-search/)

# MoviesApp

This application uses *moviedb api* to allow users to fetch and search for movies.

The home screen contains a search input and a search button only as per description.
The user then is allowed to search for any movie and the list of results are viewed using a flatlist with two columns when search button is pressed.

Pagination is supported when the user reaches the end of the list the following page gets fetched and an activity indicator appears during the loading period.
Each movie item in this list contains (movie poster, movie name, movie date, and movie overview)

User can press on any movie item to navigate to the movie details screen where they can view more details about the movie and any future features can be added.

When the user presses on the search input, and only if the search bar is empty (no text written yet), a search history view appears with up to 10 previous search histories.
Where duplicates are not allowed by checking if the search name does not already exist in the history *and* it's a successful search then it can be added to the search history.

The search history is also presisted.

Note that this application has been tested only on Android devices.

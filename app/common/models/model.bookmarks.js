angular.module("app.models.bookmarks", [])
  .service("BookmarksModel", function ($http) {
    var model = this,
      URL = {FETCH: "data/bookmarks.json"},
      bookmarks;

    function extract(result) {
      return result.data;
    }

    function cacheBookmarks(result) {
      bookmarks = extract(result);
      return bookmarks;
    }

    model.getBookmarks = function () {
      return $http.get(URL.FETCH).then(cacheBookmarks);
    }
  })
;
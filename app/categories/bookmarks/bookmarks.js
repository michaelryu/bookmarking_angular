angular.module("categories.bookmarks", [
  "categories.bookmarks.create",
  "categories.bookmarks.edit",
  "app.models.categories",
  "app.models.bookmarks"
])
  .config(function ($stateProvider) {
    $stateProvider
      .state("app.categories.bookmarks", {
        url: "categories/:category",
        views: {
          "bookmarks@": {
            templateUrl: "app/categories/bookmarks/bookmarks.tmpl.html",
            controller: "BookmarksController as bookmarksList"
          }
        }
      })
  })
  .controller("BookmarksController", function ($stateParams, BookmarksModel) {
    var bookmarksList = this;
    bookmarksList.currentCategoryName = $stateParams.category;
    BookmarksModel.getBookmarks()
      .then(function (result) {
        bookmarksList.bookmarks = result;
      })
  })
;
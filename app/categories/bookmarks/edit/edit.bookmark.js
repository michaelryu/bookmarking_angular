angular.module("categories.bookmarks.edit", [])
  .config(function ($stateProvider) {
    $stateProvider
      .state("app.categories.bookmarks.edit", {
        url: "/bookmarks/:bookmarkId/edit",
        templateUrl: "app/categories/bookmarks/edit/edit.bookmark.tmpl.html",
        controller: "EditBookmarksController as edit"
      })
  })
  .controller("EditBookmarksController", function ($state, $stateParams, BookmarksModel) {
    var edit = this;

    function returnToBookmarks() {
      $state.go("app.categories.bookmarks", {
        category: $stateParams.category
      })
    }

    function updateBookmark() {
      edit.bookmark = angular.copy(edit.editedBookmark);
      BookmarksModel.updateBookmark(edit.editedBookmark);
      returnToBookmarks();
    }

    function cancelEditing() {
      returnToBookmarks();
    }

    BookmarksModel.getBookmarkById($stateParams.bookmarkId)
      .then(function (bookmark) {
        if (bookmark) {
          edit.bookmark = bookmark;
          edit.editedBookmark = angular.copy(edit.bookmark);
        } else {
          returnToBookmarks();
        }
      });

    edit.cancelEditing = cancelEditing;
    edit.updateBookmark = updateBookmark;
  })
;
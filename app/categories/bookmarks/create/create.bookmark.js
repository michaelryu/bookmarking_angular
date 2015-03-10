angular.module("categories.bookmarks.create", [])
  .config(function ($stateProvider) {
    $stateProvider
      .state("app.categories.bookmarks.create", {
        url: "/bookmarks/create",
        templateUrl: "app/categories/bookmarks/create/create.bookmark.tmpl.html",
        controller: "CreateBookmarksController as create"
      })
  })
  .controller("CreateBookmarksController", function ($state, $stateParams, BookmarksModel) {
    var create = this;

    function returnToBookmarks() {
      $state.go("app.categories.bookmarks", {
        category: $stateParams.category
      })
    }

    function cancelCreating() {
      returnToBookmarks();
    }

    function createBookmark(bookmark) {
      BookmarksModel.createBookmark(bookmark);
      returnToBookmarks();
    }

    function resetForm() {
      create.newBookmark = {
        title: "",
        url: "",
        category: $stateParams.category
      }
    }

    create.createBookmark = createBookmark;
    create.cancelCreating = cancelCreating;

    resetForm();
  })
;
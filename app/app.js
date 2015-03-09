angular.module("App", [
  "ui.router",
  "categories",
  "categories.bookmarks"
])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("app", {
        url: "",
        abstract: true
      })
    ;
    $urlRouterProvider.otherwise("/");
  })
  .controller("MainController", function ($state) {

    this.currentCategory = null;

    // Selecting and highlighting category

    this.setCurrentCategory = function (category) {
      this.currentCategory = category;
      //$state.go("app.categories.bookmarks", {category: category.name});
      this.cancelCreating();
      this.cancelEditing();
    };
    this.isCurrentCategory = function (category) {
      return this.currentCategory !== null && this.currentCategory.name === category.name;
    };

    this.isSelectedBookmark = function (bookmark) {
      return this.editedBookmark !== null && this.editedBookmark.id === bookmark.id;
    };

    // Creating and editing states
    this.isCreating = false;
    this.isEditing = false;

    this.startCreating = function () {
      this.isCreating = true;
      this.isEditing = false;
    };

    this.cancelCreating = function () {
      this.isCreating = false;
    };
    this.startEditing = function () {
      this.isCreating = false;
      this.isEditing = true;
      this.resetCreateForm();
    };
    this.cancelEditing = function () {
      this.isEditing = false;
    };
    this.shouldShowCreating = function () {
      return this.currentCategory && !this.isEditing && this.isCreating;
    };
    this.shouldShowEditing = function () {
      return this.currentCategory && !this.isCreating && this.isEditing;
    };

    // Forms

    this.editedBookmark = null;

    this.resetCreateForm = function () {
      this.newBookmark = {
        title: '',
        url: '',
        category: this.currentCategory
      }
    };
    this.createBookmark = function (bookmark) {
      bookmark.id = this.bookmarks.length;
      bookmark.category = this.currentCategory.name;
      this.bookmarks.push(bookmark);
      this.resetCreateForm();
    };

    this.setEditedBookmark = function (bookmark) {
      this.editedBookmark = angular.copy(bookmark);
    };

    this.updateBookmark = function (bookmark) {
      var index = _.findIndex(this.bookmarks, function (b) {
        return b.id == bookmark.id;
      })
      this.bookmarks[index] = bookmark;
      this.isEditing = false;
      this.editedBookmark = null;
    };

    this.deleteBookmark = function (bookmark) {
      _.remove(this.bookmarks, function (b) {
        return b.id == bookmark.id;
      })
    };
  })
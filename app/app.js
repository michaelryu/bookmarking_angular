angular.module("App", [
  "ngAnimate",
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

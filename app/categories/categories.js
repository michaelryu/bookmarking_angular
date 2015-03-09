angular.module("categories", [
  "app.models.categories"
])
  .config(function ($stateProvider) {
    $stateProvider
      .state("app.categories", {
        url: "/",
        views: {
          "categories@": {
            controller: "CategoriesController as categoriesList",
            templateUrl: "app/categories/categories.tmpl.html"
          },
          "bookmarks@": {
            controller: "BookmarksController as bookmarks",
            templateUrl: "app/categories/bookmarks/bookmarks.tmpl.html"
          }
        }
      })
  })
  .controller("CategoriesController", function (CategoriesModel) {
    var categoriesList = this;
    CategoriesModel.getCategories()
      .then(function (result) {
        categoriesList.categories = result;
      })
    ;
  })

;
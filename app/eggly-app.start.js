angular.module("app", [])

  .controller("MainController", function () {
    this.categories = [
      {"id": 0, "name": "Development"},
      {"id": 1, "name": "Design"},
      {"id": 2, "name": "Exercise"},
      {"id": 3, "name": "Humor"}
    ];

    this.bookmarks = [
      {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
      {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development"},
      {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
      {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
      {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
      {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
      {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
      {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
      {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
    ];

    this.currentCategory = this.categories[0];

    // Selecting and highlighting category

    this.setCurrentCategory = function (category) {
      this.currentCategory = category;
      this.cancelCreating();
      this.cancelEditing();
    }
    this.isCurrentCategory = function (category) {
      return this.currentCategory !== null && this.currentCategory.name === category.name;
    }

    // Creating and editing states
    this.isCreating = false;
    this.isEditing = false;

    this.startCreating = function () {
      this.isCreating = true;
      this.isEditing = false;
    }

    this.cancelCreating = function () {
      this.isCreating = false;
    }
    this.startEditing = function () {
      this.isCreating = false;
      this.isEditing = true;
      this.resetCreateForm();
    }
    this.cancelEditing = function () {
      this.isEditing = false;
    }
    this.shouldShowCreating = function () {
      return this.currentCategory && !this.isEditing && this.isCreating;
    }
    this.shouldShowEditing = function () {
      return this.currentCategory && !this.isCreating && this.isEditing;
    }

    // Forms

    this.resetCreateForm = function () {
      this.newBookmark = {
        title: '',
        url: '',
        category: this.currentCategory
      }
    }
    this.createBookmark = function (bookmark) {
      bookmark.id = this.bookmarks.length;
      this.bookmarks.push(bookmark);
      this.resetCreateForm();
    }
  })
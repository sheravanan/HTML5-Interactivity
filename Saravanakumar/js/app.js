/* Saravanakumar
 * AngularJS SPA Web Application
 */
var app = angular.module('myProfile', ['ngRoute']);

/**
 * Configuring the Routes to the view
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Profile Home
    .when("/", {templateUrl: "partials/main.html", controller: "profileCtrl"})
    // Pages
    .when("/aboutMe", {templateUrl: "partials/aboutMe.html", controller: "profileCtrl"})
    .when("/skills", {templateUrl: "partials/skills.html", controller: "profileCtrl"})
    .when("/experience", {templateUrl: "partials/experience.html", controller: "profileCtrl"})
    .when("/education", {templateUrl: "partials/education.html", controller: "profileCtrl"})
    .when("/contactMe", {templateUrl: "partials/contactMe.html", controller: "profileCtrl"});
}]);


/**
 * Navigate the Pages
 */
app.controller('profileCtrl', function ($scope) {
  
  // Tooltips
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
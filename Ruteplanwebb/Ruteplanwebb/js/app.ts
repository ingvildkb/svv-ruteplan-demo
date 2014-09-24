/// <reference path="../ts/typings/angularjs/angular.d.ts"/>
/// <reference path="../ts/typings/angularjs/angular-route.d.ts"/>
/// <reference path="../ts/typings/angularjs/angular-ui-router.d.ts"/>

var rpwApp = angular.module("rpwApp", [
    'ui.router',
    "ng-context-menu",
    "ui.bootstrap",
    'ngSanitize',
    "ngCookies",
    'rpwControllers',
    "rpwFilters",
    "rpwDirectives",
    "rpwSettings",
    "rpwWms",
    "vr.directives.slider",
    "n3-line-chart"
]);

rpwApp.config([
    '$stateProvider', '$urlRouterProvider',
    ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $urlRouterProvider.otherwise("/");
        $stateProvider.
            state('mappage', {
                url: '/?from&to',
                templateUrl: 'Views/MapView.html',
                controller: 'MapController',
                data: { title: 'SVV Ruteplan Demo', routeType: null },
                reloadOnSearch: false
            }).state('bikepage', {
                url: '/bike?from&to',
                templateUrl: 'Views/BikeView.html',
                controller: 'MapController',
                data: { title: 'Sykkelruteplanlegger', routeType: 'bike' },
                reloadOnSearch: false
            });

    }
]);

angular.module('rpwApp')
    .filter('to_trusted', [
        '$sce', function($sce) {
            return function(text) {
                return $sce.trustAsHtml(text);
            };
        }
    ]);
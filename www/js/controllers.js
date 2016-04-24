angular.module('starter.controllers', ['ionic'])

.controller('appCtrl', function($scope, $ionicModal) 
{
    $scope.currTasks = [];
    $scope.compTasks = [];
    
    $ionicModal.fromTemplateUrl('templates/tabs.html', 
    {
        scope: $scope
    })
    .then(function(modal)
    {
        $scope.modal = modal;
    });
        $scope.createTask = function(t) 
        {   
            $scope.currTasks.push({ taskItem: t.newTask + ' - ' + t.newDate});
            $scope.modal.hide();
        }

    /*$scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
    }};*/
})
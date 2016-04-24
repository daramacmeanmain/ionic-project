angular.module('starter.controllers', ['ionic'])

.controller('appCtrl', function($scope, $ionicModal) 
{
    $scope.currTasks = []; //scope for new tasks
    $scope.checkedTasks = [ //scope for checking tasks
        {
            checkedItem: "", checked: false
            
        }
            ];
   /* if(checkedItem.checked === true)
        $scope.compTasks = function(c)
            {
                $scope.compTasks.push({ taskItem: c.newTask + ' - ' + c.newDate})
            };*/
    
    //Opening modal window
    $ionicModal.fromTemplateUrl('templates/tabs.html', 
    {
        scope: $scope
    })
    .then(function(modal)
    {
        $scope.modal = modal;
    });
        //Taking in task from the user
        $scope.createTask = function(t) 
        {   
            $scope.currTasks.push({ taskItem: t.newTask + ' - ' + t.newDate});
            $scope.modal.hide();
        }
        
    
})
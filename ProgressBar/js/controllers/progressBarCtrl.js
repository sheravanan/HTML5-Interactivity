progressModule.controller("progressBarCtrl", function ($scope,contentService){
  $scope.value = 0;
  $scope.max = 100;
  $scope.showUi = false;
  $scope.isRunning = false;
// reset function
$scope.reset = function(){
$scope.value =0;

$scope.run();
};
// to run the progressbar depends on duration
$scope.run = function(){
  $scope.type = "info";
  $scope.isRunning = true;
  $scope.statusMessage = "Progress";
  $scope.status ="";
var interval = ($scope.duration/$scope.max);

        var runInterval = setInterval(function(){
          $scope.value +=1;
          if($scope.value === 100){
            $scope.isRunning =false;
            clearInterval(runInterval);
            $scope.type = "success";
            $scope.statusMessage = "This task is";
            $scope.status = "completed";
          }
          $scope.$apply();
        },interval);
};
//get the JSON value by using Angular AJAX $http method
contentService.getProgressConfig().then(function(data){
               
    $scope.getData = data.data.lightbox;
    $scope.value = $scope.getData.start;
    $scope.max = $scope.getData.finish;
    $scope.duration = $scope.getData.duration;
    $scope.showUi = true;
    $scope.run(); 

  });

});
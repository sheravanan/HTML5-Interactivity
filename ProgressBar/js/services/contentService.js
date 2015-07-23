progressModule.factory("contentService", ["$http","$q",function($http,$q){

return{

  getProgressConfig:function (){

    var deferred = $q.defer();
    $http.get("datas/data.json").success (function (data){
      
      if (data) {
        deferred.resolve(data);
      };

    }).error(function (data,status) {
      deferred.reject(data);
    });
    return deferred.promise;
  } 

}

}]);
angular.module("ShowCtrl",[]).controller("ShowController",function($scope,$http){
    $scope.retrieve_data=function(){
        $http.get("/api/contacts").then(function(res){
            console.log(res);
            $scope.receive_data=res.data;
        });
    };
}); 
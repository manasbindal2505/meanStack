angular.module("UpdateCtrl",[]).controller("UpdateController",function($scope,$http,$routeParams){
    //To get all the records in database
    $scope.retrieve_data=function(){
        $http.get("/api/contacts").then(function(res){

            $scope.receive_data=res.data;
        });
    };

    //To retrieve the selected record
    $scope.retrieve_data_ind=function(){
        $http.get("/api/contacts/"+$routeParams.id).then(function(res){
            $scope.receive_data_ind=res.data;
        });
    };

    //To save the updated record
    $scope.update_data=function(id){
        $scope.data=$scope.receive_data_ind[0];

        $http.put("/api/contacts/"+id,JSON.stringify($scope.data)).then(function(res){
        });
    };

    $scope.delete_data=function(id){
        $http.delete("/api/contacts/"+id).then(function(res){
            $scope.retrieve_data();
        })
    }
});
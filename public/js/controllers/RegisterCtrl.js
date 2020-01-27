 var a=true;
 angular.module("RegisterCtrl",[]).controller("RegisterController",function($scope,$http){
    $scope.send_data=function(){
        $http.get("/api/contacts").then(function(res){
            angular.forEach(res.data,function(value,key){
                if(value.number==$scope.form_data.number){
                    a=false;
                }
            });
            if(a){
                $http.post("/api/contacts",$scope.form_data).then(function(respo){
                    
                });
            }
            else{
                alert("Number exists.Please enter another number.")
            }
        });
    };
});
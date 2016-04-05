myApp.controller('dataController', ['$scope', '$http','linkService', function ( $scope, $http, linkService) {


    $scope.getAllTags=function(){ 
    $http({
        method : "GET",
        url :"http://localhost:8080/redis/tags"
    }).then(function successCallback(response) {
        $scope.tags = response.data;
    }, function myError(response) {
        $scope.tags = response.statusText;
    });
}

    $scope.getLastLinks=function(){ 
    $http({
        method : "GET",
        url :"http://localhost:8080/redis/links"
    }).then(function mySucces(response) {
        $scope.links = response.data.map(JSON.parse);
    }, function myError(response) {
        $scope.links = response.statusText;
    });
}


    $scope.addTags=function(tag){ 
        $scope.tagsSelected.push(tag);
        linkService.searchLinksByTag($scope.tagsSelected).then(function(response){
            $scope.links = _.compact(response.data.map(JSON.parse));
            console.log($scope.links);
        });
    }

    $scope.clearFilters=function(){
        $scope.tagsSelected=[];
        $scope.getLastLinks();
    }

    $scope.tagsSelected=[];

}]);

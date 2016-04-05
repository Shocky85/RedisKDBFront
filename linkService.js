myApp.service("linkService",['$http',function( $http ){

	var service = {
		searchLinksByTag:function(tagSelected){
			return $http({
				method : 'get',
				url : "http://localhost:8080/redis/links/"+JSON.stringify(tagSelected)
			})
			.success(function(data) {
				return data;
			}); 
		}
	};
	return service;
}]);
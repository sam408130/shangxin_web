angular.module('shangxin.controllers',[])

.controller('HomeCtrl',function($scope,$location,$http,$location,$ionicPopup,$timeout,$state,$ionicLoading,HttpFactory){



	
	$scope.currentIndex = 0;
	$scope.currentPage = 1;
	$scope.data = [Array];
	$scope.currentData = [];
	var HUD = function(template){

        $ionicLoading.show({
            template:template
        })

        $timeout(function(){
            $ionicLoading.hide()
        },1500);
    };

	$scope.changeTab = function(index){
		$scope.currentIndex = index;
		if($scope.data[index].length == 0){

			if(index == $scope.activityTitles.length){
				var params = {
					currentPage:1,
					itemPerPage:50
				};
				HttpFactory.send({
					url:API_ActivityMore,
					method:'Get',
					params:params
				}).success(function(response){
					$ionicLoading.hide();
					$scope.data[index] = response.data;
					$scope.currentData = response.data;
					if($scope.currentData.length == 0){
						HUD('暂无数据 - -!');
					}
				}).error(function(data,error){
					$ionicLoading.hide();
				});
			}else{
				var currentTitleObject = $scope.activityTitles[index];
				var params = {
					activityTime: currentTitleObject.activityTime,
					activityTypeId : currentTitleObject.activityTypeId,
					currentPage : $scope.currentPage,
					itemPerPage : 50
				};
				HttpFactory.send({
					url:API_ActivityList,
					method:'GET',
					params:params
				}).success(function(response){
					$ionicLoading.hide();
					$scope.data[index] = response.data;
					$scope.currentData = response.data;
					console.log(response.data);
				}).error(function(data,error){
					$ionicLoading.hide();
				})
			}

		}else{
			$scope.currentData = $scope.data[index];
			if($scope.currentData.length == 0){
				HUD('暂无数据 - -!');
			}
		}

		

	};



	$scope.getActivityTitles = function(){
		$ionicLoading.show('加载中...')
		HttpFactory.send({
			url:API_ActivityTitles,
			method:'get'
		}).then(function(response){
			console.log(response);
			$scope.activityTitles = response.data.data;
			for(var i=0 ; i<=$scope.activityTitles.length ; i++){
				$scope.data[i] = [];
			};

			$scope.changeTab(0);
		})
	};




	
	$scope.getActivityTitles();

	$scope.jumpToMe = function(){
		HUD('跳转到个人中心');
	};

	$scope.jumpToChart = function(){
		HUD('跳转到购物车');
	};

	$scope.jumpToActivity = function(activityId){
		$state.go('tab.activity',{id:activityId});
		console.log('jump');
	};
	
})

.controller('ActivityCtrl',function($scope){

})
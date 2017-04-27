/**
 * Created by Darshan on 1/24/2017.
 */

angular.module('starter.RescheduleCtr', ['ngStorage'])
    .controller('rescheduleCtr', function($scope, $timeout,$rootScope,$ionicLoading,$ionicPopup, $window,$stateParams,$localStorage,
                                       $state,rescheduleService,ionicMaterialInk,$ionicSideMenuDelegate) {
        $scope.clearFabs = function() {
            var fabs = document.getElementsByClassName('button-fab');
            if (fabs.length && fabs.length > 1) {
                fabs[0].remove();
            }
        };
        $timeout(function() {
            $scope.isExpanded = false;
            $scope.$parent.setExpanded(false);
            $scope.$parent.setHeaderFab('left');
            /*$scope.$parent.clearFabs();*/
            $scope.$parent.showHeader();
        }, 0);
        $timeout(function() {
            $scope.isExpanded = false;
            $scope.$parent.setExpanded(false);
        }, 300);
        ionicMaterialInk.displayEffect();

        $ionicSideMenuDelegate.canDragContent(false);

        $scope.show = function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="android" class="spinner-positive" ></ion-spinner>'
            });
        };

        $scope.hide = function(){
            $ionicLoading.hide();
        };


        debugger;






        $scope.RescheduleCall = function () {
            debugger;

            if($localStorage.accountType == 'F'){
                var  userId =  $localStorage.userId;
                var  patientId =  $localStorage.userId;
            }
            if($localStorage.accountType == 'P'){
                var  userId =  "";
                var  patientId =  $localStorage.userId;
            }


            $scope.show($ionicLoading);
            rescheduleService.ReschedulePlanService(patientId,userId).then(function(rescheduleResult){

                debugger;
                console.log("login response:" +rescheduleResult);


                debugger;
                if(rescheduleResult.responseCode == 0){
                    $scope.hide($ionicLoading);

                }

                else{
                    $scope.hide($ionicLoading);

                }
            });


        };


    }
)

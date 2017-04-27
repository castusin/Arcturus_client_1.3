/**
 * Created by Darshan on 1/24/2017.
 */

angular.module('starter.MessageCtr', ['ngStorage'])
    .controller('messageCtr', function($scope, $timeout,$rootScope,$ionicLoading,$ionicPopup, $window,$stateParams,$localStorage,
                                    $state,MessagesService,ionicMaterialInk,$ionicSideMenuDelegate) {
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






        $scope.sendMessage = function () {
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
            MessagesService.SendMessagesService(patientId,userId).then(function(messageResult){

                debugger;
                console.log("login response:" +messageResult);


                debugger;
                if(messageResult.responseCode == 0){
                    $scope.hide($ionicLoading);

                }

                else{
                    $scope.hide($ionicLoading);

                }
            });


        };


    }
)

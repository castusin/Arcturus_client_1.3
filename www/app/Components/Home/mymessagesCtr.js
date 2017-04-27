/**
 * Created by Darshan on 1/24/2017.
 */

angular.module('starter.mymessagesCtr', ['ngStorage'])
    .controller('mymessagesCtr', function($scope, $timeout,$rootScope,$ionicLoading,$ionicPopup, $window,$stateParams,$localStorage,
                                       $state,ViewMessages,ionicMaterialInk,$ionicSideMenuDelegate) {
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
            ViewMessages.ViewMessagesService(patientId,userId).then(function(viewmessageResult){

                debugger;
                console.log("login response:" +viewmessageResult);


                debugger;
                if(viewmessageResult.responseCode == 0){
                    $scope.hide($ionicLoading);

                    $scope.viewMessagesList = viewmessageResult.resultObject ;

                }

                else{
                    $scope.hide($ionicLoading);

                }
            });

        $scope.onMessageSelect = function (msg) {
            debugger;


            $localStorage.Apt_with     =   msg.Apt_with ;
            $localStorage.Type         =   msg.Type ;
            $localStorage.aptStarttime =   msg.aptStarttime ;
            $localStorage.createDate   =   msg.createDate ;
            $localStorage.emailId      =   msg.emailId ;
            $localStorage.messageText  =   msg.messageText ;
            $localStorage.phoneNumber  =   msg.phoneNumber ;

            $state.go('app.mymessagesinfo');

        };



    }
)

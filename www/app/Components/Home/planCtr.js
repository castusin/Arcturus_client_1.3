/**
 * Created by Darshan on 1/24/2017.
 */

angular.module('starter.planCtr', ['ngStorage'])
    .controller('planCtr', function($scope, $timeout,$rootScope,$ionicLoading,$ionicPopup, $window,$stateParams,$localStorage,
                                    $state,GetPlanService,cancelScheduleService,rescheduleService,MessagesService,ionicMaterialInk,$ionicSideMenuDelegate,$filter,$ionicModal) {
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



     /*   $scope.myPlanCall= function(){

            debugger;
            var  userId =  $localStorage.userId;

            var sessionId = $localStorage.sessionId;

            $scope.show($ionicLoading);

            //---isAccountExit service call---//

            GetPlanService.GetPlanDetaisService(userId,sessionId).then(function(GetPlanResult){

                debugger;
                console.log("login response:" +GetPlanResult)


                debugger;
                if(GetPlanResult.responseCode == 0){

                     $scope.planDetailsList =   GetPlanResult.resultObject;

                    $scope.hide($ionicLoading);
                    $state.go('app.plan');
                }

                else{
                    $scope.hide($ionicLoading);

                }
            });


        }
        $scope.myPlanCall();*/

        $ionicModal.fromTemplateUrl('app/Components/Home/MyPlan.html', {

            scope: $scope

        }).then(function(modal) {
                debugger;
                $scope.modal = modal;
            });


        $scope.calendar = {};
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };



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
            GetPlanService.GetPlanDetaisService(patientId,userId).then(function(GetPlanResult){

                debugger;
                console.log("login response:" +GetPlanResult);


                debugger;
                if(GetPlanResult.responseCode == 0){

                    $scope.GetNoOfPeopleMastersList =   GetPlanResult.resultObject;
                    console.log(" response:" +$scope.GetNoOfPeopleMastersList);
                    $scope.calendar.eventSource =  $scope.GetNoOfPeopleMastersList;
                    console.log($scope.calendar.eventSource);
                    $scope.hide($ionicLoading);
                    $state.go('app.plan');
                }

                else{
                    $scope.hide($ionicLoading);

                }
            });
            /*$scope.GetNoOfPeopleMastersList= [
                {allDay:false,
                endTime:"Tue Apr 18 2017 10:27:00",
                startTime:"Tue Apr 18 2017 10:27:00",
                title : "doctor visit",
               appWith : "Aex",
                aptPersonId :10000042,
                aptId: "10000001"},
                {allDay:false,
                    endTime:"Sun Apr 16 2017 22:27:00",
                    startTime:"Sun Apr 16 2017 22:27:00",
                    title : "CNA visit",
                    appWith : "robert",
                    aptPersonId :10000042,
                    aptId: "10000002"},
                {allDay:false,
                    endTime:"Mon Apr 17 2017 10:27:00",
                    startTime:"Mon Apr 17 2017 12:27:00",
                    title : "social work",
                    appWith : "john",
                    aptPersonId :10000042,
                    aptId: "10000003"},
                {allDay:false,
                    endTime:"Wed Apr 19 2017 01:27:00",
                    startTime:"Wed Apr 19 2017 03:27:00",
                    title : "doctor visit",
                    appWith : "maddy",
                    aptPersonId :10000042,
                    aptId: "10000004"},
                {allDay:false,
                    endTime:"Thu Apr 20 2017 11:27:00",
                    startTime:"Thu Apr 20 2017 10:27:00",
                    title : "CNA visit",
                    appWith : "harry",
                    aptPersonId :10000042,
                    aptId: "10000005"},
                {allDay:false,
                    endTime:"Fri Apr 21 2017 10:27:00",
                    startTime:"Fri Apr 21 2017 10:27:00",
                    title : "doctor visit",
                    appWith : "Aex",
                    aptPersonId :10000042,
                    aptId: "10000006"},
                {allDay:false,
                    endTime:"Sat Apr 22 2017 10:27:00",
                    startTime:"Sat Apr 22 2017 10:27:00",
                    title : "CNA visit",
                    appWith : "sandy",
                    aptPersonId :10000042,
                    aptId: "10000007"},
                {allDay:false,
                    endTime:"Sun Apr 23 2017 10:27:00",
                    startTime:"Sun Apr 23 2017 10:27:00",
                    title : "social work",
                    appWith : "Aex",
                    aptPersonId :10000042,
                    aptId: "10000008"},
                {allDay:false,
                    endTime:"Mon Apr 24 2017 10:27:00",
                    startTime:"Mon Apr 24 2017 10:27:00",
                    title : "CNA visit",
                    appWith : "adam",
                    aptPersonId :10000042,
                    aptId: "10000009"},
                {allDay:false,
                    endTime:"Tue Apr 25 2017 10:27:00",
                    startTime:"Tue Apr 25 2017 10:27:00",
                    title : "social work",
                    appWith : "john",
                    aptPersonId :10000042,
                    aptId: "10000010"}


            ];*/





        $scope.onEventSelected = function (event) {
            console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title+ ',' + event.aptId);
                debugger;

            $scope.appWith = event.appWith;
            $scope.Title = event.title;
            $rootScope.aptId= event.aptId;
            $scope.modal.show();

        };

        $scope.onViewTitleChanged = function (title) {
            $scope.viewTitle = title;
        };

        $scope.cancelEvent= function (cancelschedule) {
            debugger;
            var confirmPopup = $ionicPopup.confirm({
                title: 'Cancel Schedule',
                template: 'Are you sure you want to cancel?'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    debugger;
                    console.log('You are sure');
                    if($localStorage.accountType == 'F'){
                        var userId =  $localStorage.userId;
                        var patientId =  $localStorage.userId;
                        var aptId= $rootScope.aptId;
                    }
                    if($localStorage.accountType == 'P'){
                        var userId =  "";
                        var patientId =  $localStorage.userId;
                        var aptId= $rootScope.aptId;
                    }
                    $scope.cancelschedule={}
                    $scope.cancelschedule.userId= userId;
                    $scope.cancelschedule.patientId= patientId;
                    $scope.cancelschedule.aptId= aptId;

                    $scope.show($ionicLoading);
                    cancelScheduleService.CancelSchedulePlanService($scope.cancelschedule).then(function(cancelRescheduleResult){

                        debugger;
                        console.log("login response:" +cancelRescheduleResult);


                        debugger;
                        if(cancelRescheduleResult.responseCode == 0){
                            $scope.hide($ionicLoading);

                        }

                        else{
                            $scope.hide($ionicLoading);

                        }
                    });
                } else {
                    debugger;
                    console.log('You are not sure');
                }
            });

        };

        $scope.scheduleCall= function () {
            debugger;
            $scope.modal.hide();
            $state.go('app.reschedule');

        };
        $scope.messageCall= function () {
            debugger;
            $scope.modal.hide();
            $state.go('app.message');
        };

        $scope.today = function () {
            $scope.calendar.currentDate = new Date();
        };

        $scope.isToday = function () {
            var today = new Date(),
                currentCalendarDate = new Date($scope.calendar.currentDate);

            today.setHours(0, 0, 0, 0);
            currentCalendarDate.setHours(0, 0, 0, 0);
            return today.getTime() === currentCalendarDate.getTime();
        };

        $scope.onTimeSelected = function (selectedTime, events, disabled) {
            debugger;
            console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
           console.log($filter('date')(selectedTime, "EEE MMM dd yyyy HH:mm:ss"  ));
        };

        $scope.RescheduleCall = function () {
            debugger;
                console.log("You typed '" + this.datetimeValue + "'");
            if($localStorage.accountType == 'F'){
                var  userId =  $localStorage.userId;
                var  patientId =  $localStorage.userId;
                var aptId= $rootScope.aptId;

               var dateTime=  $filter('date')(this.datetimeValue, "EEE MMM dd yyyy HH:mm:ss"  );

            }
            if($localStorage.accountType == 'P'){
                var  userId =  "";
                var  patientId =  $localStorage.userId;
                var aptId= $rootScope.aptId;

                var dateTime= $filter('date')(this.datetimeValue, "EEE MMM dd yyyy HH:mm:ss"  );

            }
            $scope.Reschedule={}
            $scope.Reschedule.userId= userId;
            $scope.Reschedule.patientId= patientId;
            $scope.Reschedule.aptId= aptId;
            $scope.Reschedule.dateTime= dateTime;

            $scope.show($ionicLoading);
            rescheduleService.ReschedulePlanService($scope.Reschedule).then(function(rescheduleResult){

                debugger;
                console.log("login response:" +rescheduleResult);


                debugger;
                if(rescheduleResult.responseCode == 0){
                    this.datetimeValue= "";
                    $scope.hide($ionicLoading);

                }

                else{
                    $scope.hide($ionicLoading);

                }
            });


        };


        $scope.sendMessage = function () {
            debugger;

            if($localStorage.accountType == 'F'){
                var  userId =  $localStorage.userId;
                var  patientId =  $localStorage.userId;
                var aptId= $rootScope.aptId;
                var messageText= this.workAreaMsg;
            }
            if($localStorage.accountType == 'P'){
                var  userId =  "";
                var  patientId =  $localStorage.userId;
                var aptId= $rootScope.aptId;
                var messageText= this.workAreaMsg;
            }

            $scope.SendMessage={}
            $scope.SendMessage.userId= userId;
            $scope.SendMessage.patientId= patientId;
            $scope.SendMessage.aptId= aptId;
            $scope.SendMessage.messageText= messageText;

            $scope.show($ionicLoading);
            MessagesService.SendMessagesService($scope.SendMessage).then(function(messageResult){

                debugger;
                console.log("login response:" +messageResult);


                debugger;
                if(messageResult.responseCode == 0){


                    $scope.hide($ionicLoading);
                    $scope.workAreaMsg = '';
                   

                }

                else{
                    $scope.hide($ionicLoading);
                  

                }
            });


        };


    }
)

angular.module('starter.loginHelpCtr', ['ngStorage'])
    .controller('loginHelpCtr', function($scope, $timeout,$rootScope,signUpReqServices, $stateParams,$localStorage, $state,GetContent,ionicMaterialInk,$ionicSideMenuDelegate) {
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

        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        }


     /* <--------------------   myMessagesInfo                 ------------------->*/

        $scope.Apt_with =  $localStorage.Apt_with ;
        $scope.Type= $localStorage.Type  ;
        $scope.aptStarttime=  $localStorage.aptStarttime  ;
        $scope.createDate= $localStorage.createDate  ;
        $scope.emailId= $localStorage.emailId   ;
        $scope.messageText= $localStorage.messageText  ;
        $scope.phoneNumber=  $localStorage.phoneNumber  ;

        /* <--------------------   myMessagesInfo                 ------------------->*/

    });
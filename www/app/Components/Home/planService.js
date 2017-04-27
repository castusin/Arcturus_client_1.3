angular.module('starter.myPlanService', ['ngStorage'])

    .factory('GetPlanService',function ($http,$localStorage) {
        var webServiceUrl   = "http://api1.3.castusinfo.com/";
        /*var webServiceUrl   = "http://digihealthcare.castusinfo.com/";*/
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            GetPlanDetaisService :  function(patientId,userId){
                debugger;

                var promise = $http.get(webServiceUrl+'getPlanDetais?patientId='+patientId+'&userId='+userId,config) .then(function(response) {
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });
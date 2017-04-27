angular.module('starter.CancelScheduleService', ['ngStorage'])

    .factory('cancelScheduleService',function ($http,$localStorage) {
        var webServiceUrl   = "http://api1.3.castusinfo.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            CancelSchedulePlanService :  function(cancelschedule){
                debugger;
                var promise = $http.post(webServiceUrl+'cancelSchedulePlan',cancelschedule,config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });
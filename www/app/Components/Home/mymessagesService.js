angular.module('starter.ViewMessages', ['ngStorage'])

    .factory('ViewMessages',function ($http,$localStorage) {
        var webServiceUrl   = "http://api1.3.castusinfo.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            ViewMessagesService :  function(patientId,userId){
                debugger;
                var promise = $http.get(webServiceUrl+'viewMessages?patientId='+patientId+'&userId='+userId,config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });
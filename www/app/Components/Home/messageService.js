angular.module('starter.SendMessageService', ['ngStorage'])

    .factory('MessagesService',function ($http,$localStorage) {
        var webServiceUrl   = "http://api1.3.castusinfo.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            SendMessagesService :  function(message){
                debugger;
                var promise = $http.post(webServiceUrl+'sendMessages',message,config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });
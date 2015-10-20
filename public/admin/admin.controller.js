(function(){
    'use strict';
angular
    .module('RMS')
    .controller('AdminController',adminController);
    
    function adminController ($scope,$http){
        $scope.c_icon_url = "../icons/candidate1.png";
        $scope.r_icon_url = "../icons/recomendation1.png";
        $scope.s_icon_url = '../icons/schedules1.png';
        $scope.i_icon_url = '../icons/interviewers1.png';
        $scope.changeImageOnMouseDown = function(e){
            var elem = angular.element(e.srcElement);
                if(elem.attr('id') === 'view-candidates'){
                   $scope.c_icon_url = "../icons/candidate2.png";
                }else if(elem.attr('id') === 'view-recomendations'){
                     $scope.r_icon_url = "../icons/recomendation2.png";
                }else if(elem.attr('id') === 'view-schedules'){
                    $scope.s_icon_url = "../icons/schedules2.png";
                }else if(elem.attr('id') === 'view-interviewers'){
                    $scope.i_icon_url = "../icons/interviewers2.png";
                }
            };
        
        $scope.changeImageOnMouseUp = function(e){
            var elem = angular.element(e.srcElement);
                if(elem.attr('id') === 'view-candidates'){
                   $scope.c_icon_url = "../icons/candidate1.png";
                }else if(elem.attr('id') === 'view-recomendations'){
                     $scope.r_icon_url = "../icons/recomendation1.png";
                }else if(elem.attr('id') === 'view-schedules'){
                    $scope.s_icon_url = "../icons/schedules1.png";
                }else if(elem.attr('id') === 'view-interviewers'){
                    $scope.i_icon_url = "../icons/interviewers1.png";
                }
            };		
		
    }
}());
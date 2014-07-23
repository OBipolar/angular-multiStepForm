'use strict';

angular.module('angularMultiStepFormApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.questionValue = function(data) {
      data.question=this.question;
    };

    $scope.tipValue = function(data) {
      data.tip=this.tip;
    };

    $scope.contentValue = function(data) {
      data.content=this.content;
    };

    $scope.answerValue = function(data) {
      data.answer=this.answer;
    };

    $scope.answer = function() {
      this.showAnswer=true;
    };

    $scope.delete = function(data) {
        data.options = [];
      };

    $scope.save = function(data) {
        data.content = this.content;
        // data.question = this.question;
        // data.tip = this.tip;
      };
    $scope.saveTop = function(data) {
        data.question = this.question;
        data.tip = this.tip;
      };
    $scope.add = function(data) {
        data.options.push({content:''});
      };
    $scope.refresh = function(data) {
        console.log(data);
        this.content='';
        this.question='';
        this.tip='';
        this.showAnswer=false;
      };

    $scope.tree = [{question: '', tip: '', options: []}];

  });

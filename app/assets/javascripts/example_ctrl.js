(function(){
  "use strict";

  angular.module("app").controller("exampleCtrl", function ($scope){
    // $scope.message = "Hello!";
    $scope.task1 = "task 1";
    $scope.task2 = "task 2";
    $scope.task3 = $scope.task2;

    $scope.reviews = [
    {
      text: "this is text",
      score: 1,
      person:"bill"
    },
    
    {
      text: "this is text",
      score: 4,
      person:"clint"
    },

    {
      text: "this is text",
      score: 2,
      person:"sandy"
    }
    ];

    $scope.addReview = function(reviewText, reviewScore, reviewPerson){
      var review = {
        text:reviewText,
        score:reviewScore,
        person:reviewPerson
      }
      if(reviewText){
        $scope.reviews.push(review);
        $scope.revText = null;
        $scope.revScore = null;
        $scope.revPerson = null;
      }
    }

    $scope.ifPositive = function(review){
      return review.text.indexOf("stupid")=== -1;
    }

    $scope.finishTask = function(task){
      $scope.reviews.splice(task, 1);

    }

    window.$scope = $scope;
  });
})();
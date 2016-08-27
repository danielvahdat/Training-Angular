angular.module('myApp').controller("postController",function($scope,postService,$stateParams,authenticateService,$location){   
  var posts=postService.getPosts();
  $scope.selectedPost={};
  for(var i=0;i<posts.length;i++)
    if(posts[i].id==$stateParams.id)
      $scope.selectedPost=posts[i];
});

 



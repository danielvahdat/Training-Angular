angular.module('myApp').factory('postService',function(){
  return{
    getPosts:function(){
      return[
        {id:'1',title:'D.V',body:'',author:'Daniel vahdat'},
        {id:'2',title:'A.D',body:'',author:'Amir Daliri'}
      ];
    }

  };
});

var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.records = [
       {
            "Name" : "Daniel Vahdat",
            "Age" : "21",
            "Mail": "daniel.vahdat74.dv@gmail.com"
       },
       {
            "Name" : "Amir Daliri",
            "Age" : "26",
            "Mail":"amirdaliri@gmail"
       }, 
       {
            "Name" : "Ashkan Hesaraki",
            "Age" : "30",
            "Mail":"Ashkan@gmail.com"
       },
       {
            "Name" : "Saeed Aliabadi",
            "Age" : "27",
            "Mail": "saeed@gmail.com"
       }
    ]
})
app.directive('businessHeading', function() {
  return {
    restrict: 'AE',
    template: '<div><h1>Business Page</h1></div>'
  }
});
app.directive('btTooltip',function($compile){
return{
        restrict:'A',
        replace:'true',
        scope:{btTooltip:'@'},
        link:function(scope,elem,attrs){
         elem.attr("data-toggle","tooltip");
         elem.attr('data-placement',"bottom");
         var a="\""+attrs.btTooltip+"!!!"+"\"";
         elem.attr("title",a);
        $compile(elem)(scope);
       }}});

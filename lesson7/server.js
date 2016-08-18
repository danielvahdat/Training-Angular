'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8080 
});
server.start((err) => {
  if (err) {
    throw err;
  }
console.log('Server running at:', server.info.uri);
});
server.register([require('vision'),require('inert')], (err) => {
  if (err) {
    throw err;
  }
  server.views({
    engines: { jade: require('jade') },
    relativeTo:__dirname+'/Public/'
    
   });
  const serveViews = function(request, reply, view) {
        reply.view(view);
          }
  server.route({
        method:'GET',
        path:'/Public/{view*}',
        handler: function(request, reply){
                var view = request.params.view;
                      serveViews(request, reply, view);
                          }
    });
const helloHandler=function(request,reply){
  reply.view('index');
};
server.route({method:'Get',path:'/',handler: helloHandler});
server.route({method:'Get',path:'/ctrl/{param*}',handler:{directory:{path:'./ctrl/',listing:false,index:false}}});
});

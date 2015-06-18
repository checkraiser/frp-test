import Hapi from 'hapi'
import Immutable from 'immutable'
import uuid from 'uuid'

let server = new Hapi.Server();

server.connection({port: 3000});

var todos = Immutable.List([
			{id: 1, text: 'todo 1'},
			{id: 2, text: 'todo 2'}
		]);

server.route({
	path: '/todos',
	method: 'GET',
	handler: function(request, reply){
		reply(todos);
	}
});
server.route({
	path: '/',
	method: 'GET',
	handler: {
		file: 'index.html'
	}
});

server.route({
	path: '/public/{path*}',
	method: 'GET',
	handler: {
		directory: {
			path: './public',
			listing: false
		}
	}

});

server.route({
	path: '/todos/{id}',
	method: 'DELETE',
	handler: function(req, rep){
		todos = todos.delete(
			todos.findIndex(
				(item) => item.id === req.params.id
			)
		)
		rep(todos)
	}
})

server.route({
	path: '/todos',
	method: 'POST',
	handler: function(request, reply){
		var todo = {
			id: uuid.v1(),
			text: request.payload.text
		}
		todos = todos.push(todo);
		reply(todos);
	}
})

server.start(function(){
	console.log('running 1');
})

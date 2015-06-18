import Hapi from 'hapi'
import Immutable from 'immutable'
import uuid from 'uuid'

let server = new Hapi.Server();

server.connection({port: 3000});

var todos = Immutable.List.of(
			{id: 1, text: 'todo 1'},
			{id: 2, text: 'todo 2'}
		);
var createTodo = (todo) => todos.push(todo);

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
	path: '/todos',
	method: 'POST',
	handler: function(request, reply){
		var todo = {
			id: uuid.v1(),
			text: requset.payload.text
		}
		createTodo(todo);
		reply(todos);
	}
})

server.start(function(){
	console.log('running 1');
})
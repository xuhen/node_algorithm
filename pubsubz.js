// 这是publish/subscribe模式的简单示例代码

var pubsub = {};

	(function(myObject) {

		var topics = {};

		var subUid = -1;

		myObject.publish = function( topic, args ) {

			if ( !topics[topic] ) {
				return false;
			}

			var subscribers = topics[topic],
			len = subscribers ? subscribers.length : 0;

			while (len--) {
				console.log("len------>" + len);
				subscribers[len].func( topic, args );
			}

			return this;
		};

		myObject.subscribe = function( topic, func ) {

			if (!topics[topic]) {
				topics[topic] = [];
			}

			var token = ( ++subUid ).toString();
			topics[topic].push({
				token: token,
				func: func
			});
			return token;
		};

		myObject.unsubscribe = function( token ) {
			for ( var m in topics ) {
				if ( topics[m] ) {
					for ( var i = 0, j = topics[m].length; i < j; i++ ) {
						if ( topics[m][i].token === token ) {
							topics[m].splice( i, 1 );
							return token;
						}
					}
				}
			}
			return this;
		};
	}( pubsub ));


	var messageLogger = function ( topics, data ) {
		console.log( "Logging: " + topics + ": " + data );
	};

	var customLogger = function(topics) {
		console.log("customLogger: " + topics);
	};


	var subscription = pubsub.subscribe( "inbox/newMessage", messageLogger );
	var subscription1 = pubsub.subscribe( "inbox/newMessage", customLogger );
	var sub = pubsub.subscribe("xuheng", messageLogger);

	pubsub.publish("xuheng", "hello heng");
	pubsub.publish("xuheng", "go home");


	pubsub.publish( "inbox/newMessage", "hello world!" );

	pubsub.publish( "inbox/newMessage", ["test", "a", "b", "c"] );

	pubsub.publish( "inbox/newMessage", {
		sender: "hello@google.com",
		body: "Hey again!"
	});

	pubsub.unsubscribe( subscription );
	pubsub.publish("xuheng", "nice to meet you");

	pubsub.publish( "inbox/newMessage", "Hello! are you still there?" );

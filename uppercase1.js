module.exports = function(RED){
	function SampleUppercase(config){
		RED.nodes.createNode(this, config);

		var node = this;

		node.on('input', function(msg){
			msg.payload = msg.payload.toUpperCase();
			node.send(msg);
		});
	};

	RED.nodes.registerType("uppercase1", SampleUppercase);
};
function Vertex(label) {
	this.label = label;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.edgeTo = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		// this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
	this.marked = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.marked[i] = false;
	}
}

function addEdge(v,w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for (var i = 0; i < this.vertices; ++i) {
		var str = i + " -> ";
		for (var j = 0; j < this.vertices; ++j) {
			if (this.adj[i][j] != undefined)
				str += this.adj[i][j] + ' ';
		}
		console.log(str);
		console.log("\n");
	}
}

function dfs(v) {
	this.marked[v] = true;
	if (this.adj[v] != undefined)
		console.log("Visited vertex: " + v);
	for (var w in this.adj[v]) {
		if (!this.marked[this.adj[v][w]]) {
			this.dfs(this.adj[v][w]);
			break;
		}
	}
}

function bfs(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s); 
	while (queue.length > 0) {
		var v = queue.shift(); 
		if (v !== undefined) {
			console.log("Visited vertex: " + v);
		}
		for (var w in this.adj[v]) {
			if (!this.marked[this.adj[v][w]]) {
				this.edgeTo[this.adj[v][w]] = v;
				this.marked[this.adj[v][w]] = true;
				queue.push(this.adj[v][w]);
			}
		}
	}
}

function pathTo(v) {
	var source = 0;
	if (!this.hasPathTo(v)) {
		return undefined;
	}
	var path = [];
	for (var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}
	path.push(source);
	return path;
}
function hasPathTo(v) {
	return this.marked[v];
}
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.bfs(0);
console.log(typeof g.edgeTo[0]);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
	if (paths.length > 1) {
		console.log(paths.pop() + '-');
	} else {
		console.log(paths.pop());
	}
}
const { Queue }  = require('./Queue.js');

// functions to be implemented

// addVertex(v)
// addEdge(v, w)
// printGraph()

// bfs(v)
// dfs(v)

class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
      this.AdjList.set(v, []);
    }
    addEdge(v, w) {
      this.AdjList.get(v).push(w);

      this.AdjList.get(w).push(v);
    }
    printGraph() {
      var get_keys = this.AdjList.keys();

      for (var i of get_keys)  {
          var get_values = this.AdjList.get(i);
          var conc = "";

          for (var j of get_values)
              conc += j + " ";

          console.log(i + " -> " + conc);
      }
    }
    bfs(startingNode) {
      var visited = {};
      var q = new Queue();

      visited[startingNode] = true;
      q.enqueue(startingNode);

      while (!q.isEmpty()) {
          var getQueueElement = q.dequeue();

          console.log(getQueueElement);

          var get_List = this.AdjList.get(getQueueElement);

          for (var i in get_List) {
              var neigh = get_List[i];

              if (!visited[neigh]) {
                  visited[neigh] = true;
                  q.enqueue(neigh);
              }
          }
      }
    }
    dfs(startingNode) {

        var visited = {};

        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);

        var get_neighbours = this.AdjList.get(vert);

        console.log('get_neighbours', get_neighbours)

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }

    // using DFS
    isCycle() {
        var vertexs = [...this.AdjList.keys()];

        //visited array
        var visited = {};
        //do DFS, from each vertex
        if(this.isCycleUtil(vertexs[0], visited, -1)){
            return true;
        }

        return false;
    }

    isCycleUtil(currVertex, visited, parent){

        //add this vertex to visited vertex
        visited[currVertex] = true;
        var adjList = this.AdjList.get(currVertex);

        //visit neighbors except its direct parent
        for (var i = 0; i < adjList.length; i++) {
            var vertex = adjList[i];
            //check the adjacent vertex from current vertex
            if(vertex != parent) {
                //if destination vertex is not its direct parent then
                if(visited[vertex]){
                    //if here means this destination vertex is already visited
                    //means cycle has been detected
                    return true;
                } else{
                    //recursion from destination node
                    if (this.isCycleUtil(vertex, visited, currVertex)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

module.exports.Graph = Graph;

var example = function() {
    var g = new Graph(6);
    var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

    // adding vertices
    for (var i = 0; i < vertices.length; i++) {
        g.addVertex(vertices[i]);
    }

    g.addEdge('A', 'B');
    g.addEdge('A', 'D');
    g.addEdge('A', 'E');
    g.addEdge('B', 'C');
    g.addEdge('D', 'E');
    g.addEdge('E', 'F');
    g.addEdge('E', 'C');
    g.addEdge('C', 'F');

    g.printGraph();


    console.log("BFS");
    g.bfs('A');

    console.log("DFS");
    g.dfs('A');

    console.log('is Cycle')
    console.log(g.isCycle())


}


if (require.main === module) {
    example();
}


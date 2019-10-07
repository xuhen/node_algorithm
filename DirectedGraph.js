const { Stack }  = require('./Stack.js');


class DirectedGraph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v) {
      this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
    }

    topologicalSortUtil(v, visited, stack) {
        visited[v] = true;

        // Recur for all the vertices adjacent to this
        // vertex
        var get_neighbours = this.AdjList.get(v);
        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.topologicalSortUtil(get_elem, visited, stack);
        }

        // Push current vertex to stack which stores result
        stack.push(v);
    }

    topologicalSort() {
        var stack = new Stack();

        // Mark all the vertices as not visited
        var visited = {}
        var vertexs = [...this.AdjList.keys()];

        // Call the recursive helper function to store
        // Topological Sort starting from all vertices
        // one by one
        for (let i = 0; i < vertexs.length; i++)
            if (!visited[vertexs[i]])
                this.topologicalSortUtil(vertexs[i], visited, stack);

        // Print contents of stack
        while (!stack.isEmpty())
            console.log(stack.pop() + " ");
    }
}


var example = function() {
    var g = new DirectedGraph(6);

    var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

    // adding vertices
    for (var i = 0; i < vertices.length; i++) {
        g.addVertex(vertices[i]);
    }


    g.addEdge('F', 'C');
    g.addEdge('F', 'A');
    g.addEdge('E', 'A');
    g.addEdge('E', 'B');
    g.addEdge('C', 'D');
    g.addEdge('D', 'B');

    console.log("Following is a Topological " + "sort of the given graph");

    g.topologicalSort();
};


if (require.main === module) {
    example();
};
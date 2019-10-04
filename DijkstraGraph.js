class DijkstraGraph {
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    addVertices(newVertices) {
      if (newVertices.constructor !== Array) {
          throw 'pass an array of vertices'
      }
      this.vertices = this.vertices.concat(newVertices);
    }

    addEdges(newEdges) {
      //newEdges is a nested Array, where the subarrays of length 3
      //denote edges in the format: [Left Node, Right Node, Weight]
        var graph = this;
        if (newEdges[0].constructor !== Array) {
            'pass an array of edges: [["node1", "node2", weight],["node2", "node3", weight]]'
        }
        newEdges.forEach(function(edge) {
            if (edge.length !== 3) {
                throw 'each edge needs a left node, right node, and weight';
            }
            if (typeof edge[2] !== "number" || edge[2] < 0) {
                throw 'edge weight must be a positive number';
            }
            if (graph.vertices.indexOf(edge[0]) < 0) {
                throw 'edges must connect two existing vertices';
            }
            if (graph.vertices.indexOf(edge[1]) < 0) {
                throw 'edges must connect two existing vertices';
            }
        });
        this.edges = this.edges.concat(newEdges);
    }

    getPath(start, end) {
      var distanceMap = {},
          vertexList = {},
          current,
          parentVertices = {},
          path = [];

      //Initially, we assume each vertex is unreachable
      this.vertices.forEach(function(vertex) {
          distanceMap[vertex] = Infinity;
          vertexList[vertex] = true;
      });

      //The cost from the starting vertex to the starting vertex is 0
      distanceMap[start] = 0;

      //check each vertex
      while (Object.keys(vertexList).length > 0) {
          current = Object.keys(vertexList).reduce(function(checking, vertex) {
              return distanceMap[checking] > distanceMap[vertex] ? vertex : checking;
          }, Object.keys(vertexList)[0]);

          //all the vertices accessible from current vertex
          this.edges.filter(function(edge) {
              var from = edge[0],
                  to = edge[1];
              //are these vertices joined?
              return from === current || to === current;
          })
          //for each vertex we can reach
          .forEach(function(edge) {
              //determine the direction of travel
              if (edge[0] === current) {
                  var to = edge[1];
                  var from = edge[0];
              } else {
                  var to = edge[0];
                  var from = edge[1];
              }
              //distance is how far we travelled to reach the
              //current vertex, plus cost of travel the next(to)
              var distance = distanceMap[current] + edge[2];

              //if we have found a cheaper path
              //update the hash of costs
              //and record which vertex we came from
              if (distanceMap[to] > distance) {
                  distanceMap[to] = distance;
                  parentVertices[to] = from;
              }
          });

          //remove vertex so we don't revisit it
          delete vertexList[current];
      }

      //now we have the most efficient paths for all vertices
      //build the path for the user specified vertex(end)

      while (parentVertices[end]) {
          path.unshift(end);
          end = parentVertices[end];
      }

      path.unshift(start);

      return path;
    }

  }

  var a = new DijkstraGraph();

  a.addVertices(['A', 'B', 'C', 'D']);
  a.addEdges([
      ['A', 'B', 4],
      ['A', 'C', 7],
      ['B', 'C', 1],
      ['A', 'D', 1]
  ]);

  var r = a.getPath('A', 'D');

  console.log(r)

  var b = new DijkstraGraph();
  b.addVertices(['A', 'B', 'C', 'D', 'E', 'Z']);
  b.addEdges([
    ['A', 'B', 4],
    ['A', 'C', 2],
    ['B', 'C', 1],
    ['B', 'D', 5],
    ['C', 'D', 8],
    ['C', 'E', 10],
    ['D', 'Z', 6],
    ['E', 'Z', 5]
  ]);

  console.log(b.getPath('A', 'Z'))
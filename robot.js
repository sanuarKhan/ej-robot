const roads = [
    "Alice's House-Bob's House", 
    "Alice's House-Cabin", 
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie House",
     "Daria's House-Town Hall",
     "Erie's House-Grete's House",
     "Grete's House-Farm",
     "Grete's House-Shop",
     "Merketingplace-farm",
     "Merketingplace-Post Office",
     "Merketingplace-Shop",
     "Merketplace-Town Hall",
     "Shop-Town Hall"

]

function BuildGraph(edges){
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null){
            graph[from] = [to]
        }else{
            graph[from].push(to)
        }
    }
    for(let [from ,to] of edges.map(r => r.split("-"))){
        addEdge(from,to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = BuildGraph(roads);

class VillageState {
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }
    }
}
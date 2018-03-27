var fs = require('fs');
<<<<<<< HEAD
var tree = {};
var init_browse_in = "directory";

Browse(init_browse_in, "root");

function Browse(path, level){
	var inputs = fs.readdirSync(path);
	var dir = [];
	tree[level] = [];

	for(var i=0;i<inputs.length;i++){
		var stats = fs.statSync(path+"/"+inputs[i]);
		var element = {type: stats.isFile()?"file":"dir", src:inputs[i]};
		tree[level].push(element);

		if(!stats.isFile())
			dir.push(inputs[i]);
	}

	for(var i=0;i<dir.length;i++){
		Browse(path+"/"+dir[i], dir[i]);
	}

	if(dir.length == 0){
		console.log("\n Tree Result : \n\n "+JSON.stringify(tree)); 
		console.log("\n Tree detailed presentation : "); 
		showTree();
	}
}

function showTree(){
	for(var id in tree){
=======

module.exports = {
 /**
   * Browse directory
   *
   * @param  {String} path
   * @param  {String} level
  */
  browse: function(path, level, tree) {
  	if(path){
	  	if(!tree)
	  		var tree = {};
	  	if(!level)
	  		var level = "root";

	  	var inputs = fs.readdirSync(path);
		var dir = [];
		tree[level] = [];

		for(var i=0;i<inputs.length;i++){
			var stats = fs.statSync(path+"/"+inputs[i]);
			var element = {type: stats.isFile()?"file":"dir", src:inputs[i]};
			tree[level].push(element);

			if(!stats.isFile())
				dir.push(inputs[i]);
		}

		for(var i=0;i<dir.length;i++){
			return this.browse(path+"/"+dir[i], dir[i], tree);
		}

		if(dir.length == 0){
			return tree;
		}
	}
    
  },

  /**
   * Show Tree
   *
   * @param  {Object} tree
   * 
   */
  showTree: function(tree) {
    for(var id in tree){
>>>>>>> Initial commit
		console.log("\n\n Level ==> "+id+"\n")
		console.log("  # Contains : ");
		for(var i in tree[id]){
			console.log("    - "+JSON.stringify(tree[id][i]));

			if(tree[id][i].type == "dir"){
				console.log("\n    * "+tree[id][i].src+" ---> "+JSON.stringify(tree[tree[id][i].src]))
			}
		}

	}
<<<<<<< HEAD
}
=======
  }
};
>>>>>>> Initial commit

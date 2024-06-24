function factory_movie(title){
    return {
        get_title : function () {
            return title;
        },
        set_title : function (_title) {
            title = _title;
        }
    }
}

ghost = factory_movie("Ghost In The Shell");
matrix = factory_movie("Matrix");


console.log(ghost.get_title()); // "Ghost In The Shell"
console.log(matrix.get_title()); // "Matrix"

ghost.set_title("범죄도시4");

console.log(ghost.get_title()); //"범죄도시4"
console.log(matrix.get_title()); // "Matrix"
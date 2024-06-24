let grades = {
    'list': {'mark':10, 'lucy':20, 'joseph':30},
    'show': function() {
        for(let name in this.list){
            console.log(name + ':' + this.list[name]);
        }
    }
}

grades.show(); // {'mark':10, 'lucy':20, 'joseph':30}
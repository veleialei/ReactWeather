var names = ['Andy', 'Jane', 'Sarah'];

names.forEach(function(name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFUnc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Andy'));

var person = {
    name: 'Andy',
    greet: function (){        
        //var that = this;
        names.forEach(function(name){
            console.log(this.name + ' says hi to ' + name)
        });      
    }
};

var person2 = {
    name: 'Andy',
    greeter: function (){        
        //var that = this;
        names.forEach((name) => {
            console.log(this.name + ' say hello to ' + name)
        });      
    }
};

person.greet();

person2.greeter();

var add = (a, b) => a + b;
console.log(add(1,2));
function hardWorker(name,age,occupation,employed){
	var worker = {
		name: name,
		age: age,
		occupation: occupation,
		employed: employed
	}
	return worker
}

var database = []

database.push(hardWorker('Nathan Garrett',25,'Developer',true))    //1 of 10
database.push(hardWorker('Mande Luce',28,'Bartender',true))        //2 of 10
database.push(hardWorker('Caydence Garrett',2,'Daughter',false))   //3 of 10
database.push(hardWorker('Denise Garrett',50,'Nurse',false))       //4 of 10
database.push(hardWorker('Paul Garrett',52,'Electrician',true))    //5 of 10
database.push(hardWorker('Caraline Nettles',22,'Secretary',false)) //6 of 10
database.push(hardWorker('Robert Nettles',23,'Mechanic',false))    //7 of 10
database.push(hardWorker('Tommy Capeheart',70,'Electrician',false)) //8 of 10
database.push(hardWorker('Danial Keahey',35,'Mechanic',true))      //9 of 10
database.push(hardWorker('Carolanne Keahey',22,'Estimator',false)) //10 of 10

database.forEach(val => console.log(val.name));
//console log all 10 database entries listed above (just their names)

database.forEach(function(val){
    if(val.employed) {
        console.log(val.name)
    }
});
//console log who's employed from the database

database.forEach(function(val){
    if(!val.employed) {
        console.log(val.name)
    }
});

//console log who's unemployed from the database

 database.filter(function(val){
    return val.age < 50
});

 //return names of those younger than 50 years old.


 function check(arg) {
    if (arg === 'employed') {
        database.forEach(function(val){
            if(val.employed){
                console.log(val.name)
            }
        });
    } else {
        database.forEach(function(val){
            if(!val.employed){
                console.log(val.name)
            }
        });
    }
};


//Run Test

function checkWorkers(arg, arr) {
    if (arg == 'employed') {
        arr.forEach(function(val){
            if(val.employed){
                console.log(val.name)
            }
        });
    } 
    
    else if (arg == 'unemployed') {
        arr.forEach(function(val){
            if(!val.employed){
                console.log(val.name)
            }
        });
    }

    else {
	console.log('Arguement Not Relevent');
    }
};



checkWorkers('employed', database);



let shelter = {
    cats: {
        cats1: 'healthy',
        cats2: 'sick',
    },
    dogs: {
        dogs1: 'healthy',
        dogs2: 'sick',
    },
    rabbits: {
        rabbits:'healthy',
    },
    getInfo (){
        for (const key in this){
            if (key !== "getInfo" && this[key] !== '' && this[key] !== NaN && this[key] !== undefined && this[key] !== null){console.log(key ,':', this[key])}//Условие if (key !== "getInfo") исключает метод getInfo из вывода. так же не выводит другие перечисленные
        }
    }
}
//shelter.getInfo();
shelter.birds = null;
shelter.getInfo();
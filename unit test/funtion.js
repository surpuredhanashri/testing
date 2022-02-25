const funtions = {
    getName:(name,age)=>{
        return `${name} is ${age} year old`;
    },

    method1: () => undefined,

    add:(a,b)=>{ 
        return a+b
    },

    testObject:()=>{
        const data = {one:1}
        return data;
    },
    getUsers:()=>{
        return new Promise((resolve,reject)=>{
            resolve("Success")
        })
    },

    compileJavascript:()=>{
        throw new Error("You are using some vulnerable javascript code!")
    }

}

module.exports = funtions;
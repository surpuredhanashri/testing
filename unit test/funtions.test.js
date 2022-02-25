// const { getName } = require("./funtion")
const funtions = require("./funtion");
const functions = require("./funtion")

const init =()=>{
    console.log("Databse is connected")
}

const destroy=()=>{
    console.log("Connection get closed")
}

// beforeAll(()=>{
//     init();
// })

// afterAll(()=>{
//     destroy();
// })

beforeEach(()=>{
    init();
})

afterEach(()=>{
    destroy();
})

test('is the funtion defined',()=>{
    expect(functions.getName("Foo",25)).toBeDefined()

    expect(functions.method1()).toBeUndefined()
});


test('2+2 equals to 4',()=>{
    expect(functions.add(2,2)).toBe(4)
});


test('checking object equality',()=>{
    expect(functions.testObject()).toEqual({one:1})
})

test('test value is null or not',()=>{
    const z= 10;
    expect(z).toBeDefined()
    expect(z).not.toBeNull();
    expect(z).toBeTruthy()
});

test("matchers for primitive value",()=>{
    const value = 4;
    expect(value).not.toBeGreaterThan(30)
    expect(value).not.toBeLessThan(3)
    expect(value).toBeGreaterThanOrEqual(2)
    expect(value).not.toBeLessThanOrEqual(2)
})

test("check testing floating point equality",()=>{
    const value = 0.1+0.2;
    // log.info(value);
    expect(value).toBeCloseTo(0.3);
})

test("Testing promies!",()=>{
    functions.getUsers().then((res)=>{
        expect(res).not.toBeNull()
    })
})

test("Compiling javascript",()=>{
    expect(()=>functions.compileJavascript()).toThrow()
    expect(functions.compileJavascript).toThrow()
    expect(()=>functions.compileJavascript()).toThrow(/javascript/)

})
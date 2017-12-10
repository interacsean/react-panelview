/**
 * Replace this with your app.
 */

// Test of ES6 functionality

async function ohHello(){
    return new Promise(resolve => {
        setTimeout( ()=>{
            resolve('oh, hello');
        }, 1000);
    });
}

async function hello() {  
    console.log('hello?');
    console.log(await ohHello());
}

hello();

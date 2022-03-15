// Code your solutions in this file


function writeCards(arr,event) {
    let newArr=[]
    for (let i =0; i < arr.length; i++) {
        let name=arr[i];
        newArr.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return newArr;

}

function countDown(num) {
    let count = -1;
    let countDown=num;
    while (count < num) {
        console.log(countDown--);
        count++;
    }

}



function serialization(s){
    let string = '';
    const serLength = s.reduce((sum, value) => {
        return `${sum}` + `${value}`
    });
    for(let i = 0; i < s.length; i++){
        let code = String.fromCharCode(s[i]);
        string+=code
    }
    return {
        string,
        compression: string.length / serLength.length * 100
    }
}

function deserialization(d){
    let string = '';
    for (let i = 0; i < d.length; i++) {
        let code = d.charCodeAt(i)
        string+=code
    }
    return string
}
// const ser = serialization([300,300,300]);
// const ser = serialization([214,100,300,262,124,532,122,111,002,029]);
// const ser = serialization([198,180,120,023,099,013]);
const {string, compression} = serialization([4,248,200,46,232,188,105,100,100,28,241,142]);
const deser = deserialization(string);
console.log(`serializationed =  ${string}`);
console.log(`deserializationed = ${deser}`);
console.log(`Compression on ~${Math.round(compression)}%`);



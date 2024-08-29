function getRandomName(file_name){
    return new Date().getTime()+Math.floor(Math.random()*1000)+file_name;
}
module.exports={getRandomName};
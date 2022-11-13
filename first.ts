function request(){
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
    return response.json()
  })
  .then((response) => {
    console.log(response)
    let result = document.getElementById('result')
    result?.innerHTML 
  })
}
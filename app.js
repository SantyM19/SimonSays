const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const opts = { crossDomain: true }


function persona(id){

	return new Promise ((resolve, reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		
		$
			.get(url, opts, function(data){
				resolve(data)
			})
			.fail(()=> reject(id)
			)
	})		
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}
    
var ids=[1,2,3,4,5,6,7];
var promesas = ids.map(id => persona(id))
Promise
   .all(promesas)
   .then(personajes => console.log(personajes))
   .catch(onError)

async function getPerson(){
    var ids=[1,2,3,4,5,6,7,8];
    var promesas = ids.map(id => persona(id))
    try{
        var persons = await Promise.all(promesas)
        console.log(persons)
    }catch(id){
        onError(id)
    }
}  

getPerson();

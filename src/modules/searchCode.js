import ajaxService from "./ajaxService";
import storeSearch from "./storeSearch";
const searchCode = ()=>{
    document.querySelector('form').addEventListener('submit',(event)=>{
        event.preventDefault()
        const searchTerm = document.querySelector('.term').value
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(()=> console.log(searchResponse))
            .then(()=>{
                if(searchResponse.total ===1){
                    document.querySelector('.result').value=searchResponse.data[0].post_code
                    storeSearch(searchResponse.data[0].post_code, searchResponse.data[0])
                }else{
                    document.querySelector('main').innerHTML += "<p>Klaida</p>"
                }
            })

    })
}


export default searchCode

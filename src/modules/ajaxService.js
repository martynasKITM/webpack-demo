const ajaxService =  (term)=>{
    const url = "https://api.postit.lt/?term="
    const key = "UNFYHJYNHGwWmFmG5Go1"; //naudoti savo key
    return   fetch(`${url}${term}&key=${key}`)
        .then(response => response.json())


}

export default ajaxService
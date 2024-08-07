
document.getElementById('getImg').addEventListener('click',()=>{

    fetch('https://jsonplaceholder.typicode.com/photos') // this link includes an array of many objects including 5 features related to pics
    // in the fetch step, we get this array that seems we actually get it from a fake DB
    
    .then(x=>{ //we need to transfer this array to the JSON format so that it can be readable and understandable in JS
    
        return(x.json());
    })

    .then(data=>{ // we assign this array to a new array named data
    
        console.log(data);
    
        data.forEach(item => {
            
            let p =document.createElement('p');
            p.textContent += item.title; //we add "title" feature of all objects of the array named "data" shown by "item" as a pointer of the array to a P tag
            document.body.appendChild(p); // then we attach the P tag to the body
        });
    })
})
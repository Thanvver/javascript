fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>displayEmployees(data))



function displayEmployees(users){

    let htmlData=``
    for (let e of users){
        htmlData+=`
                    <div class="col-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header">
                            ${e.name}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${e.address.city}</li>
                            <li class="list-group-item">${e.company.name}</li>
                            <li class="list-group-item">${e.phone}</li>
                        </ul>
                    </div>
                    </div>
                `
    }

    document.getElementById('root').innerHTML=htmlData

}
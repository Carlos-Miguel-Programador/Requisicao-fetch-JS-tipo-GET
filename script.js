var count = 0;

fetch('https://reqres.in/api/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    for(count=0;count<6;count++)
    {
        console.log(data)
        const dados = document.createElement('p');
        const foto = document.createElement('img');
        const div = document.createElement('div')
        div.setAttribute('id', 'dados');

        div.style = 'border: 1px solid; width: 35%; border-collapse: separate;'

        foto.src = data.data[count].avatar;
        dados.innerHTML = "Nome: " + (data.data[count].first_name + " " + data.data[count].last_name) + "<br>" + "Email:" + data.data[count].email;

        div.appendChild(foto)
        div.appendChild(dados)

        document.body.appendChild(div);
    }
});
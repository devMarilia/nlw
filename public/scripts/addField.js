//Procurar o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener ("click", cloneField)



// Executar  uma ação
function cloneField() {
    console.log("cheguei ai")


    //Duplicar os campos. que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)//boolean

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo limpar

    fields.forEach(function(field) {
        //pega o field do momento e limpa ele 
        field.value = ""
    
    })
    
 
    //colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}
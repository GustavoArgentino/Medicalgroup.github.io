function voltar(){
  location.href= "./login.html"
}
   function inicio(){
    location.href= "./Tela-de-inicio-desktop.html"
   }

function cadastro(){
    location.href= "./TeladeCadastro.html"
}

function main() {
      var email= document.getElementById('Email').value;
      var senha= document.getElementById('Senha').value;

      if (email == "gustavo@paciente.com" && senha == "1234"){
        alert('Sucesso');
        window.location.assign("https://br.pinterest.com/")}
        
        if (email == "cleber.machado@medico.com" && senha == "12345"){
          alert('Sucesso'); 
          window.location.assign("https://littlebigsnake.com/")}

          if (email == "josue@admin.com" && senha == "123456"){
            alert('Sucesso'); 
            window.location.assign("https://www.youtube.com//")}  
       
          else{
        alert('Usuario ou senha errados!');
      }
}

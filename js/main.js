$(document).ready(function(){
   //Toda essa área é responsável por aplicar máscaras ao campo form
   //obs: em inputs que não é possivel deixar um formato pré-definido
   // como o campo "nome" eu coloquei o placeholder direto no html.
    $('#telefone').mask('(00) 0 0000-0000',{
        placeholder: 'ex.: (99) 9 9999-9999'
    })
    
    $('#cpf').mask('000.000.000-00',{
        placeholder: 'ex.: 999.999.999-99'
    })

    $('#cep').mask('00000-000',{
        placeholder: 'ex.: 99999-999'
    })
    
    //Essa área é responsável por definir quais campos são obrigatórios e 
    //e quais mensagens serão exibidas caso o campo tenha sido preenchido errado. 
    $('form').validate({
        rules:{
            nome:{required:true},

            email:{required:true},

            telefone:{required:true},

            cpf:{required:true},

            endereço:{required:true},

            cep:{required:true},   
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email:'Por favor, insira um email válido',
            telefone:'Por favor, insira seu telefone',
            cpf:'Por favor, insira seu CPF',
            endereço:'Por favor, insira seu endereço',
            cep:'Por favor, insira seu CEP',
        //campo de mensagens
        },
        submitHandler: function(form) {
            console.log(form)
        //validador do formulário
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos==1)  {
                alert(`Existe ${camposIncorretos} campo incorreto!`)
            } else if(camposIncorretos>1) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            };
        //alerta caso algum campo esteja errado
        }
    })
})
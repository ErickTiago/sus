function formatarData(element, value) {
    var strValor = value;
    var strTemp

      strTemp = strValor.replace("/", "");
      strTemp = strTemp.replace("/", "");
      strValor = strTemp;

      if (isNaN(parseInt(strValor.substr(strValor.length - 1, 1)))) {
          strValor = strValor.substr(0, strValor.length - 1)
      }

      if (strValor.length > 5) {
          strValor = strValor.substr(0, 2) + '/' + strValor.substr(2, 2) + '/' + strValor.substr(4, 4);
      }
      else if (strValor.length > 2) {
          strValor = strValor.substr(0, 2) + '/' + strValor.substr(2, 2);
      }
      document.getElementById(element).value = strValor
  }

  function removeMask(element, value) {
    var strValue = value;
	strValue = strValue.replace("/", "");
	strValue = strValue.replace("/", "");

    document.getElementById(element).value = strValue;
}
function ajustar_numero(input, e) {
	var k;
	if (e && e.which)
		k = e.which;
	else
		k = e.keyCode;
	if ( ((k<48)||(k>57)) && k != 8 && k != 9 && k != 127 && k != 13 && !((k>34)&&(k<41)) && k != 46) {
        if(e.ctrlKey && (k == 118 ||k == 99)) {
            return true;
        }
        else
        {
            e.returnValue = false;
		    return false;
        }
	}
	return true;
}
function limpar() {
    document.getElementsByName("txtNome")[0].value = "";
    document.getElementsByName("txtDataNascimento")[0].value = "";
    document.getElementsByName("txtSexo")[0].value = "";
    document.getElementsByName("txtNumero")[0].value = "";
    document.getElementsByName("txtNumeroCompleto")[0].value = "";
}
function ValidarDados(){
    if (document.getElementsByName("txtNome")[0].value === "") {
	    alert("Favor informar o Nome.")
        return false;
    }
	if (document.getElementsByName("txtDataNascimento")[0].value === "") {
	    alert("Favor informar a Data de Nascimento.")
        return false;
    }
	if (document.getElementsByName("txtDataNascimento")[0].value.length !== 10) {
	    alert("O formato correto do Campo Data de Nascimento é (dd/mm/aaaa).")
        return false;
    }
	if (document.getElementsByName("txtSexo")[0].value === "") {
	    alert("Favor informar o Sexo.")
        return false;
    }
	if (document.getElementsByName("txtNumero")[0].value === "") {
	    alert("Favor informar o Número do Cartão do SUS.")
        return false;
    }
	if (document.getElementsByName("txtNumero")[0].value.length !== 15) {
	    alert("Número do Cartão do SUS inválido.")
        return false;
    }

    document.getElementById("form_nome").textContent = document.getElementsByName("txtNome")[0].value
    document.getElementById("form_data").textContent = "Data Nasc.: " + document.getElementsByName("txtDataNascimento")[0].value
    document.getElementById("form_sexo").textContent = "Sexo: " + document.getElementsByName("txtSexo")[0].value
    document.getElementById("form_numero").textContent = formatarNumero(document.getElementsByName("txtNumero")[0].value)
    gerarCode()
    Mudarestado()

}

function formatarNumero(value) {
    var strValor = value;
      if (strValor.length = 15) {
          strValor = strValor.substr(0, 3) + ' ' + strValor.substr(3, 4) + ' ' + strValor.substr(7, 4) + ' ' + strValor.substr(11, 4);
      }
      return strValor
  }

function gerarCode () {
    const form_numero = document.getElementsByName("txtNumero")[0].value
    const form_numeroCompleto = document.getElementsByName("txtNumeroCompleto")[0].value

    if (form_numeroCompleto) {
        JsBarcode("#barcode", (form_numeroCompleto).replaceAll(' ', ''), {
            format: "CODE128",
            width: 1.58,
            height: 40,
            displayValue: false
        });
    } else {
        JsBarcode("#barcode", (form_numero).replaceAll(' ', ''), {
            format: "CODE128",
            width: 2.1,
            height: 40,
            displayValue: false
        });
    }
}

function Mudarestado() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('image').style.display = 'block';
}

function voltar() {
    limpar()
    document.getElementById('form').style.display = 'block';
    document.getElementById('image').style.display = 'none';
}


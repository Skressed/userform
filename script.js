function submitForm(e) {

  e.preventDefault();
  const formData = new FormData(e.target);

  if ((fullnameField.checkValidity())&&(emailField.checkValidity())&&(phoneField.checkValidity())) {
    console.log('validno');

    fetch('https://example.com/userid12345/data', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      alert('Спасибо! Ваши данные сейчас обновятся');
    })
    .catch(error => {
      alert('Произошла неизвестная ошибка');
    })
  }
}


function handlePaste (e) {
    var clipboardData, pastedData;

    e.stopPropagation();
    e.preventDefault();

    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    var temporaryData = pastedData.trim();

    switch (e.target.id) {
      case "fullnameField":
        e.target.value = temporaryData.replace(/[^а-яА-Я]/g, '');
        break;
      case "emailField":
        e.target.value = temporaryData.replace(/[^@][^a-zA-Z]/g, '');
        break;
      case "phoneField":
        e.target.value = temporaryData.replace(/\D/g, '');
        break;
    }
}

document.getElementById('myForm').addEventListener('paste', handlePaste);

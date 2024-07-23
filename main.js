function reverseWords() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');
    
    // Limpa o resultado anterior
    resultDiv.innerHTML = '';

    if (inputText.trim() === '') {
        resultDiv.innerHTML = '<span style="color: #ff0000;">Por favor, insira um texto ou palavra válida.</span>';
        return;
    }

    // Divide o texto em palavras, inverte cada palavra e junta novamente
    const words = inputText.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    const resultText = reversedWords.join(' ');

    // Exibe o resultado
    resultDiv.innerHTML = `<h2>Resultado:</h2><p>${resultText}</p>`;
}

function clearTextarea() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').innerHTML = '';
}
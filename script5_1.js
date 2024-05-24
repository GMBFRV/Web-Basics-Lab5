function generateArray() {
    const arrayLength = parseInt(document.getElementById("arrayLength").value);
    let numbersArray = [];
  for (let i = 0; i < arrayLength; i++) {
    numbersArray[i] = Math.floor(Math.random() * 1001);
  }
    let sumEvenIndex = 0;
    for (let i = 0; i < arrayLength; i += 2) {
      sumEvenIndex += numbersArray[i];
    }
    let maxOddIndex = -1;
    let maxOddValue = Number.MIN_SAFE_INTEGER;
    let minOddIndex = -1;
    let minOddValue = Number.MAX_SAFE_INTEGER;
  
    for (let i = 1; i < arrayLength; i += 2) {
      if (numbersArray[i] > maxOddValue) {
        maxOddValue = numbersArray[i];
        maxOddIndex = i;
      }
      if (numbersArray[i] < minOddValue) {
        minOddValue = numbersArray[i];
        minOddIndex = i;
      }
    }
    const sortedArray = numbersArray.slice();
    sortedArray.sort((a, b) => a - b);
    const resultsElement = document.getElementById("array-results");
    resultsElement.innerHTML = "";
    resultsElement.innerHTML += `<h2 style="text-align: center; margin-top: 50px;"> Результати виконання програми:</h2>`
    resultsElement.innerHTML += `<h2>Вхідний масив:</h2>`;
    resultsElement.innerHTML += `<p>${numbersArray.join(", ")}</p>`;
    resultsElement.innerHTML += `<h2>Сума парних елементів: ${sumEvenIndex}</h2>`;
    resultsElement.innerHTML += `<h2>Максимальний елемент з непарними індексами: ${maxOddValue}, його індекс: ${maxOddIndex}</h2>`;
    resultsElement.innerHTML += `<h2>Мінімальний елемент з непарними індексами: ${minOddValue}, його індекс: ${minOddIndex}</h2>`;
    resultsElement.innerHTML += `<h2>Відсортований масив: ${sortedArray.join(", ")}</h2>`;
  }
  
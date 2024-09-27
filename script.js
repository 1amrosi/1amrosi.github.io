function generatePermutations() {
    const input = document.getElementById('wordInput').value;
    const resultList = document.getElementById('resultList');
    const resultCount = document.getElementById('resultCount');
    resultList.innerHTML = ''; // Clear previous results

    if (input.length === 0) {
        alert("يرجى إدخال كلمة.");
        return;
    }

    const permutations = getPermutations(input);
    const uniquePermutations = [...new Set(permutations)]; // Remove duplicates

    uniquePermutations.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        resultList.appendChild(listItem);
    });

    // Update the result count in the page
    resultCount.textContent = `عدد الاحتمالات: ${uniquePermutations.length}`;
}

function getPermutations(string) {
    if (string.length <= 1) return [string];

    const permutations = [];
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        const remainingChars = string.slice(0, i) + string.slice(i + 1);
        const remainingPermutations = getPermutations(remainingChars);
        for (const perm of remainingPermutations) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}

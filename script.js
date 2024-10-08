const wordInput = document.getElementById('wordInput');

// استماع لحدث الإدخال للتحقق من عدد الأحرف أثناء الكتابة
wordInput.addEventListener('input', function () {
    if (wordInput.value.length > 7) {
        alert("يجب ألا تتجاوز الكلمة 7 أحرف.");
        wordInput.value = wordInput.value.slice(0, 7); // حذف الأحرف الزائدة
    }
});

function generatePermutations() {
    const input = wordInput.value;
    const resultList = document.getElementById('resultList');
    const resultCount = document.getElementById('resultCount');
    resultList.innerHTML = ''; // مسح النتائج السابقة

    if (input.length === 0) {
        alert("يرجى إدخال كلمة.");
        return;
    }

    const permutations = getPermutations(input);
    const uniquePermutations = [...new Set(permutations)]; // إزالة التكرارات

    uniquePermutations.forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        resultList.appendChild(listItem);
    });

    // تحديث عدد النتائج
    resultCount.textContent = `عدد الاحتمالات: ${uniquePermutations.length}`;
}

// دالة لتوليد كل الاحتمالات
function getPermutations(string) {
    if (string.length <= 1) {
        return [string];
    }

    let permutations = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let remainingChars = string.slice(0, i) + string.slice(i + 1);
        let remainingPermutations = getPermutations(remainingChars);
        remainingPermutations.forEach(permutation => {
            permutations.push(char + permutation);
        });
    }
    return permutations;
}

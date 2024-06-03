// 로또 번호를 선정하는 함수
function getRandomLottoNum(count) {
    let selectedNumber = [];
    while (selectedNumber.length < count) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!selectedNumber.includes(randomNumber)) {
            selectedNumber.push(randomNumber);
        }
    }
    return selectedNumber;
}


// 랜덤한 색상을 생성하는 함수
// 색상 값과 맞는 포맷인 #XXXXXX 난수 생성
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
btn.addEventListener("click", function () {
    // result1.innerText = getRandomLottoNum(7).join(" ");
    const numbers = getRandomLottoNum(7);

    // 배열에 담긴 각 요소에 대해 랜덤한 색깔을 부여히야 반환할 배열을 선언
    // gpt 활용 -> 랜덤한 색상을 생성할 수 있는 함수
    // gpt 활용 -> span 태그로 인라인 요소를 사용하여 백그라운드 색상과 숫자를 출력
    const spanElements = numbers.map(num => {
        const color = getRandomColor(); // 랜덤한 색상을 생성.
        return `<span style="background-color: ${color};">${num}</span>`;   // span : html의 인라인 요소로 사용. map을 사용하여 각각의 숫자마다 랜덤한 색깔을 부여
    }).join("");
    result1.innerHTML = spanElements;
});
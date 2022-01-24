// TODO 구입 기능

// -[x] 로또 구입금액 입력하면 금액에 해당하는 로또를 발급한다
    // -[x] 로또를 구입하면 총 ~개를 구매하였습니다.
    // -[x] 로또 1장의 가격은 1000원이다
        // -[x] 1000원 미만 입력할 경우 에러
    // -[x] 로또 구매금액은 몫만 추출해서 개수로 반환  ( 1000원 단위로 맞춰줘야함 )
    // -[x] 로또 아이콘 개수에 맞게 추가

// -[x] 소비자는 자동 구매를 할 수 있어야 한다
// -[x] 복권번호는 토글 버튼을 클릭하면 볼 수 있다
    // -[x] 개수에 맞게 번호 랜덤 6개 보여주기




const $=(s)=>document.querySelector(s);

const moneyBtn = $('#input-btn');
const LOTTO = 1000;
const model = $('#model-window');


const lottoTicekIcon=()=>{
    return `<span class="lotto-icon mx-1 text-4xl" >🎟️ </span>`;
};





const randomLotto=(lottoNums)=>{

    return `
            <span class=random-lotto>${lottoNums}</span>
            `;
}

const getRandNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min+1));
}


const getLottoNumber=()=>{
    const lottoNumber = new Set();

    while(lottoNumber.size < 6){
        lottoNumber.add(getRandNumber(1,45));
    }

    return `${[...lottoNumber]}<br>`;
}




model.addEventListener("click",()=>{

    const lottoNumber = $('#number-open');


    const checkNumber = $('.lotto-numbers-toggle-button');
    if(checkNumber.checked){
        hiddenElement(lottoNumber);

    }

    else{
        openElement(lottoNumber);
    }



});


const openElement =(e)=>{
    return e.classList.remove('lotto-none');
};

const hiddenElement=(e)=>{
    return e.classList.add('lotto-none');
}


moneyBtn.addEventListener("click",()=>{

    const lottoCount = $('#lotto-count');
    const lottoNumber = $('#number-open');
    const lottoContainer = $('#lotto-container-row');
    const inputValue = $('#input-number');
    let getCount = Math.floor(Number(inputValue.value/LOTTO));


    if(inputValue.value < 1000){
        alert("1000원 이상입력하셔야 구매 할 수 있습니다.");
    }


    else{
        lottoCount.innerHTML=`총 ${getCount}개를 구매하였습니다.`;
        lottoContainer.innerHTML=lottoTicekIcon().repeat(getCount);
    }

    const checkNumber = $('.lotto-numbers-toggle-button');


        if(lottoNumber.children.length !== getCount){
            // 클릭될때마다 이게 실행되는게 문제
            for(let i=0; i<getCount; i++){
                lottoNumber.insertAdjacentHTML('beforeend',randomLotto(getLottoNumber()));
            }
        }
        openElement(lottoNumber);


});



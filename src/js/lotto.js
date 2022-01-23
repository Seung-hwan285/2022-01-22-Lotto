// TODO 구입 기능

// -[x] 로또 구입금액 입력하면 금액에 해당하는 로또를 발급한다
    // -[x] 로또를 구입하면 총 ~개를 구매하였습니다.
    // -[x] 로또 1장의 가격은 1000원이다
    // -[x] 로또 구매금액은 몫만 추출해서 개수로 반환  ( 1000원 단위로 맞춰줘야함 )
    // -[x] 로또 아이콘 개수에 맞게 추가

// -[] 소비자는 자동 구매를 할 수 있어야 한다
// -[] 복권번호는 토글 버튼을 클릭하면 볼 수 있다

const $=(s)=>document.querySelector(s);

const moneyBtn = $('#input-btn');
const LOTTO = 1000;


const lottoTicekIcon=()=>{
    return `<span class="lotto-icon mx-1 text-4xl" >🎟️ </span>`;
};

moneyBtn.addEventListener("click",()=>{

    const lottoCount = $('#lotto-count');
    const inputValue = $('#input-number').value;
    const lottoContainer = $('#lotto-container-row');

    const getCount = Math.floor(Number(inputValue/LOTTO));

    lottoCount.innerHTML=`총 ${getCount}개를 구매하였습니다.`;
    lottoContainer.innerHTML=lottoTicekIcon().repeat(getCount);



});


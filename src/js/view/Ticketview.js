
export const lottoTicekIcon=()=>{
    return `<span class="lotto-icon mx-1 text-4xl" >🎟️ </span>`;
};

export const ticketView=()=>{
    const LOTTO = 1000;
    const $=(s)=>document.querySelector(s);
    const inputValue = $('#input-number');
    const lottoContainer = $('#lotto-container-row');
    let getCount = Math.floor(Number(inputValue.value/LOTTO));


    const lottoCount =$('#lotto-count');


    lottoCount.innerHTML=`총${getCount}개를 구매하였습니다.`;
    lottoContainer.innerHTML=lottoTicekIcon().repeat(getCount);
};

export const lottoTicekIcon=()=>{
    return `<span class="lotto-icon mx-1 text-4xl" >๐๏ธ </span>`;
};

export const ticketView=()=>{
    const LOTTO = 1000;
    const $=(s)=>document.querySelector(s);
    const inputValue = $('#input-number');
    const lottoContainer = $('#lotto-container-row');

    let getCount = Math.floor(Number(inputValue.value/LOTTO));

    let getCountdivions = Number(inputValue.value%LOTTO);



    const lottoCount =$('#lotto-count');


    alert(`๊ฑฐ์ค๋ฆ๋ ${getCountdivions} ์ ์๋๋ค.`);
    lottoCount.innerHTML=`์ด ${getCount}๊ฐ๋ฅผ ๊ตฌ๋งคํ์์ต๋๋ค.`;
    lottoContainer.innerHTML=lottoTicekIcon().repeat(getCount);
};
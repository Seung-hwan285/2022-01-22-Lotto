import {getRandNumber, hiddenElement, openElement} from "../controller/lottoController.js";
const $=(s)=>document.querySelector(s);
export const randomLotto=(lottoNums)=>{

    return `
            <span class="random-lotto">${lottoNums} </span>
            `;
}



export const getLottoNumber=()=>{
    const lottoNumber = new Set();

    while(lottoNumber.size < 6){
        lottoNumber.add(getRandNumber(1,45));
    }

    return `${[...lottoNumber]}<br>`;
}





export const checkHandle=()=>{
    const lottoNumber = $('#number-open');


    const checkNumber = $('.lotto-numbers-toggle-button');

    if(checkNumber.checked){
        hiddenElement(lottoNumber);
    }

    else{
        openElement(lottoNumber);
    }
}


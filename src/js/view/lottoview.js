import {getRandNumber, hiddenElement, openElement} from "../controller/lottoController.js";
import {FIVE_RESULT, FOUR_RESULT, SIX_RESULT, THREE_RESULT} from "../utils/constant.js";
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


export const randomNumberHandle=()=>{
    // random 노드리스트랑 당첨번호 입력한 노드리스트 합쳐줘야함
    const random = document.querySelectorAll('.random-lotto');

    const winngNumber = document.querySelectorAll('.winning-number');
    let count =0;
    const changeWin = [...winngNumber].map((number=>{
        return number.value;
    }));

    random.forEach(number=>{

        const result = ['11','24','30','41','5','2'];

        const bonusNumber =$('.bonus-number');

        const stringNumber = number.innerText;

        let splitNumber =stringNumber.split(",");

        splitNumber=[...splitNumber,...changeWin];
        console.log(splitNumber);
        splitNumber.forEach(splitNum=>{

            if(result.includes(splitNum)){
                count++;

            }
        });
        // if(splitNumber.includes(splitNumber)){
        //     count++;
        //     console.log(count);
        // }



        if(THREE_RESULT === count){
            $('#text-title').innerHTML=` 🏆 당첨 통계 🏆 <div class="d-flex justify-center">
            <table class="result-table border-collapse border border-black">
              <thead>
                <tr class="text-center">
                  <th class="p-3 same-count">일치 갯수</th>
                  <th class="p-3">당첨금</th>
                  <th class="p-3">당첨 갯수</th>
                </tr>
              </thead>

                <tr class="text-center">
                  <td class="p-3" id="three">3개</td>
                  <td class="p-3" >5,000</td>
                  <td class="p-3"  id="three-result">3개</td>
                </tr>`;

            //THREE_COUNT.innerHTML= `${count}개`;

        }
        else if ( FOUR_RESULT ===count){
            $('#text-title').innerHTML=` <div class="d-flex justify-center">
            <table class="result-table border-collapse border border-black">
              <thead>
                <tr class="text-center">
                  <th class="p-3 same-count">일치 갯수</th>
                  <th class="p-3">당첨금</th>
                  <th class="p-3">당첨 갯수</th>
                </tr>
              </thead>
              
                  <tr class="text-center">
                  <td class="p-3" id="four">4개</td>
                  <td class="p-3" >50,000</td>
                  <td class="p-3"  id="four-result">4개</td>
                </tr>`;
        }

        else if( FIVE_RESULT ===count){
            $('#text-title').innerHTML=` <div class="d-flex justify-center">
            <table class="result-table border-collapse border border-black">
              <thead>
                <tr class="text-center">
                  <th class="p-3 same-count">일치 갯수</th>
                  <th class="p-3">당첨금</th>
                  <th class="p-3">당첨 갯수</th>
                </tr>
              </thead>
                    <tr class="text-center">
                  <td class="p-3" id="five">5개</td>
                  <td class="p-3" >1,500,000</td>
                  <td class="p-3"  id="five-result">5개</td>
                </tr>`;
        }
        else if ( SIX_RESULT ===count){
            $('#text-title').innerHTML=` <div class="d-flex justify-center">
            <table class="result-table border-collapse border border-black">
              <thead>
                <tr class="text-center">
                  <th class="p-3 same-count">일치 갯수</th>
                  <th class="p-3">당첨금</th>
                  <th class="p-3">당첨 갯수</th>
                </tr>
              </thead>
                 <tr class="text-center">
                  <td class="p-3" id="six">6개</td>
                  <td class="p-3" >2,000,000,000</td>
                  <td class="p-3" id="six-result">6개</td>
                </tr>`;
        }
    });
}
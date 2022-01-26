// TODO 구입 기능

// -[x] 로또 구입금액 입력하면 금액에 해당하는 로또를 발급한다
    // -[x] 로또를 구입하면 총 ~개를 구매하였습니다.
    // -[x] 로또 1장의 가격은 1000원이다
        // -[x] 1000원 미만 입력할 경우 에러
    // -[x] 로또 구매금액은 몫만 추출해서 개수로 반환  ( 1000원 단위로 맞춰줘야함 )
    // -[x] 로또 아이콘 개수에 맞게 추가
    // -[] 거스름돈 추가

// -[x] 소비자는 자동 구매를 할 수 있어야 한다
// -[x] 복권번호는 토글 버튼을 클릭하면 볼 수 있다
    // -[x] 개수에 맞게 번호 랜덤 6개 보여주기


// TODO 당첨 결과 기능
// -[x] 당첨결과는 모달창으로 개수에 맞게 보여준다.
// 



import {lottoTicket} from "./Ticket.js";
import {openElement} from "../controller/lottoController.js";
import {checkHandle, getLottoNumber, randomLotto} from "../view/lottoview.js";


const $=(s)=>document.querySelector(s);

const moneyBtn = $('#input-btn');
const model = $('#model-window');


const LOTTO =1000;

const winNumber = $('.open-result-modal-button');

export class Lotto{

    static lottoCheckBtnHandle(){
        const lottoNumber = $('#number-open');
        const inputValue = $('#input-number');
        let getCount = Math.floor(Number(inputValue.value/LOTTO));
        if(lottoNumber.children.length !== getCount){

            for(let i=0; i<getCount; i++){
                lottoNumber.insertAdjacentHTML('beforeend',randomLotto(getLottoNumber()));
            }
        }
        openElement(lottoNumber);
    }



    static lottoResult(){
        const random = document.querySelectorAll('.random-lotto');
        const result = ['11','24','30','41','5','2'];

        const THREE_RESULT = 3;
        const FOUR_RESULT=4;
        const FIVE_RESULT =5;
        const FIVE_BONUS_RESULT =6;
        const SIX_RESULT =6;


        const THREE_COUNT = $('#three-result');
        const FOUR_COUNT = $('#four-result');
        const FIVE_COUNT = $('#five-result');
        const FIVE_B_COUNT = $('#five-b-result');
        const SIX_COUNT = $('#six-result');


        let count =0;

        random.forEach(number=>{
            const stringNumber = number.innerText;

            const splitNumber =stringNumber.split(",");



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
                  <th class="p-3">일치 갯수</th>
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
                console.log(count);
            }
            else if ( FOUR_RESULT ===count){
                $('#text-title').innerHTML=` <div class="d-flex justify-center">
            <table class="result-table border-collapse border border-black">
              <thead>
                <tr class="text-center">
                  <th class="p-3">일치 갯수</th>
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
                  <th class="p-3">일치 갯수</th>
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
                  <th class="p-3">일치 갯수</th>
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
        // const randomList=Array.from(random);
        // console.log(randomList);
        // const randomValue = randomList.map(number=>number.innerText);



        // result.forEach(number=>{
        //     // 로또번호들이 문자열로 들어가고 있음 분리해서 비교해줘야함
        //     console.log(randomValue);
        //     if(randomValue.includes(number)){
        //         count++;
        //         console.log(count);
        //     }
        //
        // });


    }

}




moneyBtn.addEventListener("click",lottoTicket);
model.addEventListener("click",checkHandle);


winNumber.addEventListener("click",()=>{


    Lotto.lottoResult();
});


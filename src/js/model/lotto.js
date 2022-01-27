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
// -[] 다시 시작버튼을 누르면 게임을 다시 시작할 수 있다.



import {lottoTicket} from "./Ticket.js";
import {openElement} from "../controller/lottoController.js";
import {checkHandle, getLottoNumber, randomLotto, randomNumberHandle} from "../view/lottoview.js";



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


        const THREE_COUNT = $('#three-result');
        const FOUR_COUNT = $('#four-result');
        const FIVE_COUNT = $('#five-result');
        const FIVE_B_COUNT = $('#five-b-result');
        const SIX_COUNT = $('#six-result');



        randomNumberHandle();



    }


    static lottoRestart(){

            let link = 'index.html';
            location.href=link;
            location.replace(link);
            window.open(link);

    }
}

const reset =$('#reset');



moneyBtn.addEventListener("click",lottoTicket);
model.addEventListener("click",checkHandle);
winNumber.addEventListener("click",Lotto.lottoResult);
reset.addEventListener("click",Lotto.lottoRestart);

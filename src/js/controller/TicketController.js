import {ticketView} from "../view/Ticketview.js";
import {lottoCheckBtnHandle} from "../model/lotto.js";

const $=(s)=>document.querySelector(s);

export const TicketHandle=()=>{


    const inputValue = $('#input-number');

    if(inputValue.value < 1000){
        alert("1000원 이상입력하셔야 구매 할 수 있습니다.");
    }

    else{
        lottoCheckBtnHandle();
        ticketView();
    }
}
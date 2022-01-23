describe('My First Test', () => {
    beforeEach('접속', () => {
        cy.visit('http://localhost:63342/Lotto/index.html?');
    });


    it('구입금액 입력하고 아이콘,개수 알맞게 나오는지 테스트',()=>{

       cy.get('#input-number').type(2000);

       const getCount  = Math.floor(Number(2000/1000));
       cy.get('#input-btn').click();

       cy.get('#lotto-count').should('have.text', `총 ${getCount}개를 구매하였습니다.`);




        cy.get('.lotto-icon').then(lottoIcon=>{
            expect(lottoIcon.length).to.equal(2);
        });

    });


    it('로또 구입금액 입력 1000원 미만인지 테스트',()=>{

        const stub = cy.stub();
        cy.on('window:alert',stub);


        cy.get('#input-number').type(100);
        cy.get('#input-btn').click()
            .then(()=>{
               expect(stub.getCall(0)).to.calledWith('1000원 이상입력하셔야 구매 할 수 있습니다.');
            });
    });
});
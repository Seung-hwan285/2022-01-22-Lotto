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


    it('번호보기 버튼을 누르면 번호숨겨지는지 테스트',()=>{
       cy.get('#input-number').type(1000);
       cy.get('#input-btn').click();

       cy.get('#model-window').click();
       cy.get('#model-window').click();

    });


    it('거스름돈 기능 테스트',()=>{
       const stub = cy.stub();

       cy.on('window:alert',stub);

       cy.get('#input-number').type(1234);
       cy.get('#input-btn').click()
           .then(()=>{
           expect(stub.getCall(0)).to.be.calledWith('거스름돈 234 원 입니다.');
       });

    });


    it('당첨번호 입력 결과에 표시 테스트',()=>{

        cy.get('#input-number').type(1000);
        cy.get('#input-btn').click();


        const result = ['11','24','30','41','5','2'];

        cy.get('.winning-number').then(numbers=>{
            [...numbers].forEach(number=>{
               cy.wrap(number).type(result.shift());
            });
        });
        cy.get('.open-result-modal-button').click();

    });



});

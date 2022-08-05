describe("Helpers test", function() {
    beforeEach(function () {
    billAmtInput.value = "100";
    tipAmtInput.value = "15";
    submitPaymentInfo();
    });
    it('should return the sum of the total of the type of amount given', function () {
        expect(sumPaymentTotal("tipAmt")).toEqual(15);
        expect(sumPaymentTotal("billAmt")).toEqual(100);
      });
    it('should calculate the tip percent when passed the bill and tip amounts', function () {
      expect(calculateTipPercent(100, 15)).toEqual(15);
    });
    it('should append a new td to the tr passed with the value passed to it', function () {
        testTr = document.createElement("tr")
        appendTd(testTr, 'test')
        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerHTML).toEqual('test');      
    });
    it('should append a new td with an innerText of X', function () {
        testTr = document.createElement("tr")
        appendDeleteBtn(testTr)
        expect(testTr.children.length).toEqual(1);
        expect(testTr.firstChild.innerHTML).toEqual('X');      
    });
  
    afterEach(function() {
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentTbody.innerHTML = ""
        billAmtInput.value = "";
        tipAmtInput.value = "";
        paymentId = 0;
        allPayments = {};
    });
  });
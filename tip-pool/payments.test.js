describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = "100";
      tipAmtInput.value = "15";
    });
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
      });
    it('should return an object with the correct bill, tip and tip percent', function () {
      expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '15', tipPercent: 15});
    });
    it('should append 1 row to the paymant table body ', function () {
        appendPaymentTable({billAmt: '100', tipAmt: '15', tipPercent: 15})
        expect(paymentTbody.children[0].children[0].innerText).toEqual("$100");
        expect(paymentTbody.children[0].children[1].innerText).toEqual("$15");
        expect(paymentTbody.children[0].children[2].innerText).toEqual("15%");
      });
    it('should update the Shift summary with the percent avg, and bill and tip amount', function () {
        updateSummary()
        expect(summaryTds[2].innerHTML).not.toEqual('');
    });
    afterEach(function() {
      // teardown logic
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
  
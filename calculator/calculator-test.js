
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 800000, years: 30, rate: 3.5})).toEqual('3592.36');
  expect(calculateMonthlyPayment({amount: 1000000, years: 20, rate: 3})).toEqual('5545.98');
});

it("should return a result with 2 decimal places", function() {
  let lengthTest = calculateMonthlyPayment({amount: 1000000, years: 20, rate: 3})
  lengthTest = lengthTest.split('.')
  expect(lengthTest[1].length).toEqual(2);
});


/// etc

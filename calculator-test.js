it('should be able to correctly calculate the monthly rate', function() {
  // ...
  const values = {
    amount: 3000,
    years: 5,
    rate: 3.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('54.98');
});

it("should to calculate a result that has 2 decimal places", function() {
  const values = {
    amount: 15939.75,
    years: 10,
    rate: 4.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.74');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1500,
    years: 50,
    rate: 95
  };
  expect(calculateMonthlyPayment(values)).toEqual('118.75');
});



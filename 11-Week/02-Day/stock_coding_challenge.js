/*
Suppose we could access yesterday's stock prices as a list, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices_yesterday)
# returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
*/

function get_max_profit(stock_prices) {
	var prev_price = stock_prices[0];
	var max_profit = 0;
  var min_loss = -1000000000;
  for (var i = 1; i < stock_prices.length; i++) {
  	var profit = 0;
    var ploss = 0;
    if (stock_prices[i] < prev_price) {
      ploss = stock_prices[i] - prev_price;
    	prev_price = stock_prices[i];

      if (ploss > min_loss)
        min_loss = ploss
    }
    else {
      profit = stock_prices[i] - prev_price;
    }
    if (profit > max_profit) {
    	max_profit = profit;
    }
  }
  console.log("max_profit = ", max_profit)
  if (max_profit == 0) console.log("min_loss = ", min_loss)
  console.log('')
}

stock_prices_yesterday = [10, 7, 5, 8, 11, 9];
get_max_profit(stock_prices_yesterday)
stock_prices_yesterday = [1, 7, 5, 8, 11, 9];
get_max_profit(stock_prices_yesterday)
stock_prices_yesterday = [10, 7, 5, 8, 9];
get_max_profit(stock_prices_yesterday)
stock_prices_yesterday = [10, 7, 5, 4, 1];
get_max_profit(stock_prices_yesterday)
stock_prices_yesterday = [10, 2, 9, 1, 7, 10]
get_max_profit(stock_prices_yesterday)



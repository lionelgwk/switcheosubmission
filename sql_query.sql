select temp4.address
from
(
select temp3.address, temp3.denom, temp3.total_balance,
case
when temp3.denom = "usdc" then temp3.total_balance * @usdc
when temp3.denom = "swth" then temp3.total_balance * @swth
when temp3.denom = "tmz" then temp3.total_balance * @tmz
end
as fiat_balance
from
(
select temp1.address, temp1.denom, temp1.amount + temp2.trade_amt as total_balance from
(select * from balances where block_height > 730000) as temp1,
(select address, denom, sum(amount) as trade_amt from trades
group by address) as temp2
where temp1.address = temp2.address
) as temp3
) as temp4
where temp4.fiat_balance >= 500;
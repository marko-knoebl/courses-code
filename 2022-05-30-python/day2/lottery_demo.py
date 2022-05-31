from pprint import pprint
import lottery

# 6 out of 49
print(lottery.lottery_numbers())

print(lottery.lottery_numbers(10, 3))

print(lottery.lottery_numbers(max=10, num=3))

print(lottery.lottery_numbers(num=3, max=10))
# [30, 23, 30, ...] <- this is allowed (keep it simple)

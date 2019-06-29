
from typing import List
import math


def abs_vals_sum_minization(a: List[int]) -> int:
    is_even = len(a) % 2 == 0
    target_index = len(a) / 2 - 1 if is_even else math.floor(len(a) / 2) 
    return a[int(target_index)]


print(abs_vals_sum_minization([2, 4, 7]))
print(abs_vals_sum_minization([2, 4, 7, 6]))
print(abs_vals_sum_minization([2, 4, 7, 6, 6]))
print(abs_vals_sum_minization([2, 4, 7, 6, 6, 8]))

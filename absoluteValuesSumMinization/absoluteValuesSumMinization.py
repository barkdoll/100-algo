
import math

def absoluteValuesSumMinimization(a: list) -> int:
    is_even = len(a) % 2 == 0
    target_index = len(a) / 2 - 1  if is_even else math.floor(len(a) / 2) 
    return a[int(target_index)]


print(absoluteValuesSumMinimization([2, 4, 7]));
print(absoluteValuesSumMinimization([2, 4, 7, 6]));
print(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
print(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
 
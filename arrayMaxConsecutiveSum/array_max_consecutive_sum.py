
from typing import List


def array_max_consecutive_sum(input_array: List[int], k: int) -> int:
    highest = 0
    for i, n in enumerate(input_array):
        eval_sum = sum(input_array[i:i+k])
        highest = eval_sum if eval_sum > highest else highest

    return highest


inputs = [
    [[2, 3, 5, 1, 6], 2],
    [[2, 3, 7, 7, 11, 1, 9], 4]
]

for inp in inputs:
    print(f'{inp} -> {array_max_consecutive_sum(*inp)}')

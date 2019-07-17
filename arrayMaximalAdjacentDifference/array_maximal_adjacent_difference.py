
from typing import List


def array_maximal_adjacent_difference(input_array: List[int]) -> int:

    highest = 0

    for idx, x in enumerate(input_array):
    
        if (idx+1) >= len(input_array):
            break

        eval_diff = abs(x - input_array[idx+1])
        highest = highest if highest > eval_diff else eval_diff 

    return highest


tests = [
    [2, 4, 1, 0],
    [2, 9, 4, 0]
]

for t in tests:
    print(f'{t} -> {array_maximal_adjacent_difference(t)}')

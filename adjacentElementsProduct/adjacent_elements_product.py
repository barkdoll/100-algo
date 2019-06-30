
from typing import List


def adjacent_elements_product(input_array: List[int]) -> int:
    products = [
        n * input_array[idx+1]
        for idx, n in enumerate(input_array) 
        if 0 <= (idx+1) < len(input_array)
    ]

    return max(products)


inputs = [
    [3, 6, -2, -5, 7, 3],
    [3, 2, 9, 7, 4, 5],
    [-1, -5, -9, -3, 4, 7]
]

for ia in inputs:
    print(f'{ia} -> {adjacent_elements_product(ia)}')

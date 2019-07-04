
from typing import List
from functools import reduce


def array_conversion(input_array: List[int]) -> int:

    def product(factors: List[int]) -> int:
        return reduce(lambda a, b: a * b, factors)

    def alternate(bundle: List[int], iteration: int = 0) -> int:
        if len(bundle) == 1:
            return bundle[0]

        processed = (
            [
                sum([x, bundle[i+1]])
                for i, x in enumerate(bundle)
                if (i % 2 == 0)
            ]
            if iteration % 2 == 0 else
            [
                product([x, bundle[i+1]])
                for i, x in enumerate(bundle)
                if (i % 2 == 0)
            ]
        )

        return alternate(processed, iteration+1)

    return alternate(input_array)


inputs = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [2, 5, 9, 4, 1, 6, 5, 2]
]

for inp in inputs:
    print(f'{inp} -> {array_conversion(inp)}')


from typing import List


def alternating_sums(a: List[int]) -> List[int]:
    return [
        sum(x for i, x in enumerate(a) if i % 2 == 0),
        sum(x for i, x in enumerate(a) if i % 2 != 0)
    ]


inputs = [
    [50, 60, 60, 45, 70],
    [50, 90, 20],
    [65, 105, 40, 95],
]

for inp in inputs:
    print(f'{inp} -> {alternating_sums(inp)}')


from typing import List


def are_similar(a: List[int], b: List[int]) -> bool:
    if len(a) != len(b):
        return False

    sort_a = sorted(a)
    sort_b = sorted(b)
    if str(sort_a) != str(sort_b):
        return False

    diffs = []
    for idx, item in enumerate(sort_a):
        if item != sort_b[idx]:
            diffs.append(item)

    return len(diffs) <= 2


inputs = [
    [[1, 2, 3], [1, 2, 3]],
    [[1, 2, 3], [2, 1, 3]],
    [[1, 2, 2], [2, 1, 1]]
]

for inp in inputs:
    print(f'{inp} -> {are_similar(*inp)}')

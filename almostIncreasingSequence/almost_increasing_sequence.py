
from typing import List


def almost_increasing_sequence(sequence: List[int]) -> bool:
    return (len([n for i, n in enumerate(sequence)
            if 0 <= (i+1) < len(sequence) and
            sequence[i+1] < n]) <= 1)


print(almost_increasing_sequence([1, 3, 2, 1]))
print(almost_increasing_sequence([1, 3, 2]))

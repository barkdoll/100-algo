
from typing import List


def all_longest_strings(input_array: List[str]) -> List[str]:
    longest = max(map(len, input_array))
    return [n for n in input_array if len(n) == longest]


inputs = [
    ['aba', 'aa', 'ad', 'vcd', 'aba'],
    ['vvx', 'ikl', 'kpp', 'md', 'kjd'],
    ['asdfad', 'sskl', 'irojgoe', 'irjeioj', 'gojkfd'],
    ['r', 'qepotwe', 'rejwgo', 'd', 'optr'],
    ['plsdfk', 'njbjowiq', 'mweobupo', 'jeoiwzxf', 'dv']
]

for inp in inputs:
    print(f'{inp} -> {all_longest_strings(inp)}')

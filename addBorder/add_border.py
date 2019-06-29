
from typing import List


def add_border(picture: List[str]) -> List[str]:

    longest = len(max(picture, key=len))

    unframed = [
        '* ' + s + f"{' ' * (longest - (len(s)-1))}*"
        if len(s) < longest
        else f"* {s} *"
        for s in picture
    ]

    edge = '*' * (longest + 4)
    pad = f"*{' ' * (longest + 2)}*"

    return [edge, pad] + unframed + [pad, edge]


print(
    '\n'.join(add_border(['abc', 'ded'])),
    end='\n\n')

print('\n'.join(add_border([
        "Let's try a",
        "big sentence",
        "instead of these",
        "dumb letters."])),
      end='\n\n')

print('\n'.join(
    add_border(['Eat', 'mor', 'chikin'])),
    end='\n\n')

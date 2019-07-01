

def are_equally_strong(
        your_left: int, your_right: int,
        friends_left: int, friends_right: int) -> bool:
    your_weakest = min(your_left, your_right)
    your_strongest = max(your_left, your_right)
    friends_weakest = min(friends_left, friends_right)
    friends_strongest = max(friends_left, friends_right)

    return (
        (your_strongest == friends_strongest) and
        (your_weakest == friends_weakest)
    )

inputs = [
    [10, 15, 15, 10],
    [15, 10, 15, 10],
    [15, 10, 15, 9]
]

for inp in inputs:
    print(f'{inp} -> {are_equally_strong(*inp)}')

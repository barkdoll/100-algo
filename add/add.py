

def add(a, b):
    return a + b

print(add(1, 2))
print(add(3, 2))


def total(*args: int) -> int: 
    return sum(args)

print(total(1,2,3,4,5))
print(total(2,3))

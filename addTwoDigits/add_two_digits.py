
from typing import TypeVar 

str_or_int = TypeVar('str_or_int', str, int)

def addTwoDigits(n: str_or_int) -> int:
	return sum(int(x) for x in list(str(n)))


print(addTwoDigits('29'))
print(addTwoDigits(333))
print(addTwoDigits('872'))
print(addTwoDigits(46345))

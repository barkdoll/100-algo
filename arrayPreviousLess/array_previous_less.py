
from typing import List

def array_previous_less(items: List[int]) -> List[int]:
	
	aggregate = []

	for i, x in enumerate(items):   
		inferiors = [x for x in items[:i] if x < items[i]]
		aggregate.append(
			-1 if len(inferiors) == 0 
			else inferiors[-1] )
	
	return aggregate


tests = [
	[3, 5, 2, 4, 5],
	[2, 4, 7, 3, 1, 3]
]

for t in tests: 
	print(f'{t} -> {array_previous_less(t)}')

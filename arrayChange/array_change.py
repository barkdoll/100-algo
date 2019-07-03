

def array_change(input_array):
    
    increments = 0

    for i, x in enumerate(input_array):
        if i == 0:
            continue
        
        if x <= (input_array[i-1]):
            increments += ((input_array[i-1]+1) - x)
            input_array[i] += increments

    return increments


inputs = [[1, 1, 1], [1, 3, 0], [3, 9, 5]]

for inp in inputs:
    print(f'{inp} -> {array_change(inp)}')


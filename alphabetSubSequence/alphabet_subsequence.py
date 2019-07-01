
def alphabet_subsequence(s: str) -> bool:
    # chr(ord(char)+1) if ord(char) != 122 else 'a'
    # for char in input_string
    return all(
        ord(char) < ord(s[i+1])
        for i, char in enumerate(s)
        if 0 <= (i+1) < len(s))


inputs = ['zab', 'effg', 'cdce', 'ace', 'bxz']

for inp in inputs:
    print(f'{inp} -> {alphabet_subsequence(inp)}')

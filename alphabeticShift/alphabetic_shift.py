
def alphabetic_shift(input_string: str) -> str:
    return ''.join(
        # return 'a' if the Unicode code point is for 'z' (122)
        chr(ord(char)+1) if ord(char) != 122 else 'a'
        for char in input_string
    )

print(alphabetic_shift('crazy'))
print(alphabetic_shift('bonkers'))
print(alphabetic_shift('whattup'))

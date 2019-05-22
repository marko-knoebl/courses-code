import sys
print(sys.argv)
if (len(sys.argv) > 1 and sys.argv[1] == 'loud'):
    print('HELLO')
else:
    print('hello')

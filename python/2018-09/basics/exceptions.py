try:
    a = open('anythinng.txt', 'r+', encoding="utf-8")
    try:
        a.write('Hello')
    except Exception as e:
        print('error writing to file:')
        print(e)
    else:
        print('done!')
    finally:
        a.close()
    print('ending program')
except IOError as e:
    print('could not open file')
    print(e)

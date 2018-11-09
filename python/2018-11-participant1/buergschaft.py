# Lies schiller.txt und speichere modifiziert als buergschaqft_mod.txt
# file = open('schiller.txt', 'r+', encoding='UTF-8')
# close('schiller.txt')

with open("schiller.txt", "r+", encoding="UTF-8") as file:
    with open("buergschaft_mod.txt", "w+", encoding="UTF-8") as file_out:
        line_list = file.readlines()
        #mod_line_list = []
        line_num = 1
        for line in line_list:
            'Zeilenümbrüche rechts löschen'
            line = line.rstrip()
            line = line.ljust(60) + str(line_num).rjust(3) + "\n"
            longline = str("  ") + line
            file_out.write(longline)
            line_num += 1


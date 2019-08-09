import datetime

print("Hello!")
print("When were you born?")

# Das Resultat von input() ist immer ein string.
year_str = input()
year_int = int(year_str) # Konvertieren in einen int

date_birth = datetime.date(year_int, 1, 1)

date_today = datetime.date.today()

# Alter in Jahren
age = 2019 - year_int
print(f"You are {age} years old.")

# Alter in Sekunden
# type timedelta
age_td = date_today - date_birth
age_seconds = age_td.total_seconds()
print(f"You are {age_seconds} seconds old.")

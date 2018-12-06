from e_mail_manager import get_emails

date = str(input('Please enter Date to search from in format 05-Jul-2018: '))

results = get_emails(date, "[pP]r(ue|ü)f")

print(results)
import imapclient
import re
import pyzmail

login_name = '...'
password = '...'

def get_emails():
    imapObj = imapclient.IMAPClient("imap.gmail.com", ssl=True)
    imapObj.login(login_name, password)
    imapObj.select_folder("INBOX", readonly=True)
    UIDs = imapObj.search(["SINCE", "05-Jul-2018"])

    rawMessages = imapObj.fetch(UIDs, ["BODY[]", "FLAGS"])

    imapObj.logout()

    found_emails = []

    for uid in UIDs:
        message = pyzmail.PyzMessage.factory(rawMessages[uid][b"BODY[]"])
        message_text: str = message.text_part.get_payload().decode(
            message.text_part.charset
        )
        search_in_title = re.search("[pP]r(ue|ü)f", message.get_subject())
        search_in_body = re.search("[pP]r(ue|ü)f", message_text)
        if search_in_body or search_in_title:

            urls = re.findall("https?://.+?\\.com", message_text)

            found_emails.append((uid, message.get_subject(), message_text, urls))
    
    return found_emails

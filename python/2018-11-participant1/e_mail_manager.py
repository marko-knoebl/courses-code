import imapclient
import pyzmail
import re
# do prep: pip install imapclient
#          pip install pyzmail36
# account : python.course.demo@gmail.com
# pw : spamandeggs
# remember: b'BODY[] (bytes instead of string)
# search for request and return true if found

def get_emails(date: str, search_for="[pP]r(ue|ü)f"):

    search_from = date

    #search_from = str(input('Please enter Date to search from in format 05-Jul-2018: '))

    imapObj = imapclient.IMAPClient('imap.gmail.com', ssl=True)
    # generate client

    imapObj.login('...', '...')
    # login

    imapObj.select_folder('INBOX', readonly=True)
    # select Inbox
    
    UIDs = imapObj.search(['SINCE', search_from])
    # UIDs, attention: error in book original code
    #print(UIDs)
    raw_message_list = []
    for element in UIDs:
        rawMessages = imapObj.fetch(element, [b'BODY[]', 'FLAGS'])
        raw_message_list.append(rawMessages)

    # print(message_list)
    message_list = []
    i=0
    search_results = []

    for item in raw_message_list:
        message = pyzmail.PyzMessage.factory(item[UIDs[i]][b'BODY[]'])


        # get message subject and search for substring that indicates request
        mail_subj = message.get_subject()
        if mail_subj == '':
            mail_subj = 'no subject'
        result_1 = re.search(search_for, mail_subj)
        # if result_1:
        #     print("UID: " + str(UIDs[i]) + " " + 'Subject: '+ mail_subj)

        message_text = message.text_part.get_payload().decode(message.text_part.charset)    
        # get message text and decode it to UTF-8

        result_2 = re.search(search_for, message_text)
        # 
        # search for letters that indicate request
        # if result_2:
        #     print("UID: " + str(UIDs[i]) + " " + 'Text: ' + message_text)

        if result_1 or result_2:
            
            urls = re.findall("https?://.+?\\.com", message_text)
            # for item in urls:
            #     print(item)
            search_results.append( (UIDs[i], mail_subj, message_text, urls) )    
        i +=1

    imapObj.logout()

    return search_results
    

# message.get_addresses('from')
# [('Edward Snowden', 'esnowden@nsa.gov')]
# message.get_addresses('to')
# [(Jane Doe', 'jdoe@example.com')]
# message.get_addresses('cc')
# []
# message.get_addresses('bcc')
# []
# message.text_part != None
# True
# message.text_part.get_payload().decode(message.text_part.charset)
# 'Follow the money.\r\n\r\n-Ed\r\n'
# message.html_part != None
# True
# message.html_part.get_payload().decode(message.html_part.charset)
# '<div dir="ltr"><div>So long, and thanks for all the fish!<br><br></div>-
# Al<br></div>\r\n'


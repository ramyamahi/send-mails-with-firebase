# send-mails-with-firebase

Step 1: Go to https://firebase.google.com/ and Create a new project.

Step 2: Create new folder(For eg:send-mail-firebase) and run command 

          firebase login
          
Step 3: After that command, a link opened in browser for login with mail account to continue with CLI.

Step 4: Within send-mail-firebase folder, run command and select already created project.

          firebase init functions
         
Step 5: Go to functions folder and run

          npm install nodemailer cors
          
Step 6: In index.js file, add code for send mail, add From address, mail content.

Step 7: Run command

          firebase deploy
      
Step 8: Got link in terminal https://us-central1-send-mail-340e77.cloudfunctions.net/sendMail and in browser, you will add To mail address like
        https://us-central1-send-mail-340e77.cloudfunctions.net/sendMail?dest=ramyamahendran96@gmail.com

Step 9: Now receiver(ramyamahendran96@gmail.com) received the mail. 

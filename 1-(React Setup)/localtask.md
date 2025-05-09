# local task

1. sabse phele ek folder bnayenge React name ka 

2. phir ushke ander ek folder bnayenge Project name :- abc.com ishke ander gaye aur top pe jakr CMD mein ishko access kr liya )

3. ab yaha jane ke bad me do bhi pattern bnega wo bnega jake import aur export ke sath wala then write in cmd :- code . (code space dot) to vs code mein pohoch jayenge

4. network based application bnana hai lakin live server ka use nhi krna.
to hume tarika nikala ki sabse phele vs code mein apni file bna le :- index.HTML, javaScript file :- index.js, aurbaki jitna hum code likhenge ushko modules nam ke folder mein dalenge.to humne basic level par itna setup to kr liya.

5. aur phir humne kaha ki isi ke sath agar hume live server ki requirment padte to humne ek server use kiya tha live server krke. aur abhi liver server hume yaha par configure krna pdega,
aur agar live server yaha par configure krte  to kya kya comands hume likhne padte the on cmd
agar hume koi app bnana hota to comand dete  :- npm init and enter kr dete 
to phir yeh humse kuch detail magta
(a) package name :- default jo folder name hota hai wahi package name hota hai amd enter kr dete.
(b) version jo hai wahi rakhna hai
(c) description: network app then enter
(d) entry point :- default index.js then enter
(e) test,git repo, empty then enter
(f) key word ducat india app then enter
(g) author : free lancer or company name then enter
(i) licence : MIT then enter

now package ki ek file ban gayi hogi
 ab yaha ek bar y likh kr enter krna hoga

 :- ishne humko bna kr de diya 
 # package.json

 ==> ab jo live server humare pass mein hai wo humko bna bnaya mila, 
 eshe he react hai ushka bhi kuch part eshe honge, modules wale jo humko bne bnaye dega,
 tabhi to hum bol skte hai ki wo jo bne bnaye function aur classes dega to package.json mein hume koi bhi chij add krni pde, koi bhi apke pass package hoga jo add krna chahenge
 
 
 => aur abhi ke liye agar dekhe to package konsa hai live server
 to live server agar instal krna hoga to command kya hogi : nmp i package name lite-server and enter


 => then setup is ready 
 now in vs code humara purana folder kis nam se rahta tha modules ab live server hume bna bnaya de raha hai node_module ke nam se to (modules) ishki to koi jarurat nhi hai ishko delete kr skte hai
 aur ab jab yeh humare pass install ho gya hai to automatic 
 # package_lock.json ban gaya 
 aur ish file ka kam kya hoga 
 example se smje to kuch ish trha se hota hai
 :- kesi ka yaha party mein gaye invitation mila to wo hai package.json

 to jab party mein pohoch gaye to jisne part di hai ushne apne mind mein markout kar liya ki wo person aaye hue the party mein
 to mtlb ki jitna humne instal kiya utne ko lock format mein # package_lock.json yeh rakhta hai

 pheli entry file jo bnegi wo bnegi package.json (kya kya chaiye wo yaha likh diya )ushke bad jab wo instal ho jayega to bnayenge ek lock file ki yeh aachuka hai aur jo aachuka hai wo jayega package_lock.json aur yeh file automatic banti hai

 ab itna to bna diya ab jo live server install hua ushko access krna chahte hai to access krne ke liye hum package.json par jate the aur script ke under mein lgate the ek coma 
 and command ke rupe mein likte the " start " : aur collon ke under mein dependencies ka nam
 , ab index ki jo file rakhi hai ushme kam se kam basic boiler plate code likhna pdega and niche jakr script tag mein js ko add krna hoga

 ab agar ish app ko hum serve krna chahe to command kya hoga :- npm start lite-server

 ho gaya ap live yeh ho gaya local ka setup aur ishko bnane mein 15-20 min lag gaye agar yahi same kam roj krna pde to


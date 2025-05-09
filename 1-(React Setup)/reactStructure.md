now jo app ka nam likha use ke na se ek pura folder ban gya hoga
aur ushme kuch files bna kr de di.

# React Directory Structure
1. node_modules  -> (folder)
2. public        -> (folder)
3. src           -> (folder)
4. gitignore     -> (file)
5. package       -> (file)
6. package.lock  -> (file)
7. README.md     -> (file)



1. node_modules  -> (folder)
:- depandancies folder (module - 872 items) 
yaha par agar kahani smje to do chije hongi
a. depandency
b. dev depandency


2. public        -> (folder)
:- template file
react ke under me html ki cable ek he file hoti hai aur wo file apko public ke ander mein milta hai
public ka mtlb esha item jo har koi access kr ske bina kesi authantication ke like images



3. src           -> (folder)
:- devloper workspace humara kam krne ka folder


4. gitignore     -> (file)
:- yeh project bna liya ab yeh project mujhe server par deploy krna hai.
ab jab server par hum yeh project deploy krenge to node_modules wala folder server par dalte he nhi
to do phase nikal kr aayenge 
a. devlopment phase 
b. production phase
abhi jo hum kam krenge wo hoga devloment phase phir jab project complete ho jayega to hum bnayenge ushka build aur wo build server par deploye kiya jata hai

jab hum project deploy krenge to ishme un un directories ka nam likte hai jinko server par nhi bhejna.


5. package       -> (file)
:- meta data about your app
isme kya hoga jo bhi apki app ki information hai kon konse packages use kr raha hai, kya kya chije ishke under mein aati hai wo automatically yaha likhi likhai milti hai



6. package.lock  -> (file)
aur jab package ki files install ho jati hai to unke according ban jati hai lock file



7. README.md     -> (file)
:- documantation file

 =>> 3 directory 4 files

 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 # public directory   
 1. facicon.ico
 :-
 2. index.html
 3. logo192.png
 4. logo512.png
 5. manifest.icon
 :- koi badi app apne bna di
 to pheli bar mein wo app legi time but second time phele se past load ho jayegi,
 browser se data save kr deta hai
 6. robots.txt
 :- social media bots
 url copy kru aur post kru whatsapp par to template and details show krte hai yeh bots
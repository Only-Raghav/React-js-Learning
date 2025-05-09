# (1)What Is React ?
# :- A javaScript Library for building user interfaces it is declarative(passing the arrgument)
(react ye bolta hai jo devloper daily basis Kar kam kr raha tha wo daily basic par class aur function bna raha tha, ab react bolta hai ki hum apko class and functions bne bnaye denge bss apko aana hai parameters mein kya pass krna hai bss wo bta do baki hum krke de denge
Now react is a laibrary not frame work // diff bit laibrary and frame work
laibrary rounting bnati he nhi hai aur framework routing ke sath work krti hai ishke sath router in build aata hai
example react and next js:-)

# => React is divided into Four parts:--

# (a)Component:- React is built arround the concept of components, which re self-contained UI elements that can be reused throught your application.
(:- ishka mtlb abhi to humne react mein function bnaya ya class bnaya, phele function bolre hai aur class ki form mein likhna pda to kah rehe hai class ki form mein likh rehe hai. react ne kya kiya inhedono words ko common krke ek word assign kr diya aur ushko nam de diya components in simple words hum bol skte hai,
function === components 
eg hii and hello 
mtlb ki function ya class ka code hoga use)

# (b)Virtual Dom:- React uses a virtual representation of the dom, which is more efficient than directly manipulating the actual DOM.
(virtual dom means Shadow, 
shadow ka sense kya bnega mtlb ki bhai ek taraf HTML rakha hoga aur ush html kke piche jo shadow dikh rahi hogi react ushke pass kam krta hai. react directlt DOM ke sath kam nhi krta Virtual DOM ke sath kam krta hai.
example :- apki ladai ho gayi aur ap kah rehe ho ki 2 min ruko abhi aarha tumse ladne to wo virtal dom hai.
benifit kya hoga :- agar virtual dom ke sath kam karte hai to bar bar data mein manipulate krna hai. bar bar render hoga pura ka pura aur virtual DOM agar niche rakha hua hai to wo shadow ke according kam krta hai to pura jo DOM hoga wo refresh nhi hota. kiske pass data change krna hai kebal wahi jakr kam krdeta hai
to Dom ki jagha virtual dom use karta hai)

# (c)State Management:- React provides a way to manage state with in components, which makes it easier to build complex UI's.
(State means Changes 
example:- fb post  when we upload a post to like ki quantity ek sath badti hai ya dhere dhere krke badti hai, dhere dhere to like ki count ko hum bolte hai state, click krne par value ho gyi change ish concept ko bolskte hai state)

# (d)JSX:- React uses a syntax extension called JSX, which allows you to write HTML-like code within your javaScript files.
(JSX ka simple sa mtlb ki HTML jesa dikhne wala jo content hoga ushko yaha JSX bolenge.
better form mein smje humne bnaya function aur data return kra aur data HTML ki form mein return kiya to jab HTMl ki form mein data return krenge to double cout mein design krenge, agar double couts hata diye to error milega kyuki greater than smaller than ke symbol target he nhi hote, to javaScript mein HTML likha to double couts Lagane padte hai Kyuki HTML ka part hai Lakin jab JSX mein wahi chij likhte hai to Double couts lagane ki jarurat nhi hoti, hum ushko direct likh skte hai Mtln html ka part jo mein likh rehe the complex tarike se ushko yeh aur easy kr dega aur ish patern ko yeh bol dete hai JSX.)

# React agar laibrary hai to ishka mtlb code bna bnaya milega aur agar code bna bnaya milega to react provide krta hai ishko setup krne ke tarike.

# (2) Setup React App On Local Machine

# Install Node First https://nodejs.org/en/

# npm update
--|| npm install-g npm@latest --|| 
(@ abhi yeh use nhi hoga jab hoga bta denge)

1. method using npm
--|| npm init react-app yourAppName-app
--|| cd yourAppName-app
--|| npm start

2. method using npx
--|| npx create-react-app yourAppName-app
--|| cd yourAppName-app
--|| npx start

3. method using npm vite
--|| npm create vite@latest
--|| cd yourAppName-app
--|| npm install
--|| npm run dev

# task:-
||---> if some some say ki mujhe ek network based application bna kr de do
(ab agar hum network based aplication bnana chahe to kya kya norms rakhenge.

[ Note :- 
1. firstly basic funda(agar manually kam kree to kitni dikkat hai) then 
2. react Funda(aur react ke sath kam kree to easyness kya kya rahega) 
]



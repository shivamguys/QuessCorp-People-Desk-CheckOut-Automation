> # QuessCorp PeopleDesk CheckOut Automation
CheckOut Automation for https://quess.peopledesk.in/login

# 1) Adjust the value before you want to check out, for example if want to checkout At 06:30PM and you need to go somewhere At 05:30PM set time_before_checkout=60

```
var time_before_checkout=30

```

## 2) for check out button
```
setTimeout(()=>{
document.getElementsByClassName('btn btn-org')[0].click()
},time_before_checkout*60000)

```

## 3) for final checkout confirmation

```
setTimeout(()=>{

document.getElementsByClassName('btn btn-block btn_orange')[0].click()
},time_before_checkout*60000)
```

> # How to use?

<ul>
  <li>Log Into Your <a href="https://quess.peopledesk.in/login">PeopleDesk</a> Account</li>
  <li>Open Console And paste 1,2,3 code there.</li>
  <li>Go And Enjoy Without Worrying about checkout :-)</li>
  
  </ul>

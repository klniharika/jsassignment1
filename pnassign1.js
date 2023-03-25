//Question1
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
str2=str2.trim()
str3=str3.trim()
console.log(str1+" "+str2+" "+str3)

//Question2
var pnalpha= prompt("enter value")
pnalpha=pnalpha.toLowerCase()
var npalpha=["a","e","i","o","u"]
switch(true){
    case pnalpha in npalpha:console.log("vowel");break
    case (pnalpha>="a")&&(pnalpha<="z"):console.log("consonant");break
    default:console.log("non-alphabet")
}

//Question3
var pnnum1=Number(prompt("Enter 1st number"))
var pnnum2=Number(prompt("Enter 2nd number"))
var pnoper=String(prompt("Enter operator"))
switch(pnoper){
    case "+":console.log("addition is",(pnnum1+pnnum2));break
    case "-":console.log("subtraction is",(pnnum1-pnnum2));break
    case "*":console.log("multiplication is",(pnnum1*pnnum2));break
    case "/":console.log("division is",(pnnum1/pnnum2));break
    default:console.log("Enter relative symbol")
}

//Question4
var pntri1=Number(prompt("enter 1st side"))
var pntri2=Number(prompt("Enter 2nd side"))
var pntri3=Number(prompt("Enter 3rd Number"))
if(pntri1==pntri2&&pntri2==pntri3&&pntri3==pntri1){
    console.log("Equilateral Traingle")
}
else if(pntri1==pntri2||pntri2==pntri3||pntri3==pntri1){
    console.log("Isosceles Traingle")
}
else{
    console.log("Scalene Traingle")
}

//Question5
var pnunits=Number(prompt("enter no of units"))
var total_bill
if (pnunits<=50 && pnunits>0){
    total_bill=pnunits*0.50
    console.log("total bill is",total_bill)
}
else if(pnunits>50 && pnunits<150){
    total_bill=50*0.5+(pnunits-50)*0.75
    console.log("total bill is",total_bill)
}
else if(pnunits>150 && pnunits<=250){
    total_bill=50*0.5+100*0.75+(pnunits-150)*1.20
    console.log("total bill is",total_bill)
}
else if(pnunits>250){
    total_bill=50*0.5+100*0.75+100*1.20+(pnunits-250)*1.5
    total_bill=total_bill+0.2*total_bill
    console.log("total bill is",total_bill)
}
else{
    window.alert("enter correct units")
}


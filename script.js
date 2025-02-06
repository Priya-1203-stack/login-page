let signUpBtn=document.querySelector(".signupbtn");
let signInBtn=document.querySelector(".signinbtn");
let nameField=document.querySelector(".namefield");
let title=document.querySelector(".title");
let underline=document.querySelector(".underline");
let text =document.querySelector('.text')

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='0';
    title.innerHTML='Sign In';
    text.innerHTML='Forgot password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform='translateX(30px)'

})

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML='Sign Up';
    text.innerHTML='password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform='translateX(0px)'

})
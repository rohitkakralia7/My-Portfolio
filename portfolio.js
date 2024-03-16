let sidebar = document.getElementById("sidemenu");
function openmenu(){
    sidebar.style.right = "0px";
}
function closemenu(){
    sidebar.style.right = "-200px";
}

// mode
function changeMode(){
    const body = document.querySelector("body");
    if(body.classList.contains('light', 'animatedButton', 'circleInButton')){
        body.classList.remove('light', 'animatedButton', 'circleInButton');
        body.classList.add('dark', 'darkAnimatedButton','darkCircleInButton');
    }else{
        body.classList.remove('dark', 'darkAnimatedButton', 'darkCircleInButton');
        body.classList.add('light', 'animatedButton', 'circleInButton');
    }
}
// let modeBtn = document.querySelector("#btn");
// let currMode = "light";
// modeBtn.addEventListener("click", ()=>{
//        if(currMode === "ligth"){
//             currMode = "dark";
//             document.querySelector("body").classList.add("dark");
//             document.querySelector("body").classList.remove("light");

//        }else{
//         currMode = "light";
//         document.querySelector("body").classList.add("light");
//         document.querySelector("body").classList.remove("dark");
//        }
//        console.log(currMode);
// });
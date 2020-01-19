var btns = document.getElementsByClassName('item-btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(){
        var btn = this;
        var parentItem = btn.parentNode;
        var object = parentItem.getElementsByClassName('object')[0]

        if (parentItem.classList.contains('circle')) {
            object.style.borderRadius = "0%";
            object.style.backgroundColor = object.getAttribute("data-color");
            btn.innerText = "make circle";
            parentItem.classList.remove('circle')
        } else {
            object.style.borderRadius = "50%";
            object.style.backgroundColor = "gray";
            btn.innerText = "make square";
            parentItem.classList.add('circle')
        }

        
    })    
}
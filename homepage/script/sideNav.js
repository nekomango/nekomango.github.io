function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; /* 添加模糊效果的背景色 */
    document.getElementById("openSidebarBtn").style.display = "none" /* 按鈕消失 */
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0)"; /* 恢復背景顏色 */
    setTimeout(function(){
        document.getElementById("openSidebarBtn").style.display = "block"
    }, 300)            
}
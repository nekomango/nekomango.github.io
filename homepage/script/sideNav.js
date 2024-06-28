function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("overlay").style.zIndex = "2"; /* 添加模糊效果的背景色 */
    document.getElementById("openSidebarBtn").style.display = "none" /* 按鈕消失 */
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.zIndex = "-1"; /* 恢復背景顏色 */
    setTimeout(function(){
        document.getElementById("openSidebarBtn").style.display = "block"
    }, 300)            
}
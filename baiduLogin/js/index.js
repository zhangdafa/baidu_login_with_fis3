$(document).ready(function() {
    // 更多产品
    $(".morePro").mouseover(function() {
        $(".right-col-pro").css({
            display: "block",
            opacity: 1,
            height: window.innerHeight
        });

    });
    $(".right-col-pro").mouseover(function() {
        $(".right-col-pro").css({
            display: "block",
            opacity: 1,
            height: window.innerHeight
        });
    });
    $(".right-col-pro").mouseout(function() {
        $(".right-col-pro").css({
            display: "none",
            opacity: 0
        });
    });
    // 更多产品 结束
    //tab 切换
    //菜单
    var s_mine = $("#s_mine");
    var intro = $("#intro");
    var nav = $("#nav");
    var shopping = $("#shopping");
    // 前一个菜单
    var menu_befor = intro;
    //内容
    var s_contents_care = $("#s_contents_care");
    var s_contents_intro = $("#s_contents_intro");
    var s_contents_nav = $("#s_contents_nav");
    var s_contents_shopping = $("#s_contents_shopping");
    var s_menu_user_icon = $(".s_menu_user_icon");
    //前一个内容
    var click_befor = s_contents_intro;
    // 菜单的样式
    function index_menu(menus) {
        menus.addClass("active_menu");
        if (menus == s_mine) {
            s_menu_user_icon.css("background-position", "-144px 0");
            // s_menu_user_icon.addClass("s_menu_user_icon_tab");
        } else {
            // s_menu_user_icon.removeClass("s_menu_user_icon_tab");
            if (menu_befor == s_mine) {
                s_menu_user_icon.css("background-position", "-15px 0");
            }
        }
        menu_befor.removeClass("active_menu");
        menu_befor = menus;
    }
    // 内容的展现
    function index_content(contents) {
        contents.css("display", "block");
        click_befor.css("display", "none");
        click_befor = contents;
    }
    // 点击事件的绑定
    s_mine.on("click", function() {
        if (s_contents_care.css("display") == "block") {
            return;
        }
        index_menu(s_mine);
        index_content(s_contents_care);
    });
    intro.on("click", function() {
        if (s_contents_intro.css("display") == "block") {
            return;
        }
        index_menu(intro);
        index_content(s_contents_intro);
    });
    nav.on("click", function() {
        if (s_contents_nav.css("display") == "block") {
            return;
        }
        index_menu(nav);
        index_content(s_contents_nav);
    });
    shopping.on("click", function() {
        if (s_contents_shopping.css("display") == "block") {
            return;
        }
        index_menu(shopping);
        index_content(s_contents_shopping);
    });
    //tab 切换结束
    // 换肤
    var changeSkin_btn = $("#changeSkin_btn");
    var changeSkin = $("#changeSkin");
    var slide_on = $("#slide_on");
    //下
    changeSkin_btn.on("click", function() {
        changeSkin.animate({
            top: 0,
            opacity: 1
        }), 2000;
    });
    //上
    slide_on.on("click", function() {
        changeSkin.animate({
            top: "-300px",
            opacity: 0
        });
    });
    // 改变s_menus  s_contents border
    // 颜色
    var color_original = "#e9e9e9";
    var color_coral = "#ff7f50";
    var color_yellowgreen = "#9acd32";
    // 改变的内容
    var s_menus = $(".s_menus");
    var s_contents = $(".s_contents");
    // 按钮
    var btn_coral = $(".coral");
    var btn_yellowgreen = $(".yellowgreen");
    var btn_delete_skin=$(".delete_skin");
    // 颜色赋值
    var color=getCookie("borderColor");
    if (color) {
    	setColor(color);
    }
    // delete_skin设置
    btn_delete_skin.on("click",function(){
    	addCookie("borderColor",color_original,1);
    	setColor(color_original);
    });
    // coral设置
    btn_coral.on("click", function() {
    	addCookie("borderColor",color_coral,1);
    	setColor(color_coral);
    });
    // greenyellow设置
    btn_yellowgreen.on("click", function() {
    	addCookie("borderColor",color_yellowgreen,1);
    	setColor(color_yellowgreen);
    });
    // 设置颜色
    function setColor(color){
    	s_menus.css("border-color",color);
    	s_contents.css("border-color",color);
    }
    // cookie
    function addCookie(objName, objValue, objHours) { //添加cookie 
        var str = objName + "=" + escape(objValue);
        if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失 
            var date = new Date();
            var ms = objHours * 3600 * 1000;
            date.setTime(date.getTime() + ms);
            str += "; expires=" + date.toGMTString();
        }
        document.cookie = str;
        // alert("添加cookie成功");
    }

    function getCookie(objName) { //获取指定名称的cookie的值 
        var arrStr = document.cookie.split("; ");
        for (var i = 0; i < arrStr.length; i++) {
            var temp = arrStr[i].split("=");
            if (temp[0] == objName)
                return unescape(temp[1]);
        }
    }

    function delCookie(name) { //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间 
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=a; expires=" + date.toGMTString();
    }
});

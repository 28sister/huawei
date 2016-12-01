/*切换tab标签*/
$(function () {
    $(".tabs li").eq(0).addClass("selected");
    $(".tab_inner").eq(0).show();
    $(".tabs li").click(function () {
        $(".tabs li").removeClass("selected");
        $(".tab_inner").hide();
        $(this).addClass("selected");
        $(".tab_inner").eq($(this).index()).show();
    });
});
/*搜索查询*/
function SiteSearch(send_url, divTgs, channel_name) {
    var strwhere = "";
    if (channel_name !== undefined) {
        strwhere = "&channel_name=" + channel_name
    }
    var str = $.trim($(divTgs).val());
    if (str.length > 0 && str != "输入关健字") {
        window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val()) + strwhere;
    }
    return false;
}
/*加入收藏*/
function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try { window.external.addFavorite(sURL, sTitle); } catch (e) {
        try { window.sidebar.addPanel(sTitle, sURL, ""); } catch (e) { alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置."); }
    }
}
/*设为首页*/
function SetHome(url) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else {
        alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
    }
}

/*切换特定内容字体大小*/
function ChangeFontSize(obj,changeId, size) {
    $(".change-size a").removeClass("on");
    $(obj).addClass("on");
    $("#" + changeId).css("font-size", size);
}

/*表单AJAX提交封装(包含验证)*/
function AjaxInitForm(formId, btnId, isDialog, urlId) {
    var formObj = $('#' + formId);
    var btnObj = $("#" + btnId);
    var urlObj = $("#" + urlId);
    formObj.Validform({
        tiptype: 3,
        callback: function (form) {
            /*AJAX提交表单*/
            $(form).ajaxSubmit({
                beforeSubmit: formRequest,
                success: formResponse,
                error: formError,
                url: formObj.attr("url"),
                type: "post",
                dataType: "json",
                timeout: 60000
            });
            return false;
        }
    });

    /*表单提交前*/
    function formRequest(formData, jqForm, options) {
        btnObj.prop("disabled", true);
        btnObj.val("提交中...");
    }

    /*表单提交后*/
    function formResponse(data, textStatus) {
        if (data.status == 1) {
            btnObj.val("提交成功");
            /*是否提示，默认不提示*/
            if (isDialog == 1) {
                $.dialog.tips(data.msg, 2, "32X32/succ.png", function () {
                    if (data.url) {
                        location.href = data.url;
                    } else if (urlObj.length > 0 && urlObj.val() != "") {
                        location.href = urlObj.val();
                    } else {
                        location.reload();
                    }
                });
            } else {
                if (data.url) {
                    location.href = data.url;
                } else if (urlObj) {
                    location.href = urlObj.val();
                } else {
                    location.reload();
                }
            }
        } else {
            $.dialog.alert(data.msg);
            btnObj.prop("disabled", false);
            btnObj.val("再次提交");
        }
    }
    /*表单提交出错*/
    function formError(XMLHttpRequest, textStatus, errorThrown) {
        $.dialog.alert("状态：" + textStatus + "；出错提示：" + errorThrown);
        btnObj.prop("disabled", false);
        btnObj.val("再次提交");
    }
}

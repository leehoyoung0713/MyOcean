/*
* mySpace
* */

$('.fFBpBV').on('click', function(){
    $('.fFBpBV').attr('class', 'Button-bqxlp0-0 fFBpBV');
    if($(this).text() === '월간'){
        $(this).attr('class', 'Button-bqxlp0-0 fFBpBV selected');
        $('.today').hide();
        $('.month').show();
    }else{
        $(this).attr('class', 'Button-bqxlp0-0 fFBpBV selected');
        $('.today').show();
        $('.month').hide();
    }
});


let content = '';
// $('.noticeContentWrap .btnWrap a').on('click',function(){
//     // console.log(content);
//     let text = ``;
//     // console.log(`<input type="text" style="border: solid 1px #98d8ec" value="${content}">`);
//
//
//     if($(this).text() === '수정'){
//         content = $(this).closest('.btnWrap').prev().children('.categoryAndDate').children('span').text();
//         // console.log($(this).closest('.btnWrap').prev().children('.categoryAndDate'));
//         text += `<a href="javascript:;" onclick="modifyTodo(this)">변경</a>`;
//         text += `<a href="javascript:;" onclick="cancelTodo(this)">취소</a>`;
//         $(this).closest('.btnWrap').prev().children('.categoryAndDate').html(`<input type="text" style="font-size: 14px; border: solid 1px #98d8ec" value="${content}">`);
//         $(this).closest('.btnWrap').html(text);
//     }
//     if($(this).text() === ''){
//         console.log(content);
//     }
//
//
// });
function removing(butt) {
    $(butt).closest('.noticeContentWrap').remove();
}

function modifying(butt) {
    let text = ``;
    content = $(butt).closest('.btnWrap').prev().children('.categoryAndDate').children('span').text();
    // console.log($(this).closest('.btnWrap').prev().children('.categoryAndDate'));
    text += `<a href="javascript:;" onclick="modifyTodo(this)">변경</a>`;
    text += `<a href="javascript:;" onclick="cancelTodo(this)">취소</a>`;
    $(butt).closest('.btnWrap').prev().children('.categoryAndDate').html(`<input type="text" style="font-size: 14px; border: solid 1px #98d8ec" value="${content}">`);
    $(butt).closest('.btnWrap').html(text);
}

function modifyTodo(butt) {
    let text = ``;
    let modify = $(butt).closest('.btnWrap').prev().children('.categoryAndDate').children('input[type=text]').val();
    console.log(modify);
    $(butt).closest('.btnWrap').prev().children('.categoryAndDate').html(`<span>${modify}</span>`);
    text += `<a href="javascript:;" onclick="modifying(this)">수정</a>`;
    text += `<a href="javascript:;" onclick="removing(this)">삭제</a>`;
    $(butt).closest('.btnWrap').html(text);
}

function cancelTodo(butt){
    let text = ``;
    console.log(content);
    $(butt).closest('.btnWrap').prev().children('.categoryAndDate').html(`<span>${content}</span>`);
    text += `<a href="javascript:;" onclick="modifying(this)">수정</a>`;
    text += `<a href="javascript:;" onclick="removing(this)">삭제</a>`;
    $(butt).closest('.btnWrap').html(text);
}

const date = new Date();
$('.dateTitle').text(`${date.getFullYear()}년 ${date.getMonth()+1}월`);
// 이전달 이동
$(`.prevDay`).on('click',function(){

    let d = new Date(date.setMonth(date.getMonth() - 1));
    $('.dateTitle').text(`${d.getFullYear()}년 ${d.getMonth()+1}월`);

});


// 다음달 이동
$(`.nextDay`).on('click', function(){
    let d = new Date(date.setMonth(date.getMonth() + 1));
    $('.dateTitle').text(`${d.getFullYear()}년 ${d.getMonth()+1}월`);
});

//등록
$('.sendBtn').on('click', function(e){
    e.preventDefault();

    if(!$('.inputWrap input:last-child').val()){
        alert("내용이 없습니다 내용을 작성해주세요!");
    }
    todoForm.submit();

});


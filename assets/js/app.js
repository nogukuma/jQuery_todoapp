// ゴミ箱のアイコン
let removeIcon = '<i class="far fa-trash-alt fa-lg"></i>';

// 完了アイコン
let doneIcon = '<i class="far fa-check-circle fa-lg"></i>';

// 追加ボタンがクリックされたときの処理
$('#add').click(function() {
    // 入力欄を取得
    let inputTask = $('#task');
 
    // 入力値を取得
    let task = inputTask.val();
    
    // 入力値が空かどうかチェックする
    if (task == '') {
        // 入力値が空の場合，処理を中断
        return;
    }

    // liタグの作成
    let li = $('<li>');

    // liに入力値を設定
    li.text(task);

    // divの作成
    let buttons = $('<div>');
    buttons.addClass('buttons');

    // buttonの作成
    // 削除ボタン
    let remove = $('<button>');
    remove.addClass('remove');
    remove.html(removeIcon);

    // 削除ボタンがクリックされたときの処理
    remove.click(removeTask);

    // 完了ボタン
    let done =$('<button>');
    done.addClass('done');
    done.html(doneIcon)

    // 完了ボタンがクリックされたときの処理
    done.click(doneTask);

    // divにボタンを追加
    buttons.append(remove);
    buttons.append(done);

    // liにdivを追加
    li.append(buttons);

    // NotYetのulにliを追加
    li.prependTo($('#not-yet')).hide().fadeIn('slow');

    // 入力値のリセット
    inputTask.val('');
});


// タスクを削除する関数
function removeTask() {
    // 削除するliを取得
    let task = $(this).closest('li');
    // タスクを削除する
    task.fadeOut('slow', function() {
        task.remove();
    });
}


// タスクを完了させる関数
function doneTask() {
    // 移動させるliを取得
    let task = $(this).closest('li');


    // liの親であるulのidを取得する
    let id = task.parent().attr('id');

    // doneのタスクの場合
    if (id == 'done') {
        // 処理を中断する
        return;
    }

    // タスクを移動させる
    task.fadeOut('slow', function() {
        task.prependTo($('#done')).fadeIn('slow');
    });
  
}
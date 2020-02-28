$(function() {
 
    // ボタンをクリックしたら発動
    $('button').click(function() {
   
      // 連打で暴走しないようにstop()も設定
      $('img').stop().fadeToggle(1000);
   
    });
  });$(function() {
 
  // ボタンをクリックしたら発動
  $('button').click(function() {
 
    // 連打で暴走しないようにstop()も設定
    $('div').stop().fadeToggle(1000);
 
  });
});



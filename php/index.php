<?php

if (isset ($_POST['name']) && isset($_POST['mail']) && isset($_POST['message'])){
   $name = $_POST['name'];
   $mail = $_POST['mail'];
   $message = $_POST['message'];

   if (mails( 'mail@mos-digital.com',
'Новое письмо',
'Проверка отправки письма на почту (по ТЗ)'. "\n".
'Вы ввели имя:'.$name. "\n".
'Вы ввели mail:'.$mail. "\n".
'Ваше сообщение:'.$message
   )){
      echo('Успешно отправлено');
   } else {
      echo('Error');
   }
}

?>

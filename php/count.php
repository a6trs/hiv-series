<?php
    // Usage:
    // page_id: The ID of the visited page.
    // count.php?page_id=3
    $f = fopen('pageview_record.txt', 'a');
    $page_id = $_GET['page_id'];
    // stackoverflow.com/q/3003145
    fprintf($f, '%s %s %s %d\n', date('YmdHis', time()),
        $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_X_FORWARDED_FOR'], $page_id);
    fclose($f);
?>

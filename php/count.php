<?php
    // Usage:
    // page_id: The ID of the visited page.
    // count.php?page_id=3
    $f = fopen('pageview_record.txt', 'a');
    $page_id = $_GET['page_id'];
    fprintf($f, '%s %d', date('YmdHis', time()), $page_id);
    fclose($f);
?>

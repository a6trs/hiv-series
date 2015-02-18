<?php
    /* This simple PHP can be hacked easily. Use a more complicated server program
     * to prevent the comment system from being hacked. */

    // Usage:
    // page_id: The ID of the visited page.
    // action: 'retrieve' or 'post'. See examples below.
    // comment.php?page_id=1&action=retrieve
    // comment.php?page_id=1&action=post&time=2.2&type=1&colour=#ffff00&text=Huh%20huh
    $action = $_GET['action'];
    $page_id = $_GET['page_id'];
    if ($action == 'post') {
        $f = fopen('danmaku.txt', 'a');
        // The data
        fprintf($f, "%d %.2f %d %s\n%s\n",
            $page_id, $_GET['time'], $_GET['type'], $_GET['colour'], $_GET['text']);
        // Data used only in analytics
        fprintf($f, "%s %s|%s\n", date('YmdHis', time()),
            $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_X_FORWARDED_FOR']);
        fclose($f);
    } else {
        $f = fopen('danmaku.txt', 'r');
        while (!feof($f)) {
            if (!fscanf($f, "%d %f %d %s", $cur_page_id, $time, $type, $colour)) break;
            $text = fgets($f);
            $text = substr($text, 0, strlen($text) - 1);
            $datetime = fgets($f);
            if ($cur_page_id == $page_id) {
                // That's what we're looking for!
                printf("acg.ext._233_add(%.2f, \"%s\", acg.colour('%s'), %d);\n",
                    $time, $text, $colour, $type);
            }
        }
        fclose($f);
        printf("acg.ext._233_commit();\n");
    }
?>

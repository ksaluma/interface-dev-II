<?php
header('Content-type: application/xml');

//google site map generator


$url="http://www.mysite.com/";

//return all files in this directory
$files1 = scandir(__DIR__);

//pages to exclude
//_chapter pages are handled later in the script
$not_pages=array('onfig', 'itemap', '_chapters');

//book names as they are referenced in their requisite php files:
$books=array('tippingpoint', 'vasectomy');

//this is part of the walker for the second foreach statement:
include_once(__DIR__.'/inc/chapter_arrays.php');

//function to check if this is a desired page:
function strposa($haystack, $needles=array(), $offset=0) {
        $chr = array();
        foreach($needles as $needle) {
                $res = strpos($haystack, $needle, $offset);
                if ($res !== false) $chr[$needle] = $res;
        }
        if(empty($chr)) return false;
        return min($chr);
}

$string='<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> ';
foreach($files1 as $file){
    if(stripos($file, '.php')!==false){       
        if (strposa($file, $not_pages, 1)) {
        } else {
            $string.='<url>
    <loc>'.$url.$file.'</loc> 
  </url>'."\n\r";

        }
        
    }
}

foreach($books as $book){
    $nbook=${$book};
    foreach($nbook as $k => $v){
        $string.='<url>
    <loc>'.$url.$book.'_chapters.php?ch='.$k.'</loc> 
  </url>'."\n\r";
    }
}
$string.='</urlset>';
echo $string;
?>




  




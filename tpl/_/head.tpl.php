<meta charset="utf-8" >

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<title>
<?
if(is_category()) {
	single_cat_title();
} else {
	the_title();
}
?>
</title>
<meta name="keywords" content="">
<meta name="description" content="">


<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta HTTP-EQUIV="Cache-Control" content="no-cache" />

<link type="image/x-icon" href="/favicon.ico" rel="shortcut icon" />
<link type="image/x-icon" href="/favicon.ico" rel="icon" />

<link href="<?php echo $this->path('css');?>/bootstrap/bootstrap.css" rel="stylesheet">
<link href="<?php echo $this->path('css');?>/site.css?update=<?=date("Ymd");?>" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->


<script src="https://yastatic.net/jquery/2.1.4/jquery.min.js"></script>
<script>
if(typeof window.jQuery === 'undefined') {
	document.write(
	unescape("%3Cscript src='<?php echo $this->path('js');?>/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
	);
}
</script>
<script src="<?php echo $this->path('js');?>/bootstrap.min.js" ></script>
<script src="<?php echo $this->path('js');?>/storage.js" ></script>

<script src="<?php echo $this->path('js');?>/document-ready.js" ></script>

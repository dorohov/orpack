<?
/*
$posts = $this->getItems(array(
	'post_type' => 'page',
	'posts_per_page' => -1,
	'orderby' => 'menu_order title date',
	'order'   => 'ASC',
	
	//'post_parent' => 0,
	//'tax_query' => array(array(
	//	'taxonomy' => 'project_taxonomies',
	//	'field' => 'slug',
	//	'terms' => array('residential'),
	//)),
	
));
foreach($posts as $p) {
	echo "<a href=\"" . l($p->ID) . "\" >{$p->post_title}</a>";
}
*/
?><!DOCTYPE html>
<html <?php language_attributes();?> class="no-js" >
<head>
<?
$this->tpl('_/head', array());
wp_head();
?>
</head>
<body <?php body_class('azbn7 _preloading'); ?>
	data-azbn7='{"php_process_session":"","path":{"root":"<?php echo '';?>"}}'
	data-azbn7__mdl__api='{"request_method":"POST","access_as":"profile","key":""}'
	>

<!--[[ azbntple tpl="/src/block/azbn7/b/_azbn7-preloader/.html" ]]-->

<div class="page-layout" >
	
	[[azbntple tpl="/src/block/site/common/header/.html" ]]
	
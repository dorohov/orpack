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

<header class="layout-header {{class}} " >
	<div class="header-menu b-container _limit-width" >
		<div class="item" >
			<div class="item" >
				<a href="<?=l(1);?>" >Продукция</a>
			</div>
			<div class="item _active" >
				<a href="<?=l(31);?>" >О компании</a>
			</div>
			<div class="item" >
				<a href="<?=l(39);?>" >Контакты</a>
			</div>
		</div>
		<div class="item" >
			<div class="item" >
				<a href="<?=$this->getMeta(1, 'product_catalog_download');?>" class="_blue" >Полный каталог продукции</a>
			</div>
		</div>
		<div class="item" >
			<a href="<?=l(1);?>" ><img src="<?=$this->path('img');?>/common/site-logo.png" /></a>
		</div>
	</div>
</header>
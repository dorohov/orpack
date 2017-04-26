<?

function __theme__product__tpl($p) {
	global $Azbn;
	$model3d = get_field('model3d', $p->ID);

?>

<div class="item {{class}}" >
	<div class="item__content" >
		<div class="left" >
			<div class="code" ><?=$p->post_title;?></div>
			<div class="title" ><?=$Azbn->getMeta($p->ID, 'product-add-title');?></div>
			<div class="line" ></div>
			<div class="_bottom-div" >
				<div class="description" >
					<?=$p->post_content;?>
				</div>
			</div>
		</div>
		<div class="right" >
			<div class="code" >&nbsp;</div>
			<div class="download _white" >
				<a href="<?=get_field('product-pdf-material', $p->ID);?>" download="" >Информация о сырье</a>
			</div>
			<div class="line" ></div>
			<div class="_bottom-div" >
				<div class="download _blue" >
					<a href="<?=get_field('product-pdf-tech', $p->ID);?>" download="" >Технические данные</a>
				</div>
				
				<?
				if($model3d != '') {
				?>
				<div class="rotate-roll" >
					<a href="#product-roller" class="modal-link product-model-btn" data-product-id="<?=$p->ID;?>" data-product-model="<?=$model3d;?>" >
						<span class="product-model-btn__bg" >Покрутить катушку</span>
						<span class="product-model-btn__mirror" >Покрутить катушку</span>
					</a>
				</div>
				<?
				}
				?>
				
			</div>
		</div>
		<a href="#roll-<?=$p->ID;?>" class="center js-click" style="background-image:url(<?=$Azbn->Imgs->postImg($p->ID);?>);" ></a>
	</div>
</div>

<?
}

?>

<div class="layout-content gradient" >
	
	<div class="roll-container " >
		
		<?
		$posts = $this->getItems(array(
			'post_type' => 'product',
			'posts_per_page' => -1,
			'orderby' => 'menu_order title date',
			'order'   => 'ASC',
		));
		foreach($posts as $p) {
			__theme__product__tpl($p);
		}
		?>
		
	</div>
	
	
</div>
<?

function __theme__product__tpl($p) {
	global $Azbn;
	$model3d = get_field('model3d', $p->ID);

?>

<div class="item {{class}}" data-post-id="<?=$p->ID;?>" >
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
			<?
			$file = get_field('product-pdf-material', $p->ID);
			if($file != '') {
				$size = getAttSize($file);
			?>
			<div class="download _white" >
				<a href="<?=$file;?>" download="" >Информация о сырье (<?=$size;?>Mb)</a>
			</div>
			<?
			}
			?>
			<div class="line" ></div>
			<div class="_bottom-div" >
				
				<?
				$file = get_field('product-pdf-tech', $p->ID);
				if($file != '') {
					$size = getAttSize($file);
				?>
				<div class="download _blue" >
					<a href="<?=$file;?>" download="" >Технические данные (<?=$size;?>Mb)</a>
				</div>
				<?
				}
				?>
				
				<?
				if($model3d != '') {
				?>
				<div class="rotate-roll" >
					<a href="#product-roller" class="modal-link product-model-btn" data-product-id="<?=$p->ID;?>" data-product-title="<?=$p->post_title;?>" data-product-desc="<?=$Azbn->getMeta($p->ID, 'product-add-title');?>" data-product-model="<?=$model3d;?>" >
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

<div class="product-list b-container _limit-width " >
	
	<div class="" >
		<a href="#" class="product-link js-click" data-post-id="7" >Силикагель фасованный</a>
	</div>
	
	<div class="" >
		<a href="#" class="product-link js-click" data-post-id="11" >Катушка для сварочной проволоки D-200</a>
	</div>
	
	<div class="" >
		
		<a href="#" class="product-link js-click" data-post-id="14" >Катушка для сварочной проволоки D-300</a>
	</div>
	
	<div class="" >
		<div><a href="#" class="product-link js-click" data-post-id="16" >Биконическая катушка для широкого применения БК-125</a></div>
	</div>
	
	<div class="" >
		<div>Цилиндрическая катушка для широкого применения</div>
		<div class="space10" ></div>
		<div class="grid grid-12" >
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="18" >К-100</a>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="24" >К-200</a>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="20" >К-125</a>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="26" >К-250</a>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="22" >К-160</a>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 col-dl-6 col-lg-6" >
				<a href="#" class="product-link js-click" data-post-id="28" >КНК 01-001</a>
			</div>
		</div>
	</div>
	
</div>

<footer class="layout-footer {{class}} " >
	<div class="footer-grid grid grid-12 b-container _limit-width" >
		<div class="col-xs-12 col-sm-12 col-md-12 col-dl-12 col-lg-12 at-center" >
			<div class="copyright" >2009-<?=date('Y');?> OOO «ОРПЛАСТ»</div>
		</div>
	</div>
</footer>

</div>



<div class="content-modal " id="product-roller" >
	<div class="viewer-action-block" >
		<div class="white-block" >
			
			<a href="#close" class="close-btn" ></a>
			
			<div class="modal-content" >
				<div class="viewer" ></div>
				<div class="viewer-desc" >
					<span class="title" ></span>
					<span class="desc" ></span>
				</div>
			</div>
		</div>
	</div>
</div>


<script src="<?=$this->path('js');?>/modernizr.min.js" ></script>
<script src="<?=$this->path('js');?>/device.min.js" ></script>
<link href="<?=$this->path('css');?>/site.css?v=<?=date('Ym');?>" rel="stylesheet" />
<script src="<?=$this->path('js');?>/jquery.min.js" ></script>
<script src="<?=$this->path('js');?>/jquery.azbn7.js" ></script>
<script src="<?=$this->path('js');?>/jquery.touchSwipe.min.js" ></script>
<!--<script src="<?=$this->path('js');?>/document-ready-azbn7-mdls.js" ></script>-->
<script src="<?=$this->path('js');?>/document-ready.js?v=<?=date('Ym');?>" ></script>

<?
wp_footer();
$this->tpl('_/metrics', array());
?>

</body>
</html>
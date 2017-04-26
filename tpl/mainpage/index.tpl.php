<div>
<?
the_title();
?>
</div>

<div>
<?
the_content();
?>
</div>

<div>
<?
echo $this->getMeta($this->post['id'], 'azbn_page_tpl');
?>
</div>
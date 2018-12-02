<?php require_once("res/x5engine.php"); ?>
<!DOCTYPE html><!-- HTML5 -->
<html lang="en-GB" dir="ltr">
	<head>
		<title>Search - Mark McIntyre Astronomy and Astrophotography</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta name="author" content="Mark McIntyre" />
		<meta name="generator" content="Incomedia WebSite X5 Evolution 10.1.12.57 - www.websitex5.com" />
		<meta name="viewport" content="width=960" />
		<link rel="stylesheet" type="text/css" href="style/reset.css" media="screen,print" />
		<link rel="stylesheet" type="text/css" href="style/print.css" media="print" />
		<link rel="stylesheet" type="text/css" href="style/style.css" media="screen,print" />
		<link rel="stylesheet" type="text/css" href="style/template.css" media="screen" />
		<link rel="stylesheet" type="text/css" href="style/menu.css" media="screen" />
		<!--[if lte IE 7]><link rel="stylesheet" type="text/css" href="style/ie.css" media="screen" /><![endif]-->
		
		<script type="text/javascript" src="res/jquery.js?57"></script>
		<script type="text/javascript" src="res/x5engine.js?57"></script>
		<script type="text/javascript">
			x5engine.boot.push(function () { x5engine.bgStretch('style/bg.jpg', true, 0); });
		</script>
		
	</head>
	<body>
		<div id="imHeaderBg"></div>
		<div id="imFooterBg"></div>
		<div id="imPage">
			<div id="imHeader">
				<h1 class="imHidden">Search - Mark McIntyre Astronomy and Astrophotography</h1>
				
			</div>
			<a class="imHidden" href="#imGoToCont" title="Skip the main menu">Go to content</a>
			<a id="imGoToMenu"></a><p class="imHidden">Main menu:</p>
			<div id="imMnMn" class="auto">
				<ul class="auto">
					<li id="imMnMnNode0">
						<a href="index.html">
							<span class="imMnMnFirstBg">
								<span class="imMnMnTxt"><span class="imMnMnImg"></span>Home Page</span>
							</span>
						</a>
					</li><li id="imMnMnNode3">
						<a href="image-gallery.html">
							<span class="imMnMnFirstBg">
								<span class="imMnMnTxt"><span class="imMnMnImg"></span>Image Gallery</span>
							</span>
						</a>
					</li><li id="imMnMnNode7">
						<span class="imMnMnFirstBg">
							<span class="imMnMnTxt"><span class="imMnMnImg"></span>Resources<span class="imMnMnLevelImg"></span></span>
						</span>
						<ul class="auto">
							<li id="imMnMnNode8" class="imMnMnFirst">
								<a href="arduino-based-timeserver.html">
									<span class="imMnMnBorder">
										<span class="imMnMnTxt"><span class="imMnMnImg"></span>Arduino based Timeserver</span>
									</span>
								</a>
							</li><li id="imMnMnNode9" class="imMnMnLast">
								<a href="how-to-guides-and-documents.html">
									<span class="imMnMnBorder">
										<span class="imMnMnTxt"><span class="imMnMnImg"></span>How To Guides and Documents</span>
									</span>
								</a>
							</li>
						</ul>
					</li><li id="imMnMnNode6">
						<a href="planet-graphs.html">
							<span class="imMnMnFirstBg">
								<span class="imMnMnTxt"><span class="imMnMnImg"></span>Planet Graphs</span>
							</span>
						</a>
					</li>
				</ul>
			</div>
			<div id="imContentGraphics"></div>
			<div id="imContent">
				<a id="imGoToCont"></a>
				<h2 id="imPgTitle">Search results</h2><?php
$search = new imSearch();
$keys = isset($_GET['search']) ? $_GET['search'] : "";
$page = isset($_GET['page']) ? $_GET['page'] : 0;
$type = isset($_GET['type']) ? $_GET['type'] : "pages"; ?>
<div class="searchPageContainer">
<?php echo $search->search($keys, $page, $type); ?>
</div>
				  
				<div class="imClear"></div>
			</div>
			<div id="imFooter">
				
			</div>
		</div>
		<span class="imHidden"><a href="#imGoToCont" title="Read this page again">Back to content</a> | <a href="#imGoToMenu" title="Read this site again">Back to main menu</a></span>
		<script type="text/javascript" src="cart/x5cart.js?57_636774032063160083"></script>

	<noscript class="imNoScript"><div class="alert alert-red">To use this website you must enable JavaScript</div></noscript>
				</body>
</html>

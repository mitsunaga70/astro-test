// アンカーリンク
if (document.body.classList.contains('pageTop')) {
	document
		.querySelector('.pageTop')
		.querySelectorAll(' a[href*="#"]')
		.forEach(function (link) {
			link.addEventListener('click', function (event) {
				event.preventDefault();

				// スクロールのスピード
				var speed = 500;

				// リンク元を取得
				var href = this.getAttribute('href');
				var of = href.indexOf('#');
				var result = href.substr(of);

				// リンク先を取得
				var target = document.querySelector(result || 'html');

				// リンク先までの距離を取得
				var position = target.getBoundingClientRect().top + window.pageYOffset;

				// スムーススクロール
				window.scrollTo({
					top: position,
					behavior: 'smooth',
				});
			});
		});
}

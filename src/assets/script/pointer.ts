import { TweenMax } from 'gsap';
// カーソルポインター
(function () {
	/* eslint-disable no-unused-vars */
	if (document.getElementById('js-sliderPointer')) {
		const pointer = document.getElementById('js-sliderPointer');
		let hovFlag = false;
		if (pointer) {
			//マウスに追従させる処理
			document.addEventListener('mousemove', function (e) {
				setTimeout(function () {
					pointer.style.transform =
						'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
				}, 10);
			});
			const activeElem = document.querySelectorAll('[data-pointer="active"]');
			const activeElem2 = document.querySelectorAll(
				'[data-pointer="active2"]'
			);
			const circle = document.querySelectorAll('#ac-cursor-progress circle');
			for (let i = 0; i < activeElem.length; i++) {
				//マウスホバー時
				activeElem[i].addEventListener('mouseover', function (e) {
					hovFlag = true;
					pointer.classList.add('is-hover');
					TweenMax.to(circle, 0.3, {
						strokeDashoffset: 0,
						overwrite: 1,
					});
				});
				//マウスホバー解除時
				activeElem[i].addEventListener('mouseout', function (e) {
					hovFlag = false;
					pointer.classList.remove('is-hover');
					TweenMax.to(circle, 0.3, {
						strokeDashoffset: 200,
						overwrite: 1,
					});
				});
			}
			for (let i = 0; i < activeElem2.length; i++) {
				//マウスホバー時

				activeElem2[i].addEventListener('mouseover', function (e) {
					hovFlag = true;
					pointer.classList.add('is-hover2');
					TweenMax.to(circle, 0.3, {
						strokeDashoffset: 0,
						overwrite: 1,
					});
				});
				//マウスホバー解除時
				activeElem2[i].addEventListener('mouseout', function (e) {
					hovFlag = false;
					pointer.classList.remove('is-hover2');
					TweenMax.to(circle, 0.3, {
						strokeDashoffset: 200,
						overwrite: 1,
					});
				});
			}
		}
	}
})();
  /* eslint-enable no-unused-vars */


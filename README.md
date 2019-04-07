example svg-mask

Mask 
DAY 4 - SVG Mask

Маски на svg накладываются с помощью mask https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask	
и clip-path
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath	

Разница между ними в алгоритме обрезания - mask обрезает, учитывая насыщенность цвета, clip-path обрезает ровно по форме маски.

Подробно о них, обратите внимание на атрибуты maskUnits и maskContentUnits
http://css.yoksel.ru/svg-masks/	

Примеры масок
https://habr.com/ru/post/349362/	

Вместе с масками часто используются паттерны, как для отрисовки повторяющегося фона, так и для фоновых изображений
https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern	

Подробнее о них
http://css.yoksel.ru/svg-patterns/	


Задание

Нарисовать прямоугольник, фоном у которого будет паттерн из ромбиков. Svg должно быть относительных размеров и в центре всегда должен стоять центр одного из ромбов.
Нарисовать прозрачную звезду с обводкой, которая по наведению на нее будет медленно закрашиваться.

window.onload = function () {
var speed = 10, // the box will move by 10 pixels on every step
direction = 1, // 1 = move right; -1 = move left
boxElement = document.getElementById('box2');

if (boxElement) {
    boxElement.addEventListener('mouseover', function () {
        // Calculate and store some of the box coordinates:
        var boxLeftPos = boxElement.offsetLeft,
            boxRightPos = boxLeftPos + boxElement.offsetWidth;
        // When right side of the box goes too far - change direction:
        if (boxRightPos > document.body.offsetWidth) {
            direction = -1;
        }
        // When left side of the box goes too far - change direction:
        if (boxLeftPos < 0) {
            direction = 1;
        }
        // Recalculate position:
        boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
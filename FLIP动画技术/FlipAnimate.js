/**
 * Creates a new instance of the FlipAnimate class.
 *
 * @param {Array} _element_list - The list of elements to animate.
 * @param {Object} options - The options for the animation (default: { duration: 600, easing: 'cubic-bezier(0.33,1,0.68,1)' }).
 * @return {void}
 */
function FlipAnimate(_element_list, options = { duration: 600, easing: 'cubic-bezier(0.33,1,0.68,1)' }) {
    console.log(_element_list)
    this.elements = Array.from(_element_list);
    this.options = options;//用户自定义配置
    this.firstPosition = [];//动画开始状态
    this.lastPosition = [];//动画结束状态
    this.first();//开始动画
}

//播放动画 paly
FlipAnimate.prototype.play = function () {
    this.last();
    this.invert();
}
//first状态
FlipAnimate.prototype.first = function () {
    this.firstPosition = this.getPosition()
}

//last状态
FlipAnimate.prototype.last = function () {
    this.lastPosition = this.getPosition()
}

//计算元素倒置差值
FlipAnimate.prototype.invert = function () {
    //获取每一个元素的first和last元素差值
    const diffrencePosition = this.firstPosition.map((first, index) => {
        const last = this.lastPosition[index];
        return {
            left: first.left - last.left,
            top: first.top - last.top
        }

    })
    this.elements.forEach((element, index) => {
        const { left, top } = diffrencePosition[index]
        console.log(left, top)
        element.animate([
            {
                transform: `translate(${left}px,${top}px)`
            },
            {
                transform: 'none'
            }
        ], {
            duration: this.options.duration,
            easing: this.options.easing
        })
    })
}

//获取元素当前位置
FlipAnimate.prototype.getPosition = function () {
    return this.elements.map(element => {
        return element.getBoundingClientRect();
    })
}
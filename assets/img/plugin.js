import { EventEmitter } from "events";
import VirtualScroll from "virtual-scroll";
import raf from "raf";
import transform from "prefix";

const test = {
  HorizontalScroll: class extends EventEmitter {
    constructor(opts) {
      super();
      this._bind();

      // Set default options
      this.options = Object.assign(
        {
          container: opts.container,
          blocks: opts.blocks,
          isAnimated: opts.isAnimated || false,
          spring: opts.spring || 0.1,
          skewReducer: opts.skewReducer || 20,
          skewLimit: opts.skewLimit || 30,
        },
        opts
      );

      this.vars = {
        scrollValue: 0,
        oldScrollValue: 0,
        scrollTarget: 0,
        scrollLeft: 0,
        scrollRight: 0,
        spring: this.options.spring,
        direction: 0,
        speed: 0,
        speedTarget: 0,
      };

      this.wrapper = document.createElement("div");
      this.wrapper.setAttribute("class", "horizontal-scroll");

      this.vs = new VirtualScroll();
      this.transform = transform("transform");
      this.raf = raf;

      this._setUI();
      this._addEvents();
      this.onResize();
    }

    // PRIVATE
    _bind() {
      this._update = this._update.bind(this);
      this.onResize = this.onResize.bind(this);
      this._onScroll = this._onScroll.bind(this);
    }

    _addEvents() {
      this.vs.on("scroll", this._onScroll);
      this.raf(this._update);
      window.addEventListener("resize", this.onResize);
    }

    _removeEvents() {
      this.raf.cancel(this._update);
      window.removeEventListener("resize", this.onResize);
    }

    _setUI() {
      Object.assign(this.wrapper.style, {
        position: "absolute",
        top: "0",
        left: "0",
        "backface-visibility": "hidden",
        "will-change": "transform",
      });

      Object.assign(this.options.container[0].style, {
        "white-space": "nowrap",
        position: "relative",
      });

      Array.from(this.options.blocks).forEach((block) => {
        block.style.display = "inline-block";
        this.options.container[0].replaceChild(this.wrapper, block);
        this.wrapper.appendChild(block);
      });

      this.options.container[0].appendChild(this.wrapper);
    }

    _onScroll(e) {
      this.vars.direction = e.deltaY > 0 ? 1 : -1;
      this.vars.scrollTarget += e.deltaY * -1;
      this.vars.scrollTarget = Math.round(
        Math.max(
          this.vars.scrollLeft,
          Math.min(this.vars.scrollTarget, this.vars.scrollRight)
        )
      );
    }

    _update() {
      // SCROLL VALUE
      this.vars.scrollValue +=
        (this.vars.scrollTarget - this.vars.scrollValue) * this.vars.spring;

      // DELTA
      let delta = this.vars.scrollTarget - this.vars.scrollValue;
      let skew = delta / this.options.skewReducer;
      this.vars.speed = this._clamp(
        -skew,
        -this.options.skewLimit,
        this.options.skewLimit
      );

      // TRANSFORM
      if (this.options.isAnimated) {
        this.wrapper.style[
          this.transform
        ] = `translate3d(-${this.vars.scrollValue}px, 0 ,0) skewX(${this.vars.speed}deg)`;
      } else {
        this.wrapper.style[
          this.transform
        ] = `translate3d(-${this.vars.scrollValue}px, 0 ,0)`;
      }

      this.vars.oldScrollValue = this.vars.scrollValue;
      this.raf(this._update);
    }

    _clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }

    // PUBLIC
    onResize() {
      this.vars.scrollLeft = 0;
      this.vars.scrollRight =
        this.wrapper.getBoundingClientRect().width - window.innerWidth;
    }

    destroy() {
      this._removeEvents();
    }
  },
};

export default test;

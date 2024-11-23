import {
  DestroyRef,
  ElementRef,
  Injectable,
  NgClass,
  Renderer2,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  isSignal,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-PANTT52U.js";

// src/app/_shared/constants.ts
var DIRECTIONS = {
  NORTH: "NORTH",
  SOUTH: "SOUTH",
  EAST: "EAST",
  WEST: "WEST"
};
var DIRECTION_MAP = {
  [DIRECTIONS.NORTH]: { x: 0, y: 1 },
  [DIRECTIONS.SOUTH]: { x: 0, y: -1 },
  [DIRECTIONS.EAST]: { x: 1, y: 0 },
  [DIRECTIONS.WEST]: { x: -1, y: 0 }
};

// src/app/_shared/components/robot/robot.component.ts
var RobotComponent = class _RobotComponent {
  /**
   * The robot's position on the grid.
   * The cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  cell = input.required();
  /**
   * Emits the position of the robot when it is placed on the grid.
   */
  placeRobot = output();
  static \u0275fac = function RobotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RobotComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RobotComponent, selectors: [["app-robot"]], inputs: { cell: [1, "cell"] }, outputs: { placeRobot: "placeRobot" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 2, consts: [["title", "Place Robot", "data-cy", "robot-cell", 1, "grid-cell", 3, "click", "ngClass"]], template: function RobotComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function RobotComponent_Template_div_click_0_listener() {
        return ctx.placeRobot.emit({ x: ctx.cell().x, y: ctx.cell().y });
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275propertyInterpolate1("ngClass", "robot--", (tmp_0_0 = ctx.cell().direction) == null ? null : tmp_0_0.toLowerCase(), "");
    }
  }, dependencies: [NgClass], styles: ["\n\n.grid-cell[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  width: 5rem;\n  height: 5rem;\n  background-image: url(/assets/robot-sheet.png);\n  background-position: -35px -175px;\n  cursor: pointer;\n}\n.robot--north[_ngcontent-%COMP%] {\n  background-position: -35px -385px;\n}\n.robot--south[_ngcontent-%COMP%] {\n  background-position: -35px -73px;\n}\n.robot--east[_ngcontent-%COMP%] {\n  background-position: -35px -281px;\n}\n.robot--west[_ngcontent-%COMP%] {\n  background-position: -35px -488px;\n}\n/*# sourceMappingURL=robot.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RobotComponent, { className: "RobotComponent", filePath: "src\\app\\_shared\\components\\robot\\robot.component.ts", lineNumber: 17 });
})();

// src/app/_shared/components/tabletop/tabletop.component.ts
function TabletopComponent_For_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-robot", 4);
    \u0275\u0275listener("placeRobot", function TabletopComponent_For_3_For_2_Template_app_robot_placeRobot_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.placeRobot.emit($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    \u0275\u0275property("cell", cell_r3);
  }
}
function TabletopComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, TabletopComponent_For_3_For_2_Template, 1, 1, "app-robot", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r4);
  }
}
var TabletopComponent = class _TabletopComponent {
  /**
   * The grid for the tabletop.
   * The grid is a two-dimensional array of cells. Each cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  grid = input.required();
  /**
   * Emits the position of the robot when it is placed on the grid.
   */
  placeRobot = output();
  static \u0275fac = function TabletopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabletopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TabletopComponent, selectors: [["app-tabletop"]], inputs: { grid: [1, "grid"] }, outputs: { placeRobot: "placeRobot" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [["data-cy", "tabletop", 1, "grid-container"], ["data-cy", "tabletop-grid", 1, "grid"], [1, "grid-row"], [3, "cell"], [3, "placeRobot", "cell"]], template: function TabletopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, TabletopComponent_For_3_Template, 3, 0, "div", 2, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.grid());
    }
  }, dependencies: [RobotComponent], styles: ["\n\n.grid-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n.grid-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n  grid-auto-rows: 1fr;\n}\n/*# sourceMappingURL=tabletop.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TabletopComponent, { className: "TabletopComponent", filePath: "src\\app\\_shared\\components\\tabletop\\tabletop.component.ts", lineNumber: 18 });
})();

// src/app/_pages/robot-simulator/robot-simulator-disabled-button.directive.ts
var RobotSimulatorDisabledButtonDirective = class _RobotSimulatorDisabledButtonDirective {
  appRobotSimulatorDisabledButton = input();
  title = input("Please place the robot first");
  #renderer = inject(Renderer2);
  #el = inject(ElementRef);
  ngOnChanges(changes) {
    if (changes["appRobotSimulatorDisabledButton"]) {
      this.#updateDisabledState();
      this.#updateTitle();
    }
  }
  #updateDisabledState() {
    const isDisabled = this.appRobotSimulatorDisabledButton();
    if (isDisabled) {
      this.#renderer.setStyle(this.#el.nativeElement, "cursor", "not-allowed");
      this.#renderer.setProperty(this.#el.nativeElement, "disabled", true);
    } else {
      this.#renderer.setStyle(this.#el.nativeElement, "cursor", "pointer");
      this.#renderer.setProperty(this.#el.nativeElement, "disabled", false);
    }
  }
  #updateTitle() {
    const tooltip = this.title();
    if (tooltip) {
      this.#renderer.setAttribute(this.#el.nativeElement, "title", tooltip);
    } else {
      this.#renderer.removeAttribute(this.#el.nativeElement, "title");
    }
  }
  static \u0275fac = function RobotSimulatorDisabledButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RobotSimulatorDisabledButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RobotSimulatorDisabledButtonDirective, selectors: [["", "appRobotSimulatorDisabledButton", ""]], inputs: { appRobotSimulatorDisabledButton: [1, "appRobotSimulatorDisabledButton"], title: [1, "title"] }, standalone: true, features: [\u0275\u0275NgOnChangesFeature] });
};

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
function toDeepSignal(signal2) {
  const value = untracked(() => signal2());
  if (!isRecord(value)) {
    return signal2;
  }
  return new Proxy(signal2, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}
function isRecord(value) {
  return value?.constructor === Object;
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = Symbol("STATE_SOURCE");
function patchState(stateSource, ...updaters) {
  stateSource[STATE_SOURCE].update((currentState) => updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState));
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  return stateSource[STATE_SOURCE]();
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        computedSignals,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), computedSignals), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key in storeMembers) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: signal({}),
    stateSignals: {},
    computedSignals: {},
    methods: {},
    hooks: {}
  };
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  if (!ngDevMode) {
    return;
  }
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.computedSignals), store.methods);
  const overriddenKeys = Object.keys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.join(", "));
  }
}
function withComputed(signalsFactory) {
  return (store) => {
    const computedSignals = signalsFactory(__spreadValues(__spreadValues({}, store.stateSignals), store.computedSignals));
    assertUniqueStoreMembers(store, Object.keys(computedSignals));
    return __spreadProps(__spreadValues({}, store), {
      computedSignals: __spreadValues(__spreadValues({}, store.computedSignals), computedSignals)
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.computedSignals), store.methods));
    assertUniqueStoreMembers(store, Object.keys(methods));
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Object.keys(state);
    assertUniqueStoreMembers(store, stateKeys);
    store[STATE_SOURCE].update((currentState) => __spreadValues(__spreadValues({}, currentState), state));
    const stateSignals = stateKeys.reduce((acc, key) => {
      const sliceSignal = computed(() => store[STATE_SOURCE]()[key]);
      return __spreadProps(__spreadValues({}, acc), {
        [key]: toDeepSignal(sliceSignal)
      });
    }, {});
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

// src/app/_store/robot-simulator/robot-simulator.helpers.ts
function isRobotOnGrid({ x, y, gridSize }) {
  return x !== void 0 && y !== void 0 && gridSize !== void 0 && x >= 0 && x < gridSize && y >= 0 && y < gridSize;
}
function isRobotPlaced({ x, y, direction }) {
  return x !== void 0 && y !== void 0 && direction !== void 0;
}
function generateGrid(x, y, direction, gridSize) {
  const size = gridSize;
  if (!size)
    return [];
  return Array.from({ length: size }, (_, rowIndex) => Array.from({ length: size }, (_2, colIndex) => {
    const adjustedY = size - 1 - rowIndex;
    return x === colIndex && adjustedY === y ? { x: colIndex, y: adjustedY, direction } : { x: colIndex, y: adjustedY, direction: void 0 };
  }));
}
function rotateDirection(direction, isLeft) {
  const directions = [
    DIRECTIONS.NORTH,
    DIRECTIONS.EAST,
    DIRECTIONS.SOUTH,
    DIRECTIONS.WEST
  ];
  const currentIndex = directions.indexOf(direction);
  const nextIndex = isLeft ? (currentIndex + 3) % directions.length : (currentIndex + 1) % directions.length;
  return directions[nextIndex];
}

// src/app/_store/robot-simulator/robot-simulator.store.ts
var initialState = {
  x: void 0,
  y: void 0,
  direction: void 0,
  gridSize: void 0
};
var RobotSimulatorStore = signalStore(withState(initialState), withComputed(({ x, y, direction, gridSize }) => ({
  /**
   * Returns true if the robot is placed on the grid.
   */
  isPlaced: computed(() => isRobotPlaced({
    x: x(),
    y: y(),
    direction: direction(),
    gridSize: gridSize()
  })),
  /**
   * Returns true if the robot is on the grid and within the bounds of the grid.
   */
  isOnGrid: computed(() => isRobotOnGrid({ x: x(), y: y(), gridSize: gridSize() })),
  /**
   * Returns the report of the robot's position and direction.
   */
  report: computed(() => `${x()},${y()},${direction()}`),
  /**
   * Returns the grid for the tabletop. The grid is a two-dimensional array of cells.
   * Each cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  grid: computed(() => generateGrid(x(), y(), direction(), gridSize())),
  /**
   * Returns the robot's position on the grid. The cell is an object with x, y, and direction properties.
   * The direction property is optional and determines if the robot is in the cell and facing a specific direction.
   */
  position: computed(() => ({ x: x(), y: y(), direction: direction() }))
})), withMethods((store) => ({
  /**
   * Sets the grid size for the tabletop.
   */
  setGridSize(size) {
    patchState(store, (state) => __spreadProps(__spreadValues({}, state), { gridSize: size }));
  },
  /**
   * Places the robot on the grid.
   */
  place({ x, y, direction }) {
    return patchState(store, (state) => {
      if (!state.gridSize) {
        console.warn("Grid size must be set before placing the robot.");
        return state;
      }
      return __spreadProps(__spreadValues({}, state), { x, y, direction });
    });
  },
  /**
   * Moves the robot one unit in the direction it is facing.
   * The robot cannot move off the grid.
   */
  move() {
    return patchState(store, (state) => {
      if (!store.isPlaced()) {
        console.warn("Robot is not placed. Please place the robot first.");
        return state;
      }
      const { x, y, direction, gridSize } = state;
      if (isRobotPlaced({ x, y, direction, gridSize })) {
        const { x: xDirection, y: yDirection } = DIRECTION_MAP[direction];
        const newX = x + xDirection;
        const newY = y + yDirection;
        if (isRobotOnGrid({ x: newX, y: newY, gridSize })) {
          return __spreadProps(__spreadValues({}, state), { x: newX, y: newY });
        } else {
          console.warn("Move is out of bounds. The robot cannot move off the grid.");
        }
      }
      return state;
    });
  },
  /**
   * Rotates the robot 90 degrees to the left
   */
  rotateLeft() {
    return patchState(store, (state) => {
      if (!store.isPlaced()) {
        console.warn("Robot is not placed. Please place the robot first.");
        return state;
      }
      const { direction } = state;
      if (direction) {
        return __spreadProps(__spreadValues({}, state), { direction: rotateDirection(direction, true) });
      }
      return state;
    });
  },
  /**
   * Rotates the robot 90 degrees to the right
   */
  rotateRight() {
    return patchState(store, (state) => {
      if (!store.isPlaced()) {
        console.error("Robot is not placed. Please place the robot first.");
        return state;
      }
      const { direction } = state;
      if (direction) {
        return __spreadProps(__spreadValues({}, state), { direction: rotateDirection(direction, false) });
      }
      return state;
    });
  }
})));

// src/app/_pages/robot-simulator/robot-simulator.component.ts
var RobotSimulatorComponent = class _RobotSimulatorComponent {
  store = inject(RobotSimulatorStore);
  grid = this.store.grid;
  isRobotPlaced = this.store.isPlaced;
  onKeydown(event) {
    switch (event.key) {
      case "ArrowUp":
        this.store.move();
        break;
      case "ArrowDown":
        this.store.rotateRight();
        this.store.rotateRight();
        break;
      case "ArrowLeft":
        this.store.rotateLeft();
        break;
      case "ArrowRight":
        this.store.rotateRight();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.store.setGridSize(5);
  }
  report() {
    alert(this.store.report());
  }
  placeRobot(x, y) {
    this.store.place({ x, y, direction: DIRECTIONS.NORTH });
  }
  moveRobot() {
    this.store.move();
  }
  rotateRobotLeft() {
    this.store.rotateLeft();
  }
  rotateRobotRight() {
    this.store.rotateRight();
  }
  static \u0275fac = function RobotSimulatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RobotSimulatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RobotSimulatorComponent, selectors: [["app-robot-simulator"]], hostBindings: function RobotSimulatorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function RobotSimulatorComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275ProvidersFeature([RobotSimulatorStore]), \u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [["data-cy", "header", 1, "header"], [3, "placeRobot", "grid"], [1, "controls"], ["data-cy", "left-button", 3, "click", "appRobotSimulatorDisabledButton"], ["data-cy", "move-button", 3, "click", "appRobotSimulatorDisabledButton"], ["data-cy", "right-button", 3, "click", "appRobotSimulatorDisabledButton"], [1, "report-button"], ["data-cy", "report-button", 3, "click", "appRobotSimulatorDisabledButton"]], template: function RobotSimulatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275text(1, " Click to place the robot, use the buttons or arrows to move\n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "app-tabletop", 1);
      \u0275\u0275listener("placeRobot", function RobotSimulatorComponent_Template_app_tabletop_placeRobot_2_listener($event) {
        return ctx.placeRobot($event.x, $event.y);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function RobotSimulatorComponent_Template_button_click_4_listener() {
        return ctx.rotateRobotLeft();
      });
      \u0275\u0275text(5, "Left");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function RobotSimulatorComponent_Template_button_click_6_listener() {
        return ctx.moveRobot();
      });
      \u0275\u0275text(7, "Move");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function RobotSimulatorComponent_Template_button_click_8_listener() {
        return ctx.rotateRobotRight();
      });
      \u0275\u0275text(9, "Right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function RobotSimulatorComponent_Template_button_click_11_listener() {
        return ctx.report();
      });
      \u0275\u0275text(12, "Report");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("grid", ctx.grid());
      \u0275\u0275advance(2);
      \u0275\u0275property("appRobotSimulatorDisabledButton", !ctx.isRobotPlaced());
      \u0275\u0275advance(2);
      \u0275\u0275property("appRobotSimulatorDisabledButton", !ctx.isRobotPlaced());
      \u0275\u0275advance(2);
      \u0275\u0275property("appRobotSimulatorDisabledButton", !ctx.isRobotPlaced());
      \u0275\u0275advance(3);
      \u0275\u0275property("appRobotSimulatorDisabledButton", !ctx.isRobotPlaced());
    }
  }, dependencies: [TabletopComponent, RobotSimulatorDisabledButtonDirective], styles: ["\n\n.header[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  color: var(--on-secondary-color);\n  width: calc(25rem - 20px);\n  display: flex;\n  justify-content: center;\n  margin: 2rem auto;\n  padding: 15px;\n  border-radius: var(--border-radius);\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  gap: 1rem;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border-radius: var(--border-radius);\n  border: none;\n  background-color: var(--primary-color);\n  color: var(--on-secondary-color);\n  font-size: 14px;\n  cursor: pointer;\n  min-width: 5rem;\n}\n.report-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 2rem;\n  gap: 1rem;\n}\n.report-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: var(--on-secondary-color);\n  border: 1px solid var(--primary-color);\n  min-width: 10rem;\n}\n/*# sourceMappingURL=robot-simulator.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RobotSimulatorComponent, { className: "RobotSimulatorComponent", filePath: "src\\app\\_pages\\robot-simulator\\robot-simulator.component.ts", lineNumber: 23 });
})();
export {
  RobotSimulatorComponent
};
//# sourceMappingURL=chunk-EG3KCGEV.js.map

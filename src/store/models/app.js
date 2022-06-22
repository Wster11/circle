/**
 *
 * state状态
 * @typedef {Object} AppState
 * @description 应用本身使用的redux state
 * @property {boolean} collapsed: 侧边栏是否折叠
 */

const App = {
  state: {
    collapsed: true
  },
  reducers: {
    /**
     * @description 更新state
     * @param state: 当前state
     * @param payload: 更新state对象
     */
    updateState(state, payload) {
      return {
        ...state,
        ...payload
      };
    }
  },
  effects: {
    onCollapse(collapsed) {
      this.updateState({ collapsed });
    }
  }
};

export default App;

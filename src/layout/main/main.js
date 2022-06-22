import "./main.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { memo } from "react";

const Main = (props) => {
  console.log(props, "props");
  const { collapsed, onCollapse } = props;
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/login");
  };
  return (
    <div className="main">
      主页面
      <p onClick={goBack}>返回</p>
      <div>collapsed：{collapsed ? "true" : "false"}</div>
      <button
        onClick={() => {
          onCollapse(!collapsed);
        }}
      >
        switch
      </button>
    </div>
  );
};

const mapStateToProps = ({ app }) => {
  return {
    collapsed: app.collapsed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCollapse: (params) => {
      return dispatch({
        type: "app/onCollapse",
        payload: params
      });
    }
  };
};
export default memo(connect(mapStateToProps, mapDispatchToProps)(Main));

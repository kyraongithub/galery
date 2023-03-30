import { store } from "context/redux";
import { useEffect } from "react";
import { getGalery } from "services/Galery/http";
import { connect } from "react-redux";

const Home = () => {
  const { isLoading, galery } = store.getState();
  useEffect(() => {
    getGalery();
  }, []);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <div>
      {galery.map((item: any) => {
        return <p>test</p>;
      })}
    </div>
  );
};

const galeryStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading,
    galery: state.galery,
    history: state.history,
  };
};

// export default Home;
export default connect(galeryStateToProps)(Home);
